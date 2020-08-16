import os
import sys 

from sqlalchemy import create_engine

from hydenv.models import Base
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
    def __init__(self, connection="postgresql://postgres:postgres@localhost:5432/postgres"):
        self.connection = connection

    def install(self, db_name='hydenv', role='hydenv', password='changeme', skip_init=False, env='export'):
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
        # create the engine and create the user
        engine = create_engine(self.connection)

        # check if the user exists
        with engine.connect() as con:
            res = con.execute("SELECT true FROM pg_roles WHERE rolname='{usr}'".format(usr=role)).scalar()
            if res is not True:
                if password == 'changeme':
                    raise AttributeError('Please specify a password like --password=pw')
                con.execute("CREATE USER {usr} WITH PASSWORD '{pw}'".format(usr=role, pw=password))
        
        # create the SQL and commit
        with engine.connect() as con:
            con.execute('commit')
            con.execute('CREATE DATABASE %s' % db_name)

        # grant 
        with engine.connect() as con:
            con.execute('commit')
            con.execute('GRANT ALL PRIVILEGES ON DATABASE "{db}" TO {usr}'.format(db=db_name, usr=role))
        
        # build the connection to the new database
        chunks = self.connection.split('/')
        uri = ''.join([chunks[0], '//', chunks[2], '/', db_name])
        engine = create_engine(uri)

        # connect and install postgis
        with engine.connect() as con:
            con.execute('CREATE EXTENSION postgis;')
            res = con.execute('Select PostGis_Full_Version();').scalar()
            
        # rebuild the connection
        host_port = self.connection.split('@')[1].split('/')[0]
        host, port = host_port.split(':')
        self.connection = 'postgresql://{usr}:{pw}@{host}:{port}/{db}'.format(
            usr=role, pw=password, host=host,port=port, db=db_name
        )
        # expose conn if 
        self.__expose_con(usr=role, pw=password, host=host, port=port, dbname=db_name)
        
        if skip_init:
            print(res)
            self.init()
        else:
            return res

    def init(self, clean=False):
        """
        Create all tables\n
        It is highly recommended to run this command with a user connected 
        who has less privileges than postgres.
        :param clean: If True, any existing table will be dropped
            before creating the tables.
        """
        engine = create_engine(self.connection)

        # drop if existing
        if clean:
            Base.metadata.drop_all(bind=engine)
        
        # creata tables
        Base.metadata.create_all(bind=engine)
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
