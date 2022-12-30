"""
Examples
--------
This CLI loads example files from Github (or other sources) 
and loads them into the given database. 

Note
----
The database has to be installed and initialized before. 
Do that by hand or use the two CLI commands:

.. code-block:: bash

    python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
    python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv

"""
import progressbar
import os
import shutil
import zipfile
import requests
import io

from hydenv.util import env
from hydenv.scripts.hobo_import import HydenvHoboImporter


class HydenvHoboExamples:
    """
    Hobo Example Loader.\n
    Loads HOBO example data from Github (or other sources) and loads them into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", metadata_source: str = 'bwsyncandshare'):
        """Hydenv-HOBO CLI\n
        Use this cli to load HOBO metadata and data to the database.
        You can connect local or remote PostgreSQL/PostGIS databases, if the install/init
        command was issued before, to create the tables.
        With metadata_source, the shared metadata document can be loaded from google tables,
        BWSync&Share excel file or from a local excel file.
        :param metadata_source: Can be either 'google', 'bwsyncandshare' for remote or a path for local.
        """
        # substitute and save
        self.__connection = env.build_connection(connection=connection)

        # set the source
        self._metadata_source = metadata_source

        # set some URLs
        self._hobo_table_google_url = "https://docs.google.com/spreadsheets/d/1uvI1a_OOnCcFjUbHAO1N5nEWejnI5y5vCNt6eueHrOc/edit"
        self._hobo_table_bw_url = "https://bwsyncandshare.kit.edu/s/pXD9LwEp6q3bZPn/download/HOBO_Meta.xlsx"
        self._hobo_data_url = "https://github.com/data-hydenv/data/archive/master.zip"
        # TODO: this can be done better
        self.__all_terms = ['WT17', 'WT18', 'WT19', 'WT20', 'WT21', 'WT22', 'WT23']
        self.__hobo_gid_map = {
            'WT17': "#gid=1594319231",
            'WT18': "#gid=1500046150",
            'WT19': '#gid=651397949',
            'WT20': "#gid=0",
            'WT21': "#gid=878625339",
            'WT22': "#gid=2042487505"
        }
        self.__hobo_sheet_map = {
            'WT17': "Metadata 2017",
            'WT18': "Metadata 2018",
            'WT19': 'Metadata 2019',
            'WT20': "Metadata 2020",
            'WT21': "Metadata 2021",
            'WT22': "Metadata 2022",
            'WT23': "Metadata 2023"
        }
        self.__hobo_data_map = {
            'WT17': 'hobo/2017/',
            'WT18': 'hobo/2018/',
            'WT19': 'hobo/2019/',
            'WT20': 'hobo/2020/',
            'WT21': 'hobo/2021/',
            'WT22': 'hobo/2022/',
            'WT23': 'hobo/2023/'
        }
    
    def run(self, terms='all', data_path='download', only=None, quiet=True, dry=False):
        if only is None or only == 'metadata':
            # Get the metadata
            if not quiet:
                print('Uploading Metdata')
            self._upload_hobo(terms=terms, quiet=quiet)
            if not quiet:
                print('Done.')
        
        # download
        if only is None or only != 'metadata':
            try:
                if data_path == 'download':
                    if not quiet:
                        print('Downloading data repository. This may take a minute.')
                    self._download_data()
                    data_path = './data-master/'
                    if not quiet:
                        print('Done.')
                
                # upload
                if not quiet:
                    print('Start uploading. You can grab a coffee...')
                
                # check data to be uploaded
                if only == 'raw-data' or only == 'raw' or only == 'r':
                    data_f = 'raw'
                elif only == 'quality-data' or only=='quality' or only == 'q':
                    data_f = 'quality'
                else:
                    data_f = 'all'
                self._upload_data(data_path, terms=terms, data=data_f, quiet=quiet)

            except Exception as e:
                raise e
            finally:
                # delete the temp data 
                if os.path.exists(data_path):
                    shutil.rmtree(data_path)
        
        if not quiet:
                print('\nDone.')
        
    def _upload_hobo(self, terms='all', quiet=True, dry=False):
        # if all years, are requested, build the list
        if terms == 'all':
            terms = self.__all_terms
        if not isinstance(terms, list):
            terms = [terms]

        # build the cli
        cli = HydenvHoboImporter(connection=self.__connection)
        
        # build the upload bar
        if not quiet:
            bar = progressbar.ProgressBar(max_value=len(terms), redirect_stdout=True)
        
        # get the supported term key
        supported_term_keys = list(self.__hobo_gid_map.keys()) if self._metadata_source.lower() == 'google' else list(self.__hobo_sheet_map.keys())
        

        # upload Metadata
        for i, term in enumerate(terms):
            # get the supported term keys
            if not term in supported_term_keys:
                print('Term %d has no mapped table in source %s' % (term, self._metadata_source))
                continue

            # build the url
            # set the base url
            if self._metadata_source.lower() == 'google':
                url = self._hobo_table_google_url
                suffix = self.__hobo_gid_map[term]
            elif self._metadata_source.lower() == 'bwsyncandshare':
                url = self._hobo_table_bw_url
                suffix = self.__hobo_sheet_map[term]
            else:
                # assume local
                url = self._metadata_source
                suffix = self.__hobo_sheet_map[term]

            # upload
            cli.metadata(url=url, sheet_suffix=suffix, term=term, quiet=quiet, dry=dry)
            if not quiet:
                bar.update(i + 1)

    def _download_data(self):
        # download the zip into memory
        r = requests.get(self._hobo_data_url)
        z = zipfile.ZipFile(io.BytesIO(r.content))

        # save to current directory
        z.extractall()
    
    def _upload_data(self, path,  terms='all', data='all', quiet=True):
        # if all years, are requested, build the list
        if terms == 'all':
            terms = self.__all_terms
        if not isinstance(terms, list):
            terms = [terms]

        # build the cli
        cli = HydenvHoboImporter(connection=self.__connection)

        for term in terms:
            if data == 'all' or data == 'raw':
                # raw data
                p = os.path.join(path, self.__hobo_data_map[term], 'raw')
                cli.folder(path=p, term=term, is_quality=False, quiet=quiet)

            if data == 'all' or data == 'quality':
                # quality checked data
                p = os.path.join(path, self.__hobo_data_map[term], 'hourly')
                cli.folder(path=p, match=r'[0-9]+_Th\.(tsv|csv)', is_quality=True, term=term, quiet=quiet)
            
