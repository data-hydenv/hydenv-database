import os
import sys
import json

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from hydenv.models import Base, Term, Variable
from hydenv.examples.space import HydenvSpaceExamples
from hydenv.util import env


class HydenvDatabase:
    """
    Hydenv database tool\n
    You can use this tool to install and populate new instances of
    the hydenv database. Works for local, remote and cloud instances.
    This is the admin tool that needs database creation privileges and 
    is usually only run once.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)
        Session = sessionmaker(self.engine)
        self.session = Session()

    def save(self, user='hydenv', password='hydenv', host='localhost', port='5432', dbname='hydenv'):
        """
        Store the connection information to a file.\n
        Be careful, this function will strore the password to a file in home directory.
        :param usr: PostgreSQL user role
        :param pw: User role password
        :param host: PostgreSQL databse host
        :param port: port of the PostgreSQL daemon
        :param dbname: Database name for Hydenv
        """
        env.store_file(usr=user, pw=password, host=host, port=port, dbname=dbname)

    def connections(self):
        """
        Shows the stored connection information on this machine. 
        Note, this will contain the cleartext password if set.
        """
        return env.read_file()

    def install(self, db_name='hydenv', user='hydenv', password='hydenv', skip_init=False):
        """
        Install the database\n
        The connection passed needs to have granted privileges to create
        new database instances. Please note that the Postgis library 
        has to be installed.\n
        The tool will export the connection info to the current command line 
        session. This behavior can be overwritten.
        This behavior 
        :param db_name: database name
        :param role: The user for the new database instance
        :param password: The users password, HAS TO BE SET
        :param skip_init: Skip init step to run with other user
        :param env: Either 'suppress', 'export' or 'file'\n
            - suppress will do nothing
            - export will expose connection params as environement variables
            - file will write them to an .env file.
        :raises AttributeError: if the password was not given
        """
        # check if the user exists
        with self.engine.connect() as con:
            res = con.execute("SELECT true FROM pg_roles WHERE rolname='{usr}'".format(usr=role)).scalar()
            if res is not True:
                if password == 'changeme':
                    raise AttributeError('Please specify a password like --password=pw')
                con.execute("CREATE USER {usr} WITH PASSWORD '{pw}'".format(usr=role, pw=password))
        
        # create the SQL and commit
        with self.engine.connect() as con:
            con.execute('commit')
            con.execute('CREATE DATABASE %s' % db_name)

        # grant 
        with self.engine.connect() as con:
            con.execute('commit')
            con.execute('GRANT ALL PRIVILEGES ON DATABASE "{db}" TO {usr}'.format(db=db_name, usr=role))
        
        # build the connection to the new database
        chunks = self.__connection.split('/')
        uri = ''.join([chunks[0], '//', chunks[2], '/', db_name])
        self.engine = create_engine(uri)

        # connect and install postgis
        with self.engine.connect() as con:
            con.execute('CREATE EXTENSION postgis;')
            res = con.execute('Select PostGis_Full_Version();').scalar()
            
        # rebuild the connection
        host_port = self.__connection.split('@')[1].split('/')[0]
        host, port = host_port.split(':')
        self.__connection = 'postgresql://{usr}:{pw}@{host}:{port}/{db}'.format(
            usr=role, pw=password, host=host,port=port, db=db_name
        )
        # expose conn if 
        self.__expose_con('file', usr=role, pw=password, host=host, port=port, dbname=db_name)
        
        if skip_init:
            return res
        else:
            print(res)
            self.init()

    def init(self, clean=False):
        """
        Create all tables\n
        It is highly recommended to run this command with a user connected 
        who has less privileges than postgres.
        :param clean: If True, any existing table will be dropped
            before creating the tables.
        """
        # drop if existing
        if clean:
            Base.metadata.drop_all(bind=self.engine)
        
        # creata tables
        Base.metadata.create_all(bind=self.engine)

        # import default Terms
        if clean:
            Term.defaults(session=self.session)
            Variable.defaults(session=self.session)
            cli = HydenvSpaceExamples(connection=self.__connection)
            cli.run(quiet=True)
        
        print('Done')

    def execute(self, sql: str, safe=True, json=False):
        """
        Execute any SQL query.\n
        Note: Do not expose this function in untrusted environments.
        :param sql: SQL query to run
        :param safe: If True (default), only a single SELECT is allowed
        :param json: If given, a list of dicts is returned, containing all column names
        """
        if safe:
            if not sql.lower().strip().startswith('select'):
                raise AttributeError('[SAFE MODE] only SELECT queries are allowed.')
            sql = sql.split(';')[0]
        
        with self.engine.connect() as con:
            result = con.execute(sql)
        
        if json:
            return [{k:v for k,v in row.items()} for row in result]
        else:
            return result.fetchall()
        

    def explain(self, sql: str, path=None, fmt='json', full=False, suppress_rollback=False) -> dict:
        """
        Analyse an sql query.\n
        You can pass any SQL query to run a perf test on the query planner.
        The output will be a dictionary containing the Planning and Execution 
        time for the whole query. The key 'Short' will contain a nested 
        brief summary of all steps' execution time and cost.
        If full is set to True, The raw query Planner ANALYSE output will be 
        attached as 'Full' key to the dictionary.
        :param sql: SQL query to analyse.
        :param path: If a file path is given, the output will be saved to that file
        :param fmt: One of ['json', 'text', 'xml', 'yaml']. Text is only suitable for command
            line output. XML and Yaml are suitable for file output. JSON can be used for 
            all outputs and is most sophisticated.
        :param full: If set to True, The plain ANALYSE output will be added to output.
            Only works with JSON output.
        """
        # check if sql is a file:
        if os.path.exists(sql):
            with open(sql, 'r') as f:
                sql = f.read()
        
        # build analyse query
        if not sql.lower().startswith('explain'):
            sql = "EXPLAIN (ANALYSE, FORMAT %s) %s;" % (fmt, sql)
        
        
        # execute the query
        with self.engine.connect() as con:
            # begin transaction if needed
            if not suppress_rollback:
                con.execute('BEGIN;')
            
            # run the query
            result = con.execute(sql)
            d = result.fetchall()

            # rollback transaction if needed
            if not suppress_rollback:
                con.execute('ROLLBACK;')
                
        # handle other output than JSON
        if fmt.lower() in ('xml', 'yaml'):
            return d[0][0]
        elif fmt.lower() == 'text':
            return '\n'.join([_[0] for _ in d])
        
        # extract info 
        while not isinstance(d, dict) or len(d) == 1:
            d = d[0]


        # build the query plan object
        explain = dict(
            Planning=d.get('Planning Time'), 
            Execution=d.get('Execution Time')
        )
        plan = d['Plan']

        # TODO maybe I need this somewhere else -> move into util?
        def parse_node(nodes):
            if isinstance(nodes, dict):
                newnode = {'action': nodes['Node Type']}
                if 'Actual Total Time' in nodes and 'Actual Startup Time' in nodes:
                    newnode['time'] = nodes['Actual Total Time'] - nodes['Actual Startup Time']
                if 'Total Cost' in nodes and 'Startup Cost' in nodes:
                    newnode['cost'] = nodes['Total Cost'] - nodes['Startup Cost']

                if 'Plans' in nodes:
                    newnode['plans'] = parse_node(nodes['Plans'])
                return newnode
            elif isinstance(nodes, list):
                return [parse_node(node) for node in nodes]
            else:
                return nodes
        
        # parse all nodes
        explain['Short'] = parse_node(plan)
        if full:
            explain['Full'] = plan
        
        if path is None:
            return explain
        else:
            with open(path, 'w') as f:
                json.dump(explain, f, indent=4)    

    def __expose_con(self, action, **kwargs):
        if action.lower() == 'suppress':
            return
        elif action.lower() == 'export':
            env.expose(**kwargs)
        elif action.lower() == 'file':
            env.store_file(**kwargs)
        else:
            raise AttributeError("env has to be one of 'suppress', 'export' or 'file'")


if __name__=='__main__':
    import fire
    fire.Fire(HydenvDatabase)
