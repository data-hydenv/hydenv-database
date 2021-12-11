import json

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from overpy import Overpass
from overpy.exception import DataIncomplete, OverpassTooManyRequests, OverpassBadRequest
from progressbar import ProgressBar
from shapely.geometry import LineString, Polygon, MultiPolygon
from shapely.ops import linemerge, polygonize, unary_union

from hydenv.util import env
from hydenv import models

# set some helpful overpass API queries
BY_AREA = """
area[boundary~"administrative"][name="{boundary_name}"];
{obj}(area){filter};(._;>;);out;
"""

# some lookups
FEDERAL_STATES = [
    'Baden-Württemberg', 'Bayern', 'Rheinland-Pflaz', 'Saarland', 'Hessen',
    'Nordrhein-Westfalen', 'Niedersachsen', 'Bremen', 'Hamburg', 'Schleswig-Holstein',
    'Thüringen', 'Sachsen', 'Sachsen-Anhalt', 'Brandenburg', 'Berlin', 'Mecklenburg-Vorpommern'
]

CITIES = dict(KA='Karlsruhe', FR='Freiburg im Breisgau', S='Stuttgart',
              B='Berlin', M='München', MA='Mannheim')


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

    def _build_query(self, geometry, boundary, attribute, value=None):
        # build the filter
        if isinstance(attribute, str):
            filt = '[\"%s\"%s]' % (attribute, '~%s' % value if value is not None else '')
        elif isinstance(attribute, dict):
            filt = ''.join(['["%s"%s]' % (attr, '~%s' % val if val is not None else '') for attr, val in attribute.items()])
        
        # build the query
        query = BY_AREA.format(obj=geometry, boundary_name=boundary, filter=filt)
        return query

    def run(self, geometry, boundary, attribute, value=None, dry=False, save=None, type_alias=None, quiet=True):
        # first build the query
#        value = '~%s' % value if value is not None else ''
#        query = BY_AREA.format(obj=geometry, boundary_name=boundary, attribute=attribute, value=value)
        query = self._build_query(geometry, boundary, attribute, value=value)

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

            # handle nodes
            if geometry == 'nodes' or geometry == 'node':
                nodes = result.get_nodes()
            
            # handle relations
            elif geometry == 'relation':
                nodes = []
                for relation in result.relations:
                    # get all outer ways
                    mems = [m.resolve().get_nodes() for m in relation.members if m.role == 'outer']
                    nodes.append((relation, mems))

            # handle anything that can be collapsed to ways
            else:
                nodes = result.ways
        except OverpassBadRequest: 
            print("[Error]: Your query is wrong!\nOverpass QL:\n%s" % query)
            return
        except Exception as e:
            print('The following error was caused during Overpass connection:\n%s' % str(e))
            return

        # inform
        if not quiet:
            print('Overpass QL:\n%s\nReturned %s raw objects' % (query, len(nodes)))


        # inform and create the progressbar
        if not quiet:
            print('Uploading...')
            bar = ProgressBar(max_value=len(nodes), redirect_stdout=True)
        
        if save is not None:
            json_objects = []
        for i, node in enumerate(nodes):
            # Point nodes
            if geometry == 'nodes' or geometry == 'node':
                wkt = 'SRID=4326;POINT (%f %f)' % (float(node.lon), float(node.lat))

            # Relations
            elif geometry == 'relation':
                ways = node[1]    # Nodes in the relation
                merged = linemerge([LineString([(p.lon, p.lat) for p in w]) for w in ways])
                parts = list(polygonize(unary_union(merged)))
                poly = parts[0] if len(parts) == 1 else MultiPolygon(parts)
                try:
                    # with shapely > 1.8 this does not work anymore
                    wkt = 'SRID=4326;%s' % poly.to_wkt() 
                except AttributeError:
                    wkt = f"SRID=4326;{poly.wkt}"

                node = node[0]      # the relation itself
            
            # Way-like
            else:
                try:
                    points = node.get_nodes(resolve_missing=False)
                except DataIncomplete:
                    points = node.get_nodes(resolve_missing=True)
                except OverpassTooManyRequests:
                    print('Too many requests to Overpass API, maybe you need to use a smaller boundary.')
                    continue
                # check if a POLYGON or LINESTRING is needed
                if points[0] == points[-1]:
                    wkt = 'SRID=4326;POLYGON ((%s))' % ','.join(['%s %s ' % (p.lon, p.lat) for p in points])
                else:
                    wkt = 'SRID=4326;LINESTRING (%s)' % ','.join(['%s %s' % (p.lon, p.lat) for p in points])

            # check if there is a type alias
            if type_alias is None:
                type_name = value if value is not None and value != '' else attribute
            else:
                type_name = type_alias
            
            # upload
            osm = models.OSMNode(
                id=node.id, 
                geom=wkt, 
                name=node.tags.get('name'),
                node_type=type_name
            )
            for k,v in node.tags.items():
                osm.raw_tags.append(models.OSMTag(key=k, value=v))

            # upload
            if save is None:
                try:
                    self.session.add(osm)
                    self.session.commit()
                except Exception as e:
                    self.session.rollback()
                    if not quiet:
                        print('[%d]: %s' % (osm.id, str(e)))
                    continue
            else:
                json_objects = osm.to_dict(stringify=True)
                    
            if not quiet:
                bar.update(i + 1)
        
        # save if we are in save mode
        if save is not None:
            with open(save, 'w') as f:
                json.dump(json_objects, f, indent=4)

        if not quiet:
            print('Done')
        

    def energiewende(self, boundary="Baden-Württemberg", quiet=True):
        # check if this is a predefined city
        if boundary in CITIES:
            boundary = CITIES[boundary]
        
        # Get the gas stations 
        if not quiet:
            print('Loading all Gas stations in %s' % boundary)
        self.run('node', boundary, 'amenity', 'fuel', quiet=quiet)

        # get the charging stations
        if not quiet:
            print('Loading all charging stations in %s' % boundary)
        self.run('node', boundary, 'amenity', 'charging_station', quiet=quiet)

        # if a known boundary is chose, add counties or districts
        if boundary in FEDERAL_STATES:
            self.counties(state=boundary, quiet=quiet)
        elif boundary in CITIES:
            self.city_districts(city=boundary, quiet=True)

        if not quiet:
            print('Energiewende loaded.')

    def city_districts(self, city="Ka", save=None, quiet=True):
        boundary = CITIES.get(city, city)
        
        if not quiet and city not in CITIES:
            print('%s is not one of our prepared cities abbreviations. The example might still work but is used on your own responsibility' % city )
        if not quiet:
            print('Loading all administrative boundaries of %s' % boundary)
        
        self.run('relation', boundary, 'admin_level', '"9|10"', save=save, type_alias='district', quiet=quiet)
        
        if not quiet:
            print('Done.')

    def counties(self, state="Baden-Württemberg", save=None, quiet=True):
        if not quiet:
            print('Loading all counties in the state %s' % state)
        self.run('relation', state, attribute=dict(boundary='administrative', admin_level='6'), save=save, type_alias='county', quiet=quiet)
