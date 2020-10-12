from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy import Integer, String, DateTime, Numeric
from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry

Base = declarative_base()


class Metadata(Base):
    __tablename__ = 'metadata'

    # columns
    id = Column(Integer, primary_key=True)
    device_id = Column(Integer, nullable=False)
    sensor_id = Column(Integer, ForeignKey('sensors.id'))
    semester_id = Column(Integer, ForeignKey('semester_id'))
    location = Column(Geometry('POINT', srid=4326), nullable=False)
    description = Column(String, nullable=False)

    # relationships
    semester = relationship('Semester', back_populates='metadata')


class Variable(Base):
    __tablename__ = 'variables'

    id = Column(Integer, primary_key=True)
    name = Column(String(64), nullable=False, unique=True)
    unit = Column(String(30), nullable=False)
    comment = Column(String)


class Sensor(Base):
    __tablename__ = 'sensors'
    
    id = Column(Integer, primary_key=True)
    name = Column(String(), nullable=False)


class Semester(Base):
    __tablename__ = 'semester'

    # columns
    id = Column(Integer, primary_key=True)
    short = Column(String(8), nullable=False)
    full_name = Column(String(), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

    # relationships
    metadata = relationship('Metadata', back_populates='semester')

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
