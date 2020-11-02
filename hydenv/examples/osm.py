from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from overpy import Overpass
from progressbar import ProgressBar

from hydenv.util import env
from hydenv import models

# set some helpful overpass API queries

BY_AREA = """
area[boundary~"administrative"][name="{boundary_name}"];
{obj}(area)[{attribute}{value}];out;
"""


class HydenvOSMExamples:
    """
    OSM Example Loader.\n
    Loads Open Street Map example either as persisted dumps from Github, or 
    dynamically direclty from the OSM database using Overpass API. The data 
    is then loaded into the given database. The database has to be installed 
    and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", overpass_url=None):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)
        Session = sessionmaker(bind=self.engine)
        self.session = Session()

        # set the Overpass API
        self.api = Overpass(url=overpass_url)

    def run(self, geometry, boundary, attribute, value=None, dry=False, save=None, quiet=True):
        # first build the query
        value = '=%s' % value if value is not None else ''
        query = BY_AREA.format(obj=geometry, boundary_name=boundary, attribute=attribute, value=value)

        # if dry run, do not reach out to the Overpass server
        if dry:
            if not quiet:
                return query
            else:
                print('Overpass QL:\n%s' % query)
                return
        
        # get the data
        if not quiet:
            print('Connecting %s...' % self.api.url)
        try:
            result = self.api.query(query)
            if geometry == 'nodes' or geometry == 'node':
                nodes = result.get_nodes()
            else:
                nodes = result.ways
        except Exception as e:
            print('The following error was caused during Overpass connection:\n%s' % str(e))
            return
        
        # inform and create the progressbar
        if not quiet:
            print('Uploading...')
            bar = ProgressBar(max_value=len(nodes), redirect_stdout=True)
        
        for i, node in enumerate(nodes):
            if geometry == 'nodes' or geometry == 'node':
                wkt = 'SRID=4326;POINT (%f %f)' % (float(node.lon), float(node.lat))
            else:
                points = node.get_nodes(resolve_missing=True)
                # check if a POLYGON or LINESTRING is needed
                if points[0] == points[-1]:
                    wkt = 'SRID=4326;POLYGON ((%s))' % ','.join(['%s %s ' % (p.lon, p.lat) for p in points])
                else:
                    wkt = 'SRID=4326;LINESTRING (%s)' % ','.join(['%s %s' % (p.lon, p.lat) for p in points])
                    
            osm = models.OSMNode(
                id=node.id, 
                geom=wkt, 
                name=node.tags.get('name'),
                node_type=value if value is not None and value != '' else attribute
            )
            for k,v in node.tags.items():
                osm.raw_tags.append(models.OSMTag(key=k, value=v))

            # upload
            try:
                self.session.add(osm)
                self.session.commit()
            except Exception as e:
                self.session.rollback()
                if not quiet:
                    print('[%d]: %s' % (osm.id, str(e)))
                continue
            if not quiet:
                bar.update(i + 1)
        if not quiet:
            print('Done')
        

    def energiewende(self, boundary="Baden-Württemberg", quiet=True):
        # run for 
        if not quiet:
            print('Loading all Gas stations in %s' % boundary)
        self.run('node', boundary, 'amenity', 'fuel', quiet=quiet)

        if not quiet:
            print('Loading all charging stations in %s' % boundary)
        self.run('node', boundary, 'amenity', 'charging_station', quiet=quiet)

        if not quiet:
            print('Energiewende loaded.')
