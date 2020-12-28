import os
import requests
import uuid

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from bs4 import BeautifulSoup

from hydenv.util import env
from hydenv import models

class HydenvGPXExample:
    """
    GPX Example Loader.\n
    Loads GPX example data from Github and load it into the
    given database. The example data url can be overwritten to any 
    remote or local .gpx file. Note, that the loader will only import 
    *flat* GPX data, meaning only the first track will be imported.
    The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    :param overwrite_url: string - overwrite the default data url to load other data. 
        Can be a remote or local path.
    :param quiet: bool - suppresses print output to stdout
    
    """

    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", overwrite_url=None, quiet=True):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)
        Session = sessionmaker(bind=self.engine)
        self.session = Session()

        # set some URLs
        if overwrite_url is None:
            self._data_url = 'https://raw.githubusercontent.com/data-hydenv/data/master/extra/spatial/activity/'
        else:
            self._data_url = overwrite_url

        self.quiet = quiet

    def run(self, fname='activity_5967183464.gpx'):
        """
        """
        if os.path.exists(self._data_url + fname):
            content = self.__from_file(fname)
        else:
            content = self.__from_download(fname)

        if not self.quiet:
            print('Parsing GPX...', end='')

        # parsing data
        gpxSoup = BeautifulSoup(content, 'lxml')
        points = gpxSoup.find_all('trkpt')

        # build the data
        try:
            name = gpxSoup.find('name').decode_contents()
        except:
            name = uuid.uuid4()
        tstamp = gpxSoup.metadata.time.decode_contents()
        track = models.GPXTrack(name=name, tstamp=tstamp)

        # get the points
        for point in points:
            track.points.append(self.__parse_point(point))
        
        if not self.quiet:
            print('done.\nUploading...', end='')
        
        try:
            self.session.add(track)
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            if not self.quiet:
                print('error.\n[ERROR]: %s' % str(e))
        
        if not self.quiet:
            print('done.')

    def __from_file(self, fname):
        with open(self._data_url + fname, 'r') as f:
            return f.read()

    def __from_download(self, fname):
        if not self.quiet:
            print('Downloading %s...' % fname, end='')

        # download
        response = requests.get(self._data_url + fname)

        if not response.status_code == 200:
            msg = 'Download failed [%d]\n' % response.status_code
            if not self.quiet:
                print('error.\n[ERROR]: %s' % msg)
            else:
                raise requests.ConnectionError(msg)
        else:
            if not self.quiet:
                print('done.')
        
        return response.content

    def __parse_point(self, p):
        # build data
        wkt = 'srid=4326;POINT ({lon} {lat})'.format(**p.attrs)
        el = float(p.ele.decode_contents())
        tstamp = p.time.decode_contents()

        # create model
        gpx = models.GPX(geom=wkt, tstamp=tstamp, elevation=el)

        # go for extras
        for ex in p.find('ns3:trackpointextension').children:
            if ex.name is None or not ex.name.startswith('ns3:'):
                continue
            gpx.extras.append(models.GPXExtra(
                tag_name=ex.name[4:],
                value=float(ex.decode_contents())
            ))
        
        return gpx
