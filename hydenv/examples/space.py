import pandas as pd 
import progressbar
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from hydenv.util import env
from hydenv.models import SpaceRaw


class HydenvSpaceExamples:
    """
    Space Missions Example Loader.\n
    Loads Space Missions example data from Github and load it into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", overwrite_url=None):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)
        Session = sessionmaker(bind=self.engine)
        self.session = Session()

        # set some URLs
        if overwrite_url is None:
            self._data_url_or_path = 'https://raw.githubusercontent.com/data-hydenv/data/master/extra/sample/space/space.csv'
        else:
            self._data_url_or_path = overwrite_url

    def run(self, quiet=True):
        """
        """
        # download dataset
        df = pd.read_csv(self._data_url_or_path)

        # drop the first two columns
        df.drop(df.columns[:2], axis=1, inplace=True)

        # rename columns
        df.columns = [_.lower().replace(' ', '_')  for _ in df.columns]
        df.drop('_rocket', axis=1, inplace=True)

        # convert datum to UTC 
        df['datum'] = pd.to_datetime(df.datum, utc=True)

        # rename index to 'id'
        df.index.name = 'id'
        
        if not quiet:
            print('Uploading Space Missions example data...')
            bar = progressbar.ProgressBar(max_value=len(df), redirect_stdout=True)
        else:
            df.to_sql('space_raw', self.engine, if_exists='replace')
            return

        # upload missions
        for i, space in df.iterrows():
            mission = SpaceRaw(**space)

            # add
            try:
                self.session.add(mission)
                self.session.commit()
            except:
                self.session.rollback()
                if not quiet:
                    print('[%d] Error.' % i)
            
            if not quiet:
                bar.update(i + 1)
        
        if not quiet:
            print('Done.')



        