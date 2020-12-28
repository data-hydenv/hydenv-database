import json
import requests

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from shapely.geometry import shape
from progressbar import ProgressBar

from hydenv.util import env
from hydenv import models

class HydenvWorldBorderExample:
    """
    World Border Dataset Example Loader.\n
    Loads world border example data from Github and load it into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    :param overwrite_url: string - overwrite the default data url to load other data. 
    :param quiet: bool - suppresses print output to stdout

    """

    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", overwrite_url=None):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)
        Session = sessionmaker(bind=self.engine)
        self.session = Session()

        # set some URLs
        if overwrite_url is None:
            self._data_url = 'https://github.com/datasets/geo-countries/raw/master/data/countries.geojson'
        else:
            self._data_url = overwrite_url
    
    def run(self, quiet=True):
        """ 
        """
        if not quiet:
            print('Downloading %s...' % self._data_url, end='')

        # download
        response = requests.get(self._data_url)

        if not response.status_code == 200:
            msg = '%d Download failed.\n' % response.status_code
            if not quiet:
                print('error.\n[ERROR]: %s' % msg)
                return
            else:
                raise requests.ConnectionError(msg)
        else:
            if not quiet:
                print('done.')
        
        # parsing data
        if not quiet:
            print('Parsing data...', end='')
        # get the JSON
        wbd = json.loads(response.content)
        features = wbd['features']
        
        # build a dataframe
        if not quiet:
            bar = ProgressBar(max_value=len(features), redirect_stdout=True)
        
        for i, feature in enumerate(features):
            mod = models.WorldBorder(**self._get_record(feature=feature))

            try:
                self.session.add(mod)
                self.session.commit()
            except Exception as e:
                self.session.rollback()
                if not quiet:
                    print('[%d] errrored: %s' % (i + 1, str(e)))
            
            if not quiet:
                bar.update(i + 1)
        
        if not quiet:
            print('\nDone.')

    
    def _get_record(self, feature):
        prop = feature['properties']
        return dict(
            geom='SRID=4326;%s' % shape(feature['geometry']).wkt,
            name=prop['ADMIN'],
            iso_a2=prop['ISO_A2'],
            iso_a3=prop['ISO_A3']
        )
