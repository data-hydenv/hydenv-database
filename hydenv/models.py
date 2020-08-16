from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey
from sqlalchemy import Integer, String, DateTime, Numeric
from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry

Base = declarative_base()


class Metadata(Base):
    __tablename__ = 'metadata'

    # columns
    id = Column(Integer, primary_key=True)
    device_id = Column(Integer, nullable=False)
    location = Column(Geometry('POINT', srid=4326), nullable=False)
    description = Column(String, nullable=False)


class Variable(Base):
    __tablename__ = 'variables'

    id = Column(Integer, primary_key=True)
    name = Column(String(64), nullable=False, unique=True)
    unit = Column(String(30), nullable=False)
    comment = Column(String)


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
