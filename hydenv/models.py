from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy import Integer, String, DateTime, Numeric
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


Base = declarative_base(cls=Base)

class Metadata(Base):
    __tablename__ = 'metadata'

    # columns
    id = Column(Integer, primary_key=True)
    device_id = Column(Integer, nullable=False)
    sensor_id = Column(Integer, ForeignKey('sensors.id'))
    term_id = Column(Integer, ForeignKey('terms.id'))
    location = Column(Geometry('POINT', srid=4326), nullable=False)
    description = Column(String, nullable=False)

    # relationships
    term = relationship('Term', back_populates='data')


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
    value = Column(Numeric, nullable=False)
    quality_flag_id = Column(Integer, ForeignKey('quality.id'), nullable=False)


class RawData(Base):
    __tablename__ = 'raw_data'

    meta_id = Column(Integer, ForeignKey('metadata.id'), primary_key=True)
    variable_id = Column(Integer, ForeignKey('variables.id'), primary_key=True)
    tstamp = Column(DateTime, primary_key=True)
    value = Column(Numeric, nullable=False)
