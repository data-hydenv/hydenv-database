from typing import List
from progressbar import ProgressBar

from hydenv.examples.hobo import HydenvHoboExamples
from hydenv.examples.space import HydenvSpaceExamples
# from hydenv.examples.customers import HydenvCustomerExamples
from hydenv.examples.osm import HydenvOSMExamples
from hydenv.examples.earthquakes import HydenvEarthquakeExamples
from hydenv.examples.wbd import HydenvWorldBorderExample
from hydenv.examples.gpx import HydenvGPXExample
from hydenv.examples.raspi_logger import HydenvRaspiLoggerExample
from hydenv.examples.owm import HydenvOWMExample
from hydenv.examples.netatmo import HydenvNetatmoExample

CLIs = [HydenvHoboExamples, HydenvSpaceExamples, HydenvOSMExamples, HydenvEarthquakeExamples, HydenvWorldBorderExample, HydenvGPXExample, HydenvRaspiLoggerExample, HydenvOWMExample, HydenvNetatmoExample]

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
        # cli = HydenvCustomerExamples(connection=self.__connection)
        # return cli.run(quiet=self.quiet, k=k, normalize=normalize)
        return 'The customers CLI has been deprecated.\nA re-implementation is planned for v1.0.0.'

    def customer(self, **kwargs):
        #return self.customers(**kwargs)
        return 'The customers CLI has been deprecated.\nA re-implementation is planned for v1.0.0.'

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
            the results to, like `"Baden-Württemberg"` or `"Freiburg im Breisgau"`.
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
        elif action.lower() == 'node' or action.lower() == 'nodes':
            return cli.run('node', *args, quiet=self.quiet, **kwargs)
        elif action.lower() == 'way' or action.lower() == 'ways':
            return cli.run('way', *args, quiet=self.quiet, **kwargs)
        else:
            print("'%s' is not a supported OSM example." % action)

    def owm(self, save: str = None, fmt='json', variable=['temp', 'humidity'], if_exists='replace', repo_path='extra/weather/data', pattern='*_raw_dump.json',):
        """
        Import OpenWeatherMap example data.\n
        This high level script downloads data from the OpenWeatherMap database and 
        exports the data to the given save path. Currently, the direct upload to the 
        database is not yet supported.
        :param save: The path to save the data to.
        :param fmt: The format of the data. Currently, only json and csv is supported.
        :param variable: The variable to download. Defaults temperature and humidity.
        :param if_exists: Specifies the action if the data already exists. Can be 'replace', 'raise' or 'ignore'.
        :param repo_path: The path to the data *inside* the remote repository. Ususally you don't need to change this.
        :param pattern: The pattern to find the data dumps. Usually you don't need to change this.
        """
        cli = HydenvOWMExample(connection=self.__connection)
        return cli.run(quiet=self.quiet, fmt=fmt, save=save, variable=variable, if_exists=if_exists, repo_path=repo_path, pattern=pattern)

    def netatmo(self, action: str, password: str = None, city: str = None, bbox: List[float] = None, load: str = None, use_type='temperature', fmt='latex', **kwargs):
        """
        Download Netatmo personal weather station data.\n
        This high level script downloads data from the Netatmo API and exports
        it into a raw JSON dump file. The stations can be queried by BBox or a predifined
        city name. Additionally, the API can parse the JSON dump into columnar
        data formats. Upload to the database is not yet supported.
        The supported actions are:

        * get-data: download raw data dump
        * metadata: donload only the station metadata
        * parse: parse a raw data dump

        :param action: One of ['get-data', 'metadata', 'parse']
        :param password: The password to receive a Netatmo token from hydrocode. 
            Ignored for 'action=parse'.
        :param city: The city to download data for. Ignored for 'action=parse'.
        :param bbox: The bounding box to download data for. Ignored for 'action=parse'.
        :param required-data: Filter to query only stations, which include this measure.
            Defaults to 'temperature'. Ignored for 'action=parse'.
        :param save: The path to save the data to. Ignored for 'action=parse'.
        :param load: The filename of the raw data-dump. Only valid for 'action=parse'.
        :param use_type: The Netatmo measure type to extract from the dump.
            Defaults to 'temperature'. Only valid for 'action=parse'.
        :param fmt: The format of the data. Can be one of ['markdown', 'html', 'latex', 'csv'].
            Only valid for 'action=parse'.
        """
        # build the cli
        cli = HydenvNetatmoExample(password=password, quiet=self.quiet)

        # switch the action
        if action.lower() == 'get-data':
            return cli.run(bbox=bbox, city=city, **kwargs)
        elif action.lower() == 'metadata':
            kwargs['metadata_only'] = True
            return cli.run(bbox=bbox, city=city, **kwargs)
        elif action.lower() == 'parse':
            return cli.parse(fname=load, use_type=use_type, fmt=fmt, **kwargs)
        else:
            print('[ERROR] Unknown action: %s' % action)
            return
   
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

    def world_borders(self):
        """
        Load a minified version of the World Border dataset.\n
        This dataset should only be used as a overview for maps. There is 
        only very limited information in the tables and the border geometries
        are very coarse.
        """
        cli = HydenvWorldBorderExample(connection=self.__connection)
        return cli.run(quiet=self.quiet)

    def gpx(self, file_name, path_or_url=None):
        """
        Loads a GPX file into the database\n
        This tool can load any GPX file, either from a local path or a remote URL.
        The default path is the URL to the `extra/spatial/activity/` folder in the 
        hydenv data repository on Github.
        :param file-name: File name of the GPX file
        """
        cli = HydenvGPXExample(connection=self.__connection, quiet=self.quiet)
        return cli.run(fname=file_name)

    def activity(self, day='20201217', only=None):
        """
        Activity example.\n
        Loads activity GPX and corresponding raspi-logger raw dumped temperature 
        measurement data to the database.
        :param day: string YYYYMMDD formatted string of the activity day
        """
        gpx_fname = '%s_activity.gpx' % day
        log_fname = '%s_raspi_logger.dump.json' % day
        
        if only is None or only == 'gpx':
            if not self.quiet:
                print('Loading GPX file')
            gpx = HydenvGPXExample(connection=self.__connection, quiet=self.quiet)
            gpx.run(fname=gpx_fname)
        
        if only is None or only == 'raspi' or only == 'dump':
            if not self.quiet:
                print('Loading Raspi dump')
            log = HydenvRaspiLoggerExample(connection=self.__connection)
            log.run(fname=log_fname)
        
        if not self.quiet:
            print('All done.')
    

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
