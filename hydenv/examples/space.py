import pandas as pd 
import progressbar
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from hydenv.util import env
from hydenv.models import SpaceRaw

NORMALIZE_SQL = """
-- COMPANIES
DROP TABLE IF EXISTS companies CASCADE;
CREATE TABLE companies AS
SELECT row_number() OVER (ORDER BY company_name) AS company_id, t.company_name FROM
(SELECT DISTINCT company_name FROM space_raw) t;
ALTER TABLE companies ADD CONSTRAINT pkey_companies PRIMARY KEY (company_id);
-- ROCKTES
DROP TABLE IF EXISTS rockets CASCADE;
CREATE TABLE rockets AS
SELECT row_number() OVER (ORDER BY t.rocket_name) AS rocket_id, t.rocket_name, is_active FROM
(SELECT DISTINCT
	split_part(detail, ' | ', 1) as rocket_name,
 	CASE WHEN status_rocket='StatusActive' THEN true ELSE false END as is_active
 FROM space_raw) t;
ALTER TABLE rockets ADD CONSTRAINT pkey_rockets PRIMARY KEY (rocket_id);
-- LOCATIONS
DROP TABLE IF EXISTS locations CASCADE;
CREATE TABLE locations AS
SELECT row_number() OVER (ORDER BY identifier) AS location_id, t.* FROM
(SELECT DISTINCT
 	split_part(location, ', ', 1) as identifier,
 	split_part(location, ', ', 2) as location_name,
 	CASE WHEN split_part(location, ', ', 4) = '' THEN null ELSE split_part(location, ', ', 3) END as state,
 	CASE WHEN split_part(location, ', ', 4) = '' THEN split_part(location, ', ', 3) ELSE split_part(location, ', ', 4) END AS country
 FROM space_raw) t;
ALTER TABLE locations ADD CONSTRAINT pkey_locations PRIMARY KEY (location_id);
-- SPACE
DROP TABLE IF EXISTS space CASCADE;
CREATE TABLE space AS
SELECT 
	id, datum,
	(SELECT company_id FROM companies WHERE company_name=space_raw.company_name) as company_id,
	(SELECT location_id FROM locations WHERE 
	 	identifier=split_part(location, ', ', 1) AND 
	 	location_name=split_part(location, ', ', 2)
	) as location_id,
	(SELECT rocket_id FROM rockets WHERE rocket_name=split_part(detail, ' | ', 1)) as rocket_id,
	split_part(detail, ' | ', 2) as mission_detail,
	status_mission
FROM space_raw;
ALTER TABLE space ADD CONSTRAINT pkey_space PRIMARY KEY (id);
ALTER TABLE space ADD CONSTRAINT fkey_space_location FOREIGN KEY (location_id) REFERENCES locations (location_id);
ALTER TABLE space ADD CONSTRAINT fkey_space_rocket FOREIGN KEY (rocket_id) REFERENCES rockets (rocket_id);
ALTER TABLE space ADD CONSTRAINT fkey_space_company FOREIGN KEY (company_id) REFERENCES companies (company_id);
COMMIT;
"""
DROP_SQL = """
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS rockets CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS space CASCADE;
COMMIT;
"""

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

    def run(self, normalize=False, quiet=True):
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
        
        # truncate the table if it exists
        try:
            with self.engine.connect() as con:
                con.execute('TRUNCATE TABLE space_raw;')
        except:
            pass

        if not quiet:
            print('Uploading Space Missions example data...')
            bar = progressbar.ProgressBar(max_value=len(df), redirect_stdout=True)
        else:
            df.to_sql('space_raw', self.engine, if_exists='replace')

            # add the primary key
            with self.engine.connect() as con:
                con.execute('ALTER TABLE space_raw ADD CONSTRAINT pkey_space_raw PRIMARY KEY (id);')
            return

        errors = 0
        # upload missions
        for i, space in df.iterrows():
            mission = SpaceRaw(id=i, **space)

            # add
            try:
                self.session.add(mission)
                self.session.commit()
            except Exception as e:
                self.session.rollback()
                errors += 1
                if not quiet:
                    print('[%d] %s' % (i, str(e)))
            
            if not quiet:
                bar.update(i + 1)

        if errors > 10:
            if not quiet:
                print('Too many errors occured. See output above')
                return
            else:
                raise e
        
        # normalize if requested
        if normalize:
            self._normalize(quiet=quiet)
        
        if not quiet:
            print('Done.')

    def _normalize(self, quiet=True):
        if not quiet:
            print('Normalizing space schema...')
        
        # run the SQL
        with self.engine.connect() as con:
            con.execute(NORMALIZE_SQL)
    
    def drop(self):
        with self.engine.connect() as con:
            con.execute(DROP_SQL)
        