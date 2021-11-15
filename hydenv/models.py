from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, UniqueConstraint
from sqlalchemy import Integer, BigInteger, String, DateTime, Numeric, Boolean, REAL
from sqlalchemy.orm import relationship, Session, object_session
from geoalchemy2 import Geometry

from datetime import datetime as dt


class Base(object):
    # overwrite the default values
    __prepopulate__ = []

    @classmethod
    def defaults(cls, session: Session):
        instances = [cls(**d) for d in cls.__prepopulate__]

        try:
            session.add_all(instances)
            session.commit()
        except Exception as e:
            session.rollback()
            print('Populating defaults errored\n%s' % str(e))

# augment the sqlalchemy Base class with defaults classmethod
Base = declarative_base(cls=Base)

# ---------------------------------------------------------------------
# Database Models
# ---------------------------------------------------------------------
class DetailAssociation(Base):
    __tablename__ = 'nm_metadata_details'

    meta_id = Column(Integer, ForeignKey('metadata.id'), primary_key=True)
    detail_id = Column(Integer, ForeignKey('details.id'), primary_key=True)

class Metadata(Base):
    __tablename__ = 'metadata'

    # columns
    id = Column(Integer, primary_key=True)
    device_id = Column(String, nullable=False)
    sensor_id = Column(Integer, ForeignKey('sensors.id'))
    term_id = Column(Integer, ForeignKey('terms.id'))
    location = Column(Geometry('POINT', srid=4326), nullable=True)
    description = Column(String, nullable=True)

    # relationships
    term = relationship('Term', back_populates='data')
    details = relationship('Detail', secondary='nm_metadata_details', back_populates='meta', cascade='all,delete')
    sensor  = relationship('Sensor', back_populates='meta')
    raw_data = relationship('RawData', back_populates='meta', cascade='all,delete')
    data = relationship('Data', back_populates='meta', cascade='all,delete')

    def __init__(self, session=None, **kwargs):
        # extract the column names of this model
        column_names = [col.name for col in Metadata.__table__.columns]

        # split the input into core and details
        in_names = {k: v for k, v in kwargs.items() if k in column_names}
        out_names = {k: v for k, v in kwargs.items() if k not in column_names}
        
        # run Base class __init__ method
        super(Metadata, self).__init__(**in_names)

        # add details
        self.set_details(out_names, session)

    def get_details(self):
        details = dict()
        for detail in self.details:
            detail.to_dict(add_to=details)
        return details

    def set_details(self, details: dict, session=None):
        # append all details
        for k,v in details.items():
            self.details.append(Detail.get_or_init(session, k, v))


class Variable(Base):
    __tablename__ = 'variables'
    __prepopulate__ = [
        dict(name='temperature', unit='deg. Celsius'),
        dict(name='light', unit='intensity', comment='Ambient light intensity (can be converted to lux).'),
        dict(name='humidity', unit='%', comment='Relative humidity of the atmosphere.'),
        dict(name='feels_like', unit='deg. Celsius', comment='Feels like temperature is an estimate of the temperature, corrected for humidity.'),
        dict(name='dew_point', unit='deg. Celsius', comment='Dew point temperature.'),
        dict(name='pressure', unit='mbar', comment='air pressure.'),
        dict(name='wind_speed', unit='m/s', comment='Wind speed at 2 meter in m/s.'),
        dict(name='wind_deg', unit='deg.', comment='Wind direct in degree.'),
        dict(name='clouds', unit='%', comment='Cloud coverage in %.')
    ]

    id = Column(Integer, primary_key=True)
    name = Column(String(64), nullable=False, unique=True)
    unit = Column(String(30), nullable=False)
    comment = Column(String)

    raw_data = relationship('RawData', back_populates='variable')
    data = relationship('Data', back_populates='variable')


