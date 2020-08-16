import os
from functools import wraps
import types
import inspect
import json

from sqlalchemy.orm.session import sessionmaker
from sqlalchemy import create_engine

from tabulate import tabulate

from hydenv import models

def check_overrides(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        self = args[0]
        # check if skip_overrides is set
        if not kwargs.get('skip_overrides', False):
            model_name = args[1]
            override_name = '%s_%s' % (func.__name__, model_name.lower())
            if hasattr(self, override_name):
                print(kwargs)
                ov_func = getattr(self, override_name)
                return ov_func(**{k:v for k,v in kwargs.items() if k != 'skip_overrides'})
        
        # if it hasn't return, run the core func
        return func(*args, **{k:v for k,v in kwargs.items() if k != 'skip_overrides'})
    return wrapper

def stringify_output(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        self = args[0]
        if hasattr(self, 'fmt'):
            fmt = self.fmt
        else:
            fmt = 'json'
        
        # run the function
        output = func(*args, **kwargs)

        if not isinstance(output, (tuple, list)):
            output = [output]

        # handle output
        out = []
        for o in output:
            if isinstance(o, models.Base):
                d = dict()
                for col in o.__table__.columns:
                    d[col.name] = str(getattr(o, col.name))
                out.append(d)
            else:
                out.append(str(o))
        
        if fmt == 'print':
            return tabulate(out, headers='keys', tablefmt='psql')
        elif fmt == 'json':
            return json.dumps(out, indent=4)
        elif fmt in ('html', 'rst', 'latex'):
            return tabulate(out, headers='keys', tablefmt=fmt)
        else:
            return out
    return wrapper


class HydenvMeasurements:
    """
    Measurements management tool\n
    This is the main tool for CRUD operations on the database.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # check for replacements
        args = dict()
        if '{usr}' in connection:
            args['usr'] = os.environ.get('POSTGRES_USER', 'hydenv')
        if '{pw}' in connection:
            args['pw'] = os.environ['POSTGRES_PASSWORD']
        if '{host}' in connection:
            args['host'] = os.environ.get('POSTGRES_HOST', 'localhost')
        if '{port}' in connection:
            args['port'] = os.environ.get('POSTGRES_PORT', 5432)
        if '{dbname}' in connection:
            args['dbname'] = os.environ.get('POSTGRES_DBNAME', 'hydenv')
        
        # substitute and save
        self.__connection = connection.format(**args)
        self.__SessionCls = sessionmaker(bind=create_engine(self.__connection))
        self.session = self.__SessionCls()

    def create_metadata(self, device_id=None, location=None, description=None, **kwargs):
        """
        Create a new metadata record.\n
        :param device_id: unique identifier for the device used
        :param location: The device location. can be tuple, string
        :param description: A short description of the campaign.
        """
        if isinstance(location, (list, tuple)):
            geom = 'SRID=4326;POINT ({x} {y})'.format(x=location[0], y=location[1])
        if not isinstance(location, str):
            raise AttributeError('location has to be of type list (x,y) or string (WKT).')
        else:
            geom = location
        if not geom.startswith('SRID=4326;'):
            geom = 'SRID=4326;%s' % geom
        if not 'POINT' in geom:
            raise AttributeError('location has to be of shape Point')

        args = dict(device_id=device_id, location=geom, description=description, **kwargs)
        
        return self.create('Metadata', skip_overrides=True, **args)

    @check_overrides
    def create(self, model_name, **kwargs):
        """
        Create a new record in the database\n
        This is the most generic function, that does not handle 
        specific database entities.
        :param model_name: name of the model entity
        :param skip_overrides: If True, override functions will not be called
        """        
        # get the model class
        Model = getattr(models, model_name)
        model = Model(**kwargs)

        try:
            session = self.session
            session.add(model)
            session.commit()
        except Exception as e:
            session.rollback()
            raise e

        return model

    @check_overrides
    def read(self, model_name, return_query=False, **kwargs):
        """
        Read a database record\n
        The data will be returned as a list of model instances.
        :param model_name: name of the model entity
        :param skip_overrides: If True, override functions will not be called
        :param return_query: If True, the SQL query instead of the result\n
            will be returned.
        """
        Model = getattr(models, model_name)
        columns = Model.__table__.columns

        # build the query
        session = self.session
        query = session.query(Model)

        # add the kwargs
        for name, value in kwargs.items():
            if name in columns:
                # exact match
                query = query.filter(columns.get(name)==value)
        
        # return
        if return_query:
            return query
        else:
            return query.all()

    @check_overrides
    def update(self, model_name, id, **kwargs):
        """
        Update an existing model.\n
        :param model_name: name of the model entity
        :param skip_overrides: If True, override functions will not be called
        :param id: The id of the updated object
        """
        # this will raise an exception if not exactly one instance is found
        instance = self.read(model_name, return_query=True, id=id).one()
        print(instance)
        
        # update
        for name, value in kwargs.items():
            setattr(instance, name, value)
        
        try:
            session = self.session
            session.add(instance)
            session.commit()
        except Exception as e:
            session.rollback()
            raise e

        return instance

    @check_overrides
    def delete(self, model_name, **kwargs):
        """
        """
        pass


class HydenvMeasurementsCli(HydenvMeasurements):
    def __init__(self, fmt='json', connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        """
        Measurements management tool\n
        This is the main tool for CRUD operations on the database.
        :param connection: The database URI following syntax:\n
            postgresql://<user>:<password>@<host>:<port>/<database>
        :param fmt: output format - can be one of:\n
            json    -> JSON output (default)
            print   -> raw print to StdOut
            csv     -> not supported yet
        """
        super(HydenvMeasurementsCli, self).__init__(connection)
        self.fmt = fmt
#    pass

# attach the stringify decorator to all CRUD function
for name, fn in inspect.getmembers(HydenvMeasurementsCli):
    if isinstance(fn, types.FunctionType) and any([_ in name for _ in ('create', 'read', 'update', 'delete')]):
        setattr(HydenvMeasurementsCli, name, stringify_output(fn))


if __name__=='__main__':
    import fire
    fire.Fire(HydenvMeasurementsCli)
