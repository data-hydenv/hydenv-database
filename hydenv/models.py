from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, UniqueConstraint
from sqlalchemy import Integer, BigInteger, String, DateTime, Numeric, Boolean, REAL
from sqlalchemy.orm import relationship, Session
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
    location = Column(Geometry('POINT', srid=4326), nullable=False)
    description = Column(String, nullable=True)

    # relationships
    term = relationship('Term', back_populates='data')
    details = relationship('Detail', secondary='nm_metadata_details', back_populates='meta', cascade='all,delete')

    def __init__(self, **kwargs):
        # extract the column names of this model
        column_names = [col.name for col in Metadata.__table__.columns]

        # split the input into core and details
        in_names = {k: v for k, v in kwargs.items() if k in column_names}
        out_names = {k: v for k, v in kwargs.items() if k not in column_names}
        
        # run Base class __init__ method
        super(Metadata, self).__init__(**in_names)

        # add details
        self.set_details(out_names)

    def get_details(self):
        details = dict()
        for detail in self.details:
            detail.to_dict(add_to=details)
        return details

    def set_details(self, details: dict):
        for k,v in details.items():
            self.details.append(Detail(k, v))


class Variable(Base):
    __tablename__ = 'variables'
    __prepopulate__ = [
        dict(name='temperature', unit='deg. Celsius'),
        dict(name='light', unit='intensity', comment='Ambient light intensity (can be converted to lux).')
    ]

    id = Column(Integer, primary_key=True)
    name = Column(String(64), nullable=False, unique=True)
    unit = Column(String(30), nullable=False)
    comment = Column(String)


class Sensor(Base):
    __tablename__ = 'sensors'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(), nullable=False)


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


class RawData(Base):
    __tablename__ = 'raw_data'
#    __table_args__ = (
#        UniqueConstraint('meta_id', 'variable_id', 'tstamp', name='uq_raw_data')
#    )

    meta_id = Column(Integer, ForeignKey('metadata.id'), primary_key=True)
    variable_id = Column(Integer, ForeignKey('variables.id'), primary_key=True)
    tstamp = Column(DateTime, primary_key=True)
    value = Column(REAL, nullable=False)


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

    def __init__(self, key, value):
        self.key = key
        if isinstance(value, str):
            self.str_value = value
        elif isinstance(value, int):
            self.int_value = value
        elif isinstance(value, float):
            self.float_value = value
        elif isinstance(value, bool):
            self.bool_value = value
        else:
            self.str_value = str(value)

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