class Sensor(Base):
    __tablename__ = 'sensors'
    __prepopulate__ = [
        dict(name='OWM observation', comment='OWM observations are a composite product of remote sensing, modelling and in-situ observatrion products.'),
        dict(name='OWM short forecast', comment='OWM forecast < 24 hrs. Composite product of global and local weather models.'),
        dict(name='OWM long forecast', comment='OWM forecast > 24 hrs and < 48 hrs. Composite product of global and local weather models.')
    ]
    
    id = Column(Integer, primary_key=True)
    name = Column(String(), nullable=False)
    comment = Column(String(), nullable=True)

    meta = relationship('Metadata', back_populates='sensor')


class Term(Base):
    __tablename__ = 'terms'

    # columns
    id = Column(Integer, primary_key=True)
    short = Column(String(8), nullable=False)
    full_name = Column(String(), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

    # relationships
    data = relationship('Metadata', back_populates='term')

    @classmethod
    def defaults(cls, session: Session):
        """
        Load some default values
        """
        # build the default values
        cls.__prepopulate__ = []
        for y in range(16, 40):
            y2 = y + 1
            cls.__prepopulate__.extend([
                dict(short='WT%d' % y, full_name='Winterterm 20%d/20%d' % (y, y2), start_date=dt(2000 + y, 10, 1), end_date=dt(2000 + y2, 3, 31)),
                dict(short='ST%d' % y2, full_name='Summerterm 20%d' % y2, start_date=dt(2000 + y2, 4, 1), end_date=dt(2000 + y2, 9, 30)),
            ])
        
        # super into Base class
        super(Term, cls).defaults(session=session)

    def __str__(self):
        return self.short


class Quality(Base):
    __tablename__ = 'quality'
    __prepopulate__ = [
        dict(short='R', name='Regression filled', comment='This measurement was filled by a linear regression model to another station.'),
        dict(short='H', name='Hobo data', comment='This value was quality checked and aggregated from the HOBO data.')
    ]

    id = Column(Integer, primary_key=True)
    short = Column(String(20), nullable=False, unique=True)
    name = Column(String)
    comment = Column(String)


class Data(Base):
    __tablename__ = 'data'

    meta_id = Column(Integer, ForeignKey('metadata.id'), primary_key=True)
    variable_id = Column(Integer, ForeignKey('variables.id'), primary_key=True)
    tstamp = Column(DateTime, primary_key=True)
    value = Column(REAL, nullable=False)
    quality_flag_id = Column(Integer, ForeignKey('quality.id'), nullable=False)

    variable = relationship('Variable', back_populates='data')
    meta = relationship('Metadata', back_populates='data')

class RawData(Base):
    __tablename__ = 'raw_data'
#    __table_args__ = (
#        UniqueConstraint('meta_id', 'variable_id', 'tstamp', name='uq_raw_data')
#    )

    meta_id = Column(Integer, ForeignKey('metadata.id'), primary_key=True)
    variable_id = Column(Integer, ForeignKey('variables.id'), primary_key=True)
    tstamp = Column(DateTime, primary_key=True)
    value = Column(REAL, nullable=False)

    variable = relationship('Variable', back_populates='raw_data')
    meta = relationship('Metadata', back_populates='raw_data')


class Detail(Base):
    __tablename__ = 'details'

    # columns
    id = Column(Integer, primary_key=True)
    key = Column(String, nullable=False)
    str_value = Column(String, nullable=True)
    int_value = Column(Integer, nullable=True)
    float_value = Column(Numeric, nullable=True)
    bool_value = Column(Boolean, nullable=True)

    # relationships
    meta = relationship('Metadata', secondary='nm_metadata_details', back_populates='details')

    @classmethod
    def _field_name(cls, value):
        if isinstance(value, str):
            return 'str_value'
        elif isinstance(value, int):
            return 'int_value'
        elif isinstance(value, float):
            return 'float_value'
        elif isinstance(value, bool):
            return 'bool_value'
        else:
            return 'str_value'
    
    @classmethod
    def get_or_init(cls, session, key, value):
        val_attr = getattr(cls, cls._field_name(value))

        # find
        if session is None:
            instance = None
        else:
            instance = session.query(Detail).filter(Detail.key==key).filter(val_attr==value).first()

        # if Detail does not exist, create it
        if instance is None:
            instance = Detail(key, value)
        
        return instance

    def __init__(self, key, value):
        self.key = key
        setattr(self, self._field_name(value), value)

    def to_dict(self, add_to=None):
        if add_to is None:
            add_to = dict()
        for _t in ['str', 'int', 'float', 'bool']:
            value = getattr(self, '%s_value' % _t)
            if value is not None:
                add_to[self.key] = value
        return add_to


# -----------------------------------------------------------
# Some extra models
# -----------------------------------------------------------
class SpaceRaw(Base):
    __tablename__ = 'space_raw'

    id = Column(BigInteger, primary_key=True)
    company_name = Column(String(65))
    location = Column(String)
    datum = Column(DateTime)
    detail = Column(String)
    status_rocket = Column(String)
    status_mission = Column(String)

class OSMAssociation(Base):
    __tablename__ = 'nm_nodes_tags'

    node_id = Column(BigInteger, ForeignKey('osm_nodes.id'), primary_key=True)
    tag_id = Column(BigInteger, ForeignKey('osm_tags.id'), primary_key=True)

class OSMNode(Base):
    __tablename__ = 'osm_nodes'

    id = Column(BigInteger, primary_key=True)
    geom = Column(Geometry(srid=4326), nullable=False)
    name = Column(String, nullable=True)
    node_type = Column(String, nullable=True)
    raw_tags = relationship('OSMTag', secondary='nm_nodes_tags', back_populates='nodes', cascade='all,delete')

    def get_tags(self):
        return {t.key: t.value for t in self.raw_tags}

    def to_dict(self, stringify=False):
        d = dict(id=self.id, name=self.name, node_type=self.node_type, geom=self.geom)
        tags = self.get_tags()
        
        # stringify
        if stringify:
            d = {k:str(v) for k,v in d.items()}
            tags = {k:str(v) for k,v in tags.items()}

        d['tags'] = tags

        return d


class OSMTag(Base):
    __tablename__ = 'osm_tags'

    id = Column(BigInteger, primary_key=True)
    key = Column(String(2048), nullable=False)
    value = Column(String(2048), nullable=False)
    nodes = relationship('OSMNode', secondary='nm_nodes_tags', back_populates='raw_tags')


class GPX(Base):
    __tablename__ = 'gpx_points'

    id = Column(BigInteger, primary_key=True)
    track_id = Column(Integer, ForeignKey('gpx_tracks.id'), nullable=False)
    geom = Column(Geometry(srid=4326), nullable=False)
    tstamp = Column(DateTime, nullable=False)
    elevation = Column(Numeric, nullable=True)

    track = relationship('GPXTrack', back_populates='points')
    extras = relationship('GPXExtra', back_populates='point')


class GPXTrack(Base):
    __tablename__ = 'gpx_tracks'

    id = Column(Integer, primary_key=True)
    name = Column(String(256), nullable=False)
    tstamp = Column(DateTime, nullable=True)

    points = relationship('GPX', back_populates='track')


class GPXExtra(Base):
    __tablename__ = 'gpx_extra'

    id = Column(BigInteger, primary_key=True)
    gpx_id = Column(BigInteger, ForeignKey('gpx_points.id'), nullable=False)
    tag_name = Column(String(20), nullable=False)
    value = Column(Numeric, nullable=False)

    point = relationship('GPX', back_populates='extras')


class WorldBorder(Base):
    __tablename__ = 'world_borders'

    # columns
    id = Column(Integer, primary_key=True)
    geom = Column(Geometry(srid=4326), nullable=False)
    name = Column(String(1024), nullable=False)
    iso_a2 = Column(String(2), nullable=False)
    iso_a3 = Column(String(3), nullable=False)