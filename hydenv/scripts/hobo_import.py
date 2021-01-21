import pandas as pd
import os
import ntpath
import re
from string import ascii_lowercase
from random import choice
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime as dt
from datetime import timedelta as td
from progressbar import ProgressBar

from hydenv.util import env
from hydenv.measurements import HydenvMeasurements
from hydenv.models import Metadata, Term


def read_file(fname, txtfmt=False, dayfirst=False):
#	if txtfmt:
	if fname.lower().endswith('.txt'):
		# HOBO TXT format
		df = pd.read_csv(fname, skiprows=2, header=None, sep=r'\s+', thousands=',', na_values='Logged')
		try:
			df['tstamp'] = [dt.strptime(row[1] + ' ' + row[2], '%d-%m-%y %H:%M:%S') for i, row in df.iterrows()]
		except Exception as e:
			try:
				df['tstamp'] = pd.to_datetime([row[1] + ' ' + row[2] for i, row in df.iterrows()], infer_datetime_format=True)
			except:
				raise e
		df.drop([0,1,2], axis=1, inplace=True)
		df.columns = ['temperature', 'light', 'tstamp']
#	else:
	elif fname.lower().endswith('.csv'):
		# HOBO CSV format
		df = pd.read_csv(fname, skiprows=2, header=None, parse_dates=[1], usecols=[1,2,3], dayfirst=dayfirst)
		#df.drop(0, axis=1, inplace=True)
		df.dropna(inplace=True)
		df.columns = ['tstamp', 'temperature', 'light']
	else:
		raise ValueError('Only csv and txt raw data files supported right now.')

	# make sure temperature and light are floats
	df.temperature = df.temperature.astype(float)
	df.light = df.light.astype(float)

	# drop na
	df.dropna(how='any', axis=0, inplace=True)
	
	return df


