import os
import glob

import geopandas as gpd
import pandas as pd
from sqlalchemy import create_engine
from tqdm import tqdm

from hydenv.util import env


class HydenvCamelsDeExample:
    """
    CAMELS-DE Dataset Example Loader.\n
    Loads the german CAMELS-DE dataset to the database. Please beaware, that the CAMELS-DE dataset
    is not yet published and you need a copy of the processing files on your drive, as this API does
    as of now only work with local files.
    The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    :param source_dir: string - overwrite the default data url to load other data. 
    :param quiet: bool - suppresses print output to stdout
    :param only: string - load --only=metadata for omitting the data upload. If not set, you need to specify the source_dir 
    :param nuts-filter: Filter for only one or more federal state by using its NUTS lvl2 ID (ie. DE1); use 'all' to load all

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", source_dir: str = None, quiet: bool = True): 
        # set the source param
        self.source_dir = source_dir
        self.quiet = quiet

        # create a database session
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)
#        Session = sessionmaker(bind=self.engine)
#        self.session = Session()

        # set the URL to the camels-de api
        self._state_api_url = "https://api.camels-de.org/state"

    def run(self, only: str = None, nuts_filter: str = 'all'):
        # TODO implement this, when the data is published.
        if self.source_dir is None and only != 'metadata':
            raise NotImplementedError("As of now, the CAMELS-DE data itself is not published. You need a local copy and reference it using '--source-dir=/path/to/output_data'")

        # run each importer function
        # metadata
        if only is None or only == 'metadata':
            self._upload_metadata(nuts_filter=nuts_filter)
        
        # data
        if only is None or only == 'data':
            self._upload_data(nuts_filter=nuts_filter)
    
    def _upload_metadata(self, nuts_filter: str):
        # checkout the filter
        if nuts_filter == 'all' or nuts_filter is None:
            url = f"{self._state_api_url}/metadata.csv"
        else:
            url = f"{self._state_api_url}/{nuts_filter}/metadata.csv"

        # download the metadata
        if not self.quiet:
            print(f'Downloading CAMELS-DE metadata from: {url}...', end='')
        df = pd.read_csv(url)
        gdf = gpd.GeoDataFrame(df, geometry=gpd.points_from_xy(df.x, df.y), crs=3035)
        if not self.quiet:
            print('done.')

        # uploading the metadata
        if not self.quiet:
            print(f'Uploading to {str(self.engine)}...', end='')
        gdf.to_postgis('camels_de_metadata', con=self.engine, if_exists='append')
        if not self.quiet:
            print('done.')
    
    def _upload_data(self, nuts_filter: str):
        # Right now, complete uploads are not accepted
        if nuts_filter is None:
            raise NotImplementedError("As of now, you can't upload CAMELS-DE data without federal state filter. Add a filter or pass --only=metadata flag.")
        
        # get the path
        base_path = os.path.join(self.source_dir, nuts_filter.upper())
        if not os.path.exists(base_path):
            raise OSError(f"The path {base_path} does not exist")
        
        # get all files
        files = glob.glob(os.path.join(base_path, '*', '*_data.csv'))
        if not self.quiet:
            print(f'Found {len(files)} files. Start uploading...')
        
        # upload
        for fname in tqdm(files, unit=' files'):
            # read the file
            df = pd.read_csv(fname)

            # add the id
            camels_id = os.path.basename(fname).split('_')[0]
            df['camels_id'] = camels_id

            # upload
            df.to_sql('camels_de_data', self.engine, if_exists='append')
        
        if not self.quiet:
            print('\nDone!')

    def drop(self):
        # drop the tables if they exist
        with self.engine.connect() as con:
            con.execute("DROP TABLE IF EXISTS camels_de_metadata;")
            con.execute("DROP TABLE IF EXISTS camels_de_data;")
            con.execute("COMMIT;")