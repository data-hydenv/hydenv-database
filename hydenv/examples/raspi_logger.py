import os 
import requests
import json

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dateutil.parser import parse
from progressbar import ProgressBar

from hydenv.util import env
from hydenv import models

class HydenvRaspiLoggerExample:
    """
    Raspi-Logger Example Loader.\n
    Loads raspi-logger raw JSON dump example data from Github and load it into the
    given database. The example data url can be overwritten to any 
    remote or local .dump.json file. Note, that the loader will only import 
    the DS18b20 raw temperature sensor data into the database.
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

    def run(self, fname='20201217_raspi_logger.dump.json'):
        # check if a local or remote file is loaded
        if os.path.exists(self._data_url + fname):
            content = self.__from_file(fname)
        else:
            content = self.__from_download(fname)

        # parse the content    
        if not self.quiet:
            print('Parsing raw dump...', end='')

        meta, l = self.__parse_content(content)

        if not self.quiet:
            print('done.')
            bar = ProgressBar(max_value=l, redirect_stdout=True)
        
        i = 0
        for _id, m in meta.items():
            # get some lookups
            var_t = self.__check_variable(m)
            term_id = self.__get_term(m['data'])
            sensor_id = self.__get_sensor(m)
            
            # get the Metadata object
            metadata = self.session.query(models.Metadata).filter(models.Metadata.device_id==_id).first()
            if metadata is None:
                metadata = models.Metadata(**m['meta'])
            
            # update these settings
            metadata.sensor_id = sensor_id
            metadata.term_id = term_id
            
            # Append data
            for p in m['data']:
                metadata.raw_data.append(models.RawData(
                    variable=var_t,
                    tstamp=p['tstamp'],
                    value=p['value']
                ))
                # verbosity
                i += 1
                if not self.quiet:
                    bar.update(i + 1)
            
            # upload
            try:
                self.session.add(metadata)
                self.session.commit()
            except Exception as e:
                self.session.rollback()
                if self.quiet:
                    raise e
                else:
                    print('[ERROR]: %s' % str(e))

        # done.
        if not self.quiet:
            print('\nDone')
            
    def __get_term(self, data):
        mind = min([_['tstamp'] for _ in data])
        term = self.session.query(models.Term).filter(models.Term.start_date>=mind).filter(models.Term.end_date<=mind).first()
        
        return term.id if hasattr(term, 'id') else None

    def __check_variable(self, meta):
        vname = meta['meta']['variable_name']
        if vname == 'AIR TEMPERATURE':
            var_t = self.session.query(models.Variable).filter(models.Variable.name=='temperature').first()
            if var_t is None:
                var_t = models.Variable(name='temperature', unit='deg. Celsius')
        elif vname == 'SOIL TEMPERATURE':
            var_t = self.session.query(models.Variable).filter(models.Variable.name=='soil temperature').first()
            if var_t is None:
                var_t = models.Variable(name='soil temperature', unit='deg. Celsius')
        else:
            var_t = self.session.query(models.Variable).filter(models.Variable.name==vname.lower()).first()
            if var_t is None:
                var_t = models.Variable(name=vname.lower(), unit='unknown')
        self.session.add(var_t)
        self.session.commit()
        return var_t

    def __get_sensor(self, meta):
        sename = meta['meta']['sensor_name']
        sensor = self.session.query(models.Sensor).filter(models.Sensor.name==sename).first()
        if sensor is None:
            sensor = models.Sensor(name=sename)
            self.session.add(sensor)
            self.session.commit()
        
        return sensor.id

    def __parse_content(self, content):
        # TODO: this should be handled by the raspi-logger one day
        jstxt = '[\n%s]' % ','.join(content.decode().split('\n')).strip(',')
        clist = json.loads(jstxt)

        # metadata and data container
        metadata = {}
        for d in clist:
            if d['identifier'] not in metadata:
                meta = dict(
                    device_id=d['identifier'],
                    sensor_name=d['sensorName'],
                    variable_name=d['variableName'],
                    gcmd_url=d['gcmdURL'],
                    gcmd_uuid=d['gcmdUUID'],
                    hardware=d['hardware'],
                    hardware_revision=d['revision'],
                    hardware_serial=d['serial']
                )
                metadata[d['identifier']] = dict(
                    meta=meta,
                    data = [
                        dict(
                            identifier=d['identifier'],
                            tstamp=parse(d['tstamp']),
                            value=d['value']
                        )
                    ]
                )
            else:
                metadata[d['identifier']]['data'].append(
                    dict(
                        identifier=d['identifier'],
                        tstamp=parse(d['tstamp']),
                        value=d['value']
                    )
                )
        
        return metadata, len(clist)


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
    