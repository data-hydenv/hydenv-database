from hydenv.examples.hobo import HydenvHoboExamples
from hydenv.examples.space import HydenvSpaceExamples


class HydenvExamples:
    r"""
    Example Loader.\n
    Loads example files from Github (or other sources) and loads them into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", quiet=False):
        # substitute and save
        self.__connection = connection
        self.quiet = quiet

    def hobo(self, terms='all', only=None, data_path='download'):
        """
        Import HOBO data.\n
        This high level script downloads all neccessary resources for the HOBO 
        measureing campaigns and uploads them to the specified database.
        You can limit the metadata by terms (like WT17, WT18 etc.) and upload only
        'metadata' or 'data'. Default is to upload both.
        :param terms: Either 'all' (default) or a specific term short name (like WT18) to use
        :param data_path: Either 'download' (default) or a local path to the data
        :param only: If set, only the given entities will be uploaded.
        """
        cli = HydenvHoboExamples(connection=self.__connection)
        return cli.run(terms=terms, data_path=data_path, only=only, quiet=self.quiet)

    def space(self, normalize=False):
        """
        Import Space Missions example data.\n
        This high level script downloads a database of all space Mission from 
        1957 until early 2020. The raw, de-normalized dataset is installed along 
        with the hydenv database and used in lecture to introduce SQL and normalization.
        The final normalized structure can be added using the normalize flag.
        :param normalize: If set, the data will be normalized before uplaod.
        """
        cli = HydenvSpaceExamples(connection=self.__connection)
        if normalize:
            raise NotImplementedError
        else:
            return cli.run(quiet=self.quiet)


if __name__=='__main__':
    import fire
    fire.Fire(HydenvExamples)
