import pandas as pd
import os
import re
import time
from string import ascii_lowercase
from random import choice
from sqlalchemy import create_engine
from datetime import datetime as dt
from progressbar import ProgressBar, UnknownLength

from hydenv.util import env
from hydenv.measurements import HydenvMeasurements


def read_file(fname, txtfmt=False):
	if txtfmt:
		# HOBO TXT format
		df = pd.read_csv(fname, skiprows=2, header=None, sep='\s+', thousands=',', na_values='Logged')
		df['tstamp'] = [dt.strptime(row[1] + ' ' + row[2], '%d-%m-%y %H:%M:%S') for i, row in df.iterrows()]
		df.drop([0,1,2], axis=1, inplace=True)
		df.columns = ['temperature', 'light', 'tstamp']
	else:
		# HOBO CSV format
		df = pd.read_csv(fname, skiprows=2, header=None, parse_dates=[1], usecols=[1,2,3])
		#df.drop(0, axis=1, inplace=True)
		df.dropna(inplace=True)
		df.columns = ['tstamp', 'temperature', 'light']

	df.dropna(how='any', axis=0, inplace=True)
	
	return df


class HydenvHoboImporter:
	"""
    Measurements management tool\n
    This is the main tool for CRUD operations on the database.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
	def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # substitute and save
		self.__connection = env.build_connection(connection=connection)

	def metadata(self, url: str, term: str = None, if_exists='append'):
		"""
		Copy metadata from google tables.\n
		Make sure that the URL format is correct. Open the correct sheet and copy the url,
		then change the last parameter from 'edit#gid=...' to '/export?gid=...'
		:param url: URL to the table
		:param term: the short name of the term, like WS17
		:param if_exists: How to handle existing table. Can be one of:
			- append (default) - append data to the table
			- fail - raise an error and exit
			- replace - drop the table and recreate
		"""
		# use correct URL
		if 'edit#gid=' in url:
			url = url.replace('edit#', 'export?')
		if not 'format=csv' in url:
			url += '&format=csv'

		# download
		df = pd.read_csv(url)

		imp = df[['hobo_id', 'description']].copy()
		imp['location'] = df[['longitude', 'latitude']].apply(lambda r: 'SRID=4326;POINT (%s %s)' % (r[0], r[1]), axis=1)
		imp.columns = ['device_id', 'description', 'location']

		# check if the sensor 'hobo' exists
		cli = HydenvMeasurements(self.__connection)
		hobo = cli.read('Sensor', return_query=True, name='hobo').first()
		semester = cli.read('Term', return_query=True, short=term).first()
		
		# if there is no HOBO, create one
		if hobo is None:
			hobo = cli.create('Sensor', name='hobo')
		
		# if semester is given, add
		if semester is not None:
			imp['term_id'] = semester.id
		
		# add sensor info
		imp['sensor_id'] = hobo.id

		# build an engine
		engine = create_engine(self.__connection)

		# upload
		imp.to_sql('metadata', engine, if_exists=if_exists, index=False)

	def upload(self, filename: str, meta_id: int, variable=None):
		"""
		Upload an Hobo file to the database. 
		:param filename: Path to the file for upload
		:param meta_id: Database ID of your device
		"""
		# check which variable should be uploaded
		if variable is None:
			self.upload(filename, meta_id, 'temperature')
			self.upload(filename, meta_id, 'light')
			return
		
		# load the file
		txtfmt = filename.endswith('.txt')
		data = read_file(filename, txtfmt=txtfmt)

		# get the hobo id
		hobo_id = os.path.split(filename)[-1].split('.')[0]

		# search the metadata
		cli = HydenvMeasurements(connection=self.__connection)
		#meta = cli.read('Metadata', id=meta_id)

		# check if devices exists, if yes check timestamps

		# get the ovariable ids
		var_t = cli.read('Variable', name=variable, return_query=True).one()

		# upload temperature
		temp = data[['tstamp', variable]].copy()
		temp.columns = ['tstamp', 'value']
		temp['meta_id'] = meta_id
		temp['variable_id'] = var_t.id

		# create database engine
		engine = create_engine(self.__connection)
		
		# create a temporary table name
		name = ''.join([choice(ascii_lowercase) for _ in range(16)])

		# upload to temporary table
		temp.to_sql(name, engine, index=False)
		engine.execute('INSERT INTO raw_data (meta_id, variable_id, tstamp, value) SELECT meta_id, variable_id, tstamp, value FROM %s ON CONFLICT (meta_id, tstamp) DO NOTHING' % name)
		engine.execute('UPDATE TABLE raw_data r SET value=t.value FROM %s t WHERE r.meta_id=t.meta_id AND r.tstamp=t.tstamp' % name)

		# delete the temp table
		engine.execute("DROP TABLE %s" % name)

		# return the number of rows
		return len(temp)

	def folder(self, path='.', match=r'[0-9]+\.(txt|csv)', term: str = None, quiet=True):
		"""
		Upload the whole folder content given at path.\n
		Path defaults to the current location, but can be replaced.
		The default match pattern is '[0-9]+\.(txt|csv)'.
		:param path: Location to search, defaults to  './'
		:param match: Regular expression to match all data files
		:param term: If applicable, add the term for the data like: WS17
		"""
		flist = [f for f in os.listdir(path) if re.match(match, f)]
		
		# load the term if any
		cli = HydenvMeasurements(self.__connection)
		if term is not None:
			semester = cli.read('Term', return_query=True, short=term).first()
		else: 
			semester = None

		# build a progressbar
		if not quiet:
			bar = ProgressBar(max_value=len(flist), redirect_stdout=True)

		# load all files
		for i, fname in enumerate(flist):
			device_id = os.path.splitext(fname)[1].split('.')[1]
			meta = cli.read('Metadata', return_query=True, device_id=device_id, term_id=semester).first()
			
			# if there is no metadata, skip
			if meta is None:
				print('File %s references HOBO ID=%d, which is not found.' % (fname, device_id))
			else:
				# upload
				self.upload(filename=fname, meta_id=meta.id)
			if not quiet:
				bar.update(i)			


class HydenvHoboImporterCli(HydenvHoboImporter):
	def upload(self, filename: str, meta_id: int, variable=None):
		# run the function
		count = super(HydenvHoboImporterCli, self).upload(filename=filename, meta_id=meta_id, variable=variable)
		if count is not None:
			print('[%s]: Uploaded %d %s measurements.' % (meta_id, count, variable))

	def folder(self, path='.', match=r'[0-9]+\.(txt|csv)', term: str = None):
		super(HydenvHoboImporterCli, self).folder(path=path, match=match, term=term, quiet=False)


if __name__=='__main__':
	import fire
	fire.Fire(HydenvHoboImporter)