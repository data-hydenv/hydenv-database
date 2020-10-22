from hydenv.util import env


class HydenvEarthquakeExamples:
    """
    Eaarthquake Example Loader.\n
    Loads earthquake example data from Github (or other sources) and loads them into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)

        # set some URLs
        self._github_url = 'https://raw.githubusercontent.com/data-hydenv/data/master/extra/spatial/earthquake/earthquakes.csv'

    def run(self, normalize=False):
        """
        """
        raise NotImplementedError
