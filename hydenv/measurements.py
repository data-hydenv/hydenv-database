import os

class HydenvMeasurements:
    """
    Measurements management tool\n
    This is the main tool for CRUD operations on the database.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # check for replacements
        args = dict()
        if '{usr}' in connection:
            args['usr'] = os.environ.get('POSTGRES_USER', 'hydenv')
        if '{pw}' in connection:
            args['pw'] = os.environ['POSTGRES_PASSWORD']
        if '{host}' in connection:
            args['host'] = os.environ.get('POSTGRES_HOST', 'localhost')
        if '{port}' in connection:
            args['port'] = os.environ.get('POSTGRES_PORT', 5432)
        if '{dbname}' in connection:
            args['dbname'] = os.environ.get('POSTGRES_DBNAME', 'hydenv')
        
        # substitute and save
        self.connection = connection.format(**args)

    def add_metadata(self, device_id, location, description, **kwargs):
        pass


if __name__=='__main__':
    import fire
    fire.Fire(HydenvMeasurements)
