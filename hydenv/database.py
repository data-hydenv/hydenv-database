import os
import sys 

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from hydenv.models import Base, Term, Variable
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

    def save(self, usr='hydenv', pw='hydenv', host='localhost', port='5432', dbname='hydenv'):
        """
        Store the connection information to a file.\n
        Be careful, this function will strore the password to a file in home directory.
        :param usr: PostgreSQL user role
        :param pw: User role password
        :param host: PostgreSQL databse host
        :param port: port of the PostgreSQL daemon
        :param dbname: Database name for Hydenv
        """
        env.store_file(usr=usr, pw=pw, host=host, port=port, dbname=dbname)

    def install(self, db_name='hydenv', role='hydenv', password='hydenv', skip_init=False):
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
        engine = create_engine(uri)

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
        self.__expose_con(usr=role, pw=password, host=host, port=port, dbname=db_name)
        
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
        
        print('Done')

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