def read_hourly_file(fname):
	if fname.endswith('.tsv'):
		# read the file
		df = pd.read_csv(fname, sep=r'\s+')

		# create the hourly datetime index
		conv = lambda r: dt.strptime(r[0], '%Y-%m-%d') + td(hours=int(r[1]))
		idx = df.apply(conv, axis=1)

		# set index
		df['tstamp'] = idx

		# drop old index
		df.drop(['date', 'hour'], axis=1, inplace=True)
		df.columns = ['value', 'origin', 'tstamp']
	elif fname.endswith('.csv'):
		# read the file
		df = pd.read_csv(fname)

		# rename the columns
		df.columns = [s.lower() for s in df.columns]
		df.rename(columns={'th': 'value', 'date': 'tstamp'}, inplace=True)

		# convert datetime
		df['tstamp'] = [dt.strptime(_, '%Y-%m-%d %H:%M:%S') for _ in df.tstamp]
	else:
		raise AttributeError('The file format is not yet supported.')
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
		self.engine = create_engine(self.__connection)
		Session = sessionmaker(bind=self.engine)
		self.session = Session()

	def metadata(self, url: str, term: str = None, if_exists='append', quiet=True, dry=False):
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

		# download and make a copy
		df = pd.read_csv(url, skiprows=1)
		orig = df.copy()

		# remove clear names
		if 'name' in df.columns:
			df.drop('name', axis=1, inplace=True)
		
		# remove anything without device id
		df.rename({'hobo_id': 'device_id'}, axis=1, inplace=True)
		df = df.where(~df.device_id.isnull()).dropna(how='all')
		# df['device_id'] = df.device_id.astype(int)
		df['device_id'] = ['%d' % int(_) for _ in df.device_id]

		# convert lon lat
		df = df.where(~df.longitude.isnull()).dropna(how='all')
		df = df.where(~df.latitude.isnull()).dropna(how='all')
		df['location'] = df[['longitude', 'latitude']].apply(lambda r: 'SRID=4326;POINT (%s %s)' % (r[0], r[1]), axis=1)
		df.drop(['longitude', 'latitude'], axis=1, inplace=True)
		
		# drop any empty row
		df.dropna(axis=1, how='all', inplace=True)
		
		# print the dropped entries
		if not quiet:
			if len(df) != len(orig):
				print('Some entries are missing metadata:\n----------------------------------')
				print(orig.iloc[[i for i in orig.index if i not in df.index],].to_string())


		# check if the sensor 'hobo' exists
		cli = HydenvMeasurements(self.__connection)
		hobo = cli.read('Sensor', return_query=True, name='hobo').first()
		semester = cli.read('Term', return_query=True, short=term).first()
		
		# if there is no HOBO, create one
		if hobo is None:
			hobo = cli.create('Sensor', name='hobo')
		
		# if semester is given, add
		if semester is not None:
			df['term_id'] = semester.id
		
		# add sensor info
		df['sensor_id'] = hobo.id

		# check if the hobo ids already exist
		check_sql = 'SELECT device_id FROM metadata WHERE %s device_id IN (%s)' % (
			'term_id=%d AND ' % semester.id if semester.id is not None else '',
			','.join(["'%s'" % str(_) for _ in df.device_id.values])
			)
		with self.engine.connect() as con:
			available_ids = [_[0] for _ in con.execute(check_sql)]
			# filter df
			df = df.where(~df.device_id.isin(available_ids)).dropna()
			if df.empty:
				print('[Warning]: All HOBO ids are already in the database. Remove them first for re-uploading.')
				return

		# on dry run - return or print
		if dry:
			if not quiet:
				return df.to_markdown()
			else:
				return df
		
		# upload
		for d in df.to_dict('records'):
			try:
				self.session.add(Metadata(session=self.session, **d))
				self.session.commit()
			except Exception as e:
				self.session.rollback()
				if quiet:
					raise e
				else:
					print('[ERROR]: %s' % str(e))

	def upload_raw_data(self, filename: str, meta_id: int, variable=None, dry=False):
		"""
		Upload an Hobo file to the database. 
		:param filename: Path to the file for upload
		:param meta_id: Database ID of your device
		"""
		# check which variable should be uploaded
		if variable is None:
			self.upload_raw_data(filename, meta_id, 'temperature')
			self.upload_raw_data(filename, meta_id, 'light')
			return
		
		# figure out the term
		term_name = self.session.query(Term.short).join(Metadata).filter(Metadata.id==meta_id).scalar()
		dayfirst = term_name == 'WT21'

		# load the file
		try:
			data = read_file(filename, dayfirst=dayfirst)
		except Exception as e:
			print("Parsing file '%s' was not successfull.\nDo not edit the files by hand!\nError: %s " % (filename, str(e)))
			return

		# search the metadata
		cli = HydenvMeasurements(connection=self.__connection)

		# get the ovariable ids
		var_t = cli.read('Variable', name=variable, return_query=True).one()

		# upload temperature
		temp = data[['tstamp', variable]].copy()
		temp.columns = ['tstamp', 'value']
		temp['meta_id'] = meta_id
		temp['variable_id'] = var_t.id

		if dry:
			return temp

		# create database engine
		engine = create_engine(self.__connection)
		
		# create a temporary table name
		name = ''.join([choice(ascii_lowercase) for _ in range(16)])

		# upload to temporary table
		temp.to_sql(name, engine, index=False)
		engine.execute('INSERT INTO raw_data (meta_id, variable_id, tstamp, value) SELECT meta_id, variable_id, tstamp, value FROM %s ON CONFLICT (meta_id, variable_id, tstamp) DO NOTHING' % name)
		engine.execute('UPDATE raw_data r SET value=t.value FROM %s t WHERE r.meta_id=t.meta_id AND r.tstamp=t.tstamp AND r.variable_id=t.variable_id' % name)

		# delete the temp table
		engine.execute("DROP TABLE %s" % name)

		# return the number of rows
		return len(temp)

	def upload_q_data(self, filename: str, meta_id: int):
		"""
		Upload an Hobo file to the database. 
		:param filename: Path to the file for upload
		:param meta_id: Database ID of your device
		"""
		
		# load the file
		try:
			data = read_hourly_file(filename)
		except Exception as e:
			print("Parsing file '%s' was not successfull.\nDo not edit the files by hand!\nError: %s " % (filename, str(e)))
			return

		# search the metadata
		cli = HydenvMeasurements(connection=self.__connection)

		# get the ovariable ids
		var_t = cli.read('Variable', name='temperature', return_query=True).one()
		h_flag = cli.read('Quality', short='H', return_query=True).one()
		r_flag = cli.read('Quality', short='R', return_query=True).one()
		flag_map = {'H': h_flag.id, 'R': r_flag.id}

		# upload temperature
		temp = data[['tstamp', 'value']].copy()
		temp['quality_flag_id'] = data.origin.replace(flag_map)
		temp['meta_id'] = meta_id
		temp['variable_id'] = var_t.id

		# create database engine
		engine = create_engine(self.__connection)
		
		# create a temporary table name
		name = ''.join([choice(ascii_lowercase) for _ in range(16)])

		# upload to temporary table
		temp.to_sql(name, engine, index=False)
		try:
			engine.execute('INSERT INTO data (meta_id, variable_id, tstamp, value, quality_flag_id) SELECT meta_id, variable_id, tstamp, value, quality_flag_id FROM %s ON CONFLICT (meta_id, variable_id, tstamp) DO NOTHING' % name)
			engine.execute('UPDATE data d SET value=d.value, quality_flag_id=d.quality_flag_id FROM %s t WHERE d.meta_id=t.meta_id AND d.tstamp=t.tstamp AND d.variable_id=t.variable_id' % name)
		except Exception as e:
			print("[ERROR]: File: '%s' errored. Message: %s" % (filename, str(e)))
		# delete the temp table
		engine.execute("DROP TABLE %s" % name)

		# return the number of rows
		return len(temp)

	def folder(self, path='.', match=r'[0-9]+\.(txt|csv)', is_quality=False, term: str = None, quiet=True):
		"""
		Upload the whole folder content given at path.\n
		Path defaults to the current location, but can be replaced.
		The default match pattern is '[0-9]+\.(txt|csv)'.
		:param path: Location to search, defaults to  './'
		:param match: Regular expression to match all data files
		:param term: If applicable, add the term for the data like: WS17
		"""
		flist = [os.path.join(path, f) for f in os.listdir(path) if re.match(match, f)]
		
		# load the term if any
		cli = HydenvMeasurements(self.__connection)
		if term is not None:
			semester = cli.read('Term', return_query=True, short=term).first()
			if semester is None:
				raise AttributeError("Term '%s' not found." % term)
			else: 
				term_id = semester.id
		else: 
			term_id = None

		# build a progressbar
		if not quiet:
			bar = ProgressBar(max_value=len(flist), redirect_stdout=True)
		
		# load all files
		for i, fname in enumerate(flist):
			try:
				if is_quality:
					device_id = ntpath.split(fname)[-1].split('.')[0].strip('_-Tht')
				else:
					device_id = ntpath.split(fname)[-1].split('.')[0]
				meta = cli.read('Metadata', return_query=True, device_id=device_id, term_id=term_id).first()
			except:
				print("File '%s' cannot be processed." % fname)
				continue
			
			# if there is no metadata, skip
			if meta is None:
				print('File %s references HOBO ID=%s, which is not found.' % (fname, device_id))
			else:
				# upload
				if is_quality:
					self.upload_q_data(filename=fname, meta_id=meta.id)
				else:
					self.upload_raw_data(filename=fname, meta_id=meta.id)
			if not quiet:
				bar.update(i + 1)			


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
	fire.Fire(HydenvHoboImporterCli)
