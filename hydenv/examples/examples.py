from progressbar import ProgressBar

from hydenv.examples.hobo import HydenvHoboExamples
from hydenv.examples.space import HydenvSpaceExamples
from hydenv.examples.customers import HydenvCustomerExamples
from hydenv.examples.osm import HydenvOSMExamples
from hydenv.examples.earthquakes import HydenvEarthquakeExamples

CLIs = [HydenvHoboExamples, HydenvSpaceExamples, HydenvCustomerExamples, HydenvOSMExamples, HydenvEarthquakeExamples]

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
        return cli.run(normalize=normalize, quiet=self.quiet)

    def customers(self, k=500, normalize=False):
        """
        Import Customers example data.\n
        This high level script create a set of k random fake customer purchases 
        in fake stores. The data is not normalized and can be used for the 
        normalization sessions.
        :param k: number of purchases to create
        :param normalize: If True, the normalized scheme will be added as well.
        """
        cli = HydenvCustomerExamples(connection=self.__connection)
        return cli.run(quiet=self.quiet, k=k, normalize=normalize)

    def customer(self, **kwargs):
        return self.customers(**kwargs)

    def osm(self, action, *args, **kwargs):
        """
        Import OSM example data.\n
        This high level script downloads data from the OSM database and imports
        it into the hydenv database at given connection. You have to specify, 
        which example set should be loaded using the `action` parameter.
        There are the following example sets available:
        
        * energiewende
        * city-districts

        Additionally, you can use the more low level endpoints to access any data.

        * nodes (for POINT geometries)
        * ways (for LINESTRING and POLYGON geometries)

        Using the low level endpoints, you need to specify the `boundary`,
        `attribute` and `value` parameters.
        :param action: The CLI action to perfom. See docs above.
        :param boundary: string - Any valid OSM administrative boundary to limit
            the results to, like `"Baden-Württemberg"` or `"Freiburg im Breisghau"`.
        :param attribute: string - Any valid OSM Tag attribute for filtering.
            In most cases, this will be `amenity`.
        :param value: string - filter value. This is the value that the 
            attribute should have. If value is not given, all nodes with having 
            the tag will be returned. That can be a lot.
        """
        cli = HydenvOSMExamples(connection=self.__connection)

        if action.lower() == 'energiewende':
            return cli.energiewende(quiet=self.quiet, **kwargs)
        elif action.lower() == 'city-districts' or action.lower() == 'city_districts':
            return cli.city_districts(quiet=self.quiet, **kwargs)
        elif action.lower() == 'counties':
            return cli.counties(quiet=self.quiet, **kwargs)
        elif action.lower() == 'nodes':
            return cli.run('nodes', *args, quiet=self.quiet, **kwargs)
        elif action.lower() == 'way':
            return cli.run('way', *args, quiet=self.quiet, **kwargs)
        else:
            print("'%s' is not a supported OSM example." % action)

    def earthquake(self, normalize=False):
        """
        Import Earthquakes example data.\n
        This high level script downloads a database of earthquakes from 
        1967 to 2016 with a magnitude > 5.5. This dataset can be used for an advanced
        normalization exercise and as a spatial dataset with global coverage.
        The final normalized structure can be added using the normalize flag.
        :param normalize: If set, the data will be normalized before uplaod.
        """
        cli = HydenvEarthquakeExamples(connection=self.__connection, quiet=self.quiet)
        return cli.run(normalize=normalize)

    def clean(self): 
        """
        Cleaning Up.\n
        This command will clean all additional tables that were created by the CLI 
        which do not have a model representation in `hydenv.models`. This includes
        the normalized examples of space and customers.
        Usually, this is only called by the `database --clean` command and a 
        manual invocation is not needed
        """
        if not self.quiet:
            bar = ProgressBar(max_value=len(CLIs), redirect_stdout=True)
        
        # drop all extra tables
        for i, CLI in enumerate(CLIs):
            if hasattr(CLI, 'drop'):
                cli = CLI(connection=self.__connection)
                cli.drop()

                if not self.quiet:
                    bar.update(i + 1)


if __name__=='__main__':
    import fire
    fire.Fire(HydenvExamples)
