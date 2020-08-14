from sqlalchemy import create_engine

from hydenv.model import Base


class HydenvDatabase:
    """
    Hydenv database tool\n
    You can use this tool to install and populate new instances of
    the hydenv database. Works for local, remote and cloud instances.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://postgres:postgres@localhost:5432/postgres"):
        self.connection = connection

    def install(self, db_name='hydenv', role='hydenv', password='changeme', skip_init=False):
        """
        Install the database\n
        The connection passed needs to have granted privileges to create
        new database instances. Please note that the Postgis extension 
        has to be installed.
        :param db_name: database name
        :param role: The user for the new database instance
        :param password: The users password, HAS TO BE SET
        :param skip_init: Skip init step to run with other user
        :raises AttributeError: if the password was not given
        """
        if password == 'changeme':
            raise AttributeError('Please specify a password like --password=pw')
        
        # create the engine and create the user
        engine = create_engine(self.connection)

        # check if the user exists
        with engine.connect() as con:
            res = con.execute("SELECT true FROM pg_roles WHERE rolname='{usr}'".format(usr=role)).scalar()
            if res is not True:
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
        
        if not skip_init:
            print(res)
            
            # rebuild the connection
            host = self.connection.split('@')[1].split('/')[0]
            self.connection = 'postgresql://{usr}:{pw}@{host}/{db}'.format(
                usr=role, pw=password, host=host, db=db_name
            )
            self.init()
        else:
            print(res)

    def init(self):
        """
        Create all tables\n
        It is highly recommended to run this command with a user connected 
        who has less privileges than postgres.
        """
        engine = create_engine(self.connection)
        Base.metadata.create_all(engine)
        print('Done')


if __name__=='__main__':
    import fire
    fire.Fire(HydenvDatabase)
