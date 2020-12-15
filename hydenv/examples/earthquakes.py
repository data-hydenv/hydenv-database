from sqlalchemy import create_engine
import pandas as pd

from hydenv.util import env


NORMALIZE_SQL = """
-- Earthquake types
drop table if exists earthquake_types CASCADE;
create table earthquake_types as 
select row_number() OVER (ORDER BY name) as type_id, name from 
(select distinct "Type" as name from earthquakes_raw) t;
alter table earthquake_types add constraint pkey_earthquake_types primary key (type_id);
-- magnitude types
drop table if exists magnitude_types CASCADE;
create table magnitude_types as 
select row_number() OVER (ORDER BY name) as type_id, name from 
(select distinct "Magnitude Type" as name from earthquakes_raw) t;
alter table magnitude_types add constraint pkey_magnitude_types primary key (type_id);
-- sources
drop table if exists earthquake_sources CASCADE;
create table earthquake_sources as
select 
	row_number() over (order by name) as source_id,
	name 
from (
select distinct name from (
	select distinct "Source" as name from earthquakes_raw
	union select distinct "Source" as name from earthquakes_raw
	union select distinct "Source" as name from earthquakes_raw
	) t_in
) t_out;
alter table earthquake_sources add constraint pkey_earthquake_sources primary key (source_id);
-- earthquakes
drop table if exists earthquakes CASCADE;
CREATE TABLE earthquakes AS
select 
	"ID" as id,
	to_timestamp("Date" || ' ' || "Time", 'MM/DD/YYYY HH24:MI') as datum,
	st_geomfromewkt('SRID=4326;POINT (' || "Longitude" || ' ' || "Latitude" || ')') as geom,
	t.type_id,
	"Magnitude" as magnitude, m.type_id as magnitude_type_id, "Magnitude Error" as magnitude_error,
	"Magnitude Seismic Stations" as magnitude_seismic_stations, 
	"Depth" as depth, "Depth Error" as depth_error, "Depth Seismic Stations" as depth_seismic_statsions,
	"Azimuthal Gap" as azimuthal_gap, "Horizontal Distance" as horizontal_distance, 
	"Horizontal Error" as horizontal_error, "Root Mean Square" as rms, 
	es.source_id, esl.source_id as location_source_id, esm.source_id as magnitude_source_id,
	case when "Status"='Reviewed' THEN true ELSE false END as is_reviewed
from earthquakes_raw r 
left outer join earthquake_types t on t.name=r."Type"
left outer join magnitude_types m on m.name=r."Magnitude Type"
left outer join earthquake_sources es on es.name=r."Source"
left outer join earthquake_sources esl on esl.name=r."Location Source"
left outer join earthquake_sources esm on esm.name=r."Magnitude Source";
ALTER TABLE earthquakes ADD CONSTRAINT pkey_earthquakes PRIMARY KEY (id);
ALTER TABLE earthquakes ADD CONSTRAINT fkey_earthquakes_type FOREIGN KEY (type_id) REFERENCES earthquake_types (type_id);
ALTER TABLE earthquakes ADD CONSTRAINT fkey_earthquakes_magnitude_types FOREIGN KEY (magnitude_type_id) REFERENCES magnitude_types (type_id);
ALTER TABLE earthquakes ADD CONSTRAINT fkey_earthquakes_sources FOREIGN KEY (source_id) REFERENCES earthquake_sources (source_id);
ALTER TABLE earthquakes ADD CONSTRAINT fkey_earthquakes_sources_location FOREIGN KEY (location_source_id) REFERENCES earthquake_sources (source_id);
ALTER TABLE earthquakes ADD CONSTRAINT fkey_earthquakes_sources_magnitude FOREIGN KEY (magnitude_source_id) REFERENCES earthquake_sources (source_id);
CREATE INDEX idx_magnitude ON earthquakes USING btree (magnitude DESC NULLS LAST);
COMMIT;
"""
DROP_SQL = """
drop table if exists earthquake_types CASCADE;
drop table if exists magnitude_types CASCADE;
drop table if exists earthquake_sources CASCADE;
drop table if exists earthquakes CASCADE;
drop table if exists earthquakes_raw CASCADE;
COMMIT;
"""


class HydenvEarthquakeExamples:
    """
    Eaarthquake Example Loader.\n
    Loads earthquake example data from Github (or other sources) and loads them into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", quiet=True):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)

        self.quiet = quiet

        # set some URLs
        self._github_url = 'https://raw.githubusercontent.com/data-hydenv/data/master/extra/spatial/earthquake/earthquakes.csv'

    def run(self, normalize=False):
        """
        """
        if not self.quiet:
            print("Earthquake example.\nDonwloading data dump...", end='')
        
        # Download data
        df = pd.read_csv(self._github_url)
        
        if not self.quiet:
            print('done.\nUploading...', end='')
        
        # Upload
        df.to_sql('earthquakes_raw', self.engine, index=None, if_exists='replace')

        if not self.quiet:
            print('done.')
        
        if normalize:
            self.__normalize()

    def __normalize(self):
        if not self.quiet:
            print('Normalizing...', end='')

        with self.engine.connect() as con:
            con.execute(NORMALIZE_SQL)
        
        if not self.quiet:
            print('done.')

    def drop(self):
        if not self.quiet:
            print('Cleaning earthquake example...', end='')
        
        with self.engine.connect() as con:
            con.execute(DROP_SQL)
        
        if not self.quiet:
            print('done.')
