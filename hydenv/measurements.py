import os
import types
import inspect
import json

from sqlalchemy.orm.session import sessionmaker
from sqlalchemy import create_engine

from hydenv import models
from hydenv.util import env, check_overrides, stringify_output


class HydenvMeasurements:
    """
    Measurements management tool\n
    This is the main tool for CRUD operations on the database.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
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
            self.session.add(model)
            self.session.commit()
        except Exception as e:
            self.session.rollback()
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
        query = self.session.query(Model)

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
        instance = HydenvMeasurements.read(self, model_name, return_query=True, id=id).one()
        print(instance)
        
        # update
        for name, value in kwargs.items():
            setattr(instance, name, value)
        
        try:
            self.session.add(instance)
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise e

        return instance

    @check_overrides
    def delete(self, model_name, id=None, **kwargs):
        """
        Delete an existing record.\n
        You can either delete by id, to exactly control which records 
        are deleted, or you can pass in any kind of filter statement
        to delete all matching instances. In this case you have to 
        omit the id parameter.
        Caution: if you omit the id, but do not pass a filter condition,
        **all** records will be deleted.
        :param model_name: name of the model entity
        :param skip_overrides: If True, override functions will not be called
        :param id: The id of the updated object
        """
        if id is not None:
            instance = HydenvMeasurements.read(self, model_name, return_query=True, id=id)
            print(instance)
            instances = [instance.one()]
        else:
            instances = HydenvMeasurements.read(self, model_name, **kwargs)
        
        # delete
        try:
            for inst in instances:
                self.session.delete(inst)
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise e

        print('Deleted %d %s instances' % (len(instances), model_name))

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

# attach the stringify decorator to all CRUD function
for name, fn in inspect.getmembers(HydenvMeasurementsCli):
    if isinstance(fn, types.FunctionType) and any([_ in name for _ in ('create', 'read', 'update', 'delete')]):
        setattr(HydenvMeasurementsCli, name, stringify_output(fn))


if __name__=='__main__':
    import fire
    fire.Fire(HydenvMeasurementsCli)
