from typing import List
import requests
import zipfile
import io
import os
import shutil
import glob
import json
from collections import defaultdict
import pandas as pd
from datetime import datetime as dt

from hydenv.util import env


class HydenvOWMExample:
    """
    OWM Example Loader.\n
    Loads OWM example data from Github (or other sources) and downloads them as
    CSV files. These CSV files can then be loaded into the given database. 
    The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # substitute the connection string
        self.__connection = env.build_connection(connection=connection)
        
        # set some urls
        self._data_url = "https://github.com/data-hydenv/data/archive/master.zip"
        
    def _download_data(self):
        # download the zip into memory
        r = requests.get(self._data_url)
        z = zipfile.ZipFile(io.BytesIO(r.content))

        # save to current directory
        z.extractall()

    def _read_all(self, path: str, pattern: str):
        # empty container
        meta = {}
        observ = {}
        forecast = defaultdict(lambda: list())

        # read all files in the given path
        files = glob.glob(os.path.join(os.path.join(path, pattern)))

        for f in files:
            # read the file
            with open(f, 'r') as f:
                data = json.load(f)
            
            # get the filename
            fname = os.path.basename(f.name).split('_raw_dump')[0]
            tstamp = dt.strptime(fname, '%Y_%m_%d')

            # add observations
            obs = data.get('historic', {}).get('hourly', [])
            for o in obs:
                observ[o['dt']] = o

            # add forecasts
            pred = data.get('forecast', {}).get('hourly', [])
            for p in pred:
                p.update({'from_dt': int(tstamp.timestamp())})
                forecast[p['dt']].append(p)
        
        # return
        return meta, observ, forecast

    def _order_to_ts(self, observations: dict, forecast: dict) -> List[dict]:
        # create the master ts 
        index = list(observations.keys())
        #index.extend([ts for ts in forecast.keys() if ts not in index])

        # sort
        index.sort()
        
        # create the data container
        data = []

        for idx in index:
            obs = observations[idx]
            obs['forecast'] = forecast.get(idx, [])
            data.append(obs)
        
        return data
    
    def _ordered_data_to_df(self, data: List[dict], key='temp') -> pd.DataFrame:
        # extract only the data we need
        # temp = [{'time': dt.fromtimestamp(d['dt']), key: d[key]} for d in data]
        temp = []

        for d in data:
            # get the main index
            obj = {'time': dt.fromtimestamp(d['dt']), key: d[key]}

            # add the forecasts
            deltas = []
            values = []
            for fore in d['forecast']:
                delta_hrs = int((obj['time'] - dt.fromtimestamp(fore['from_dt'])).total_seconds() / 3600)
                deltas.append(delta_hrs)
                values.append(fore[key])

            # sort the deltas and values
            values = [v for _, v in sorted(zip(deltas, values))][:2]
            deltas = sorted(deltas)[:2]
            
            # add to the main obj
            obj['forcast_1_delta [hrs]'] = deltas[0] if len(deltas) >= 1 else None
            obj['forcast_1_value'] = values[0] if len(values) >= 1 else None
            obj['forecast_2_delta [hrs]'] = deltas[1] if len(deltas) >= 2 else None
            obj['forecast_2_value'] = values[1] if len(values) >= 2 else None

            # append
            temp.append(obj)

        # convert
        df = pd.DataFrame(temp)
        df.set_index('time', inplace=True)

        return df

    def run(self, save: str = None, fmt='json', variable=['temp', 'humidity'], repo_path='extra/weather/data', pattern='*_raw_dump.json', dry=False, quiet=True):
        # handle variables
        VARIABLES = ['temp', 'feels_like', 'pressure', 'humidity', 'dew_point', 'wind_speed', 'wind_deg', 'clouds']
        if variable == 'all':
            variable = VARIABLES
       
        # check if all variables are allowed
        if isinstance(variable, str):
            variable = [variable]
        for v in variable:            
            if v not in VARIABLES:
                raise ValueError('The variable {} is not allowed'.format(v))
        
        # first download the data
        if not quiet:
            print("Downloading data...", end="")
        self._download_data()
        if not quiet:
            print("done.")
        
        # get the path inside the repo
        data_path = os.path.join('./data-master', repo_path)

        # read all files
        if not quiet:
            print('Converting data...', end='')
        meta, observ, forecast =  self._read_all(path=data_path, pattern=pattern)
        data = self._order_to_ts(observations=observ, forecast=forecast)
        if not quiet:
            print('done.')

        # finally remove all
        if os.path.exists('./data-master'):
            shutil.rmtree('./data-master')

        # TODO with database connection this logic has to be changed
        if save is None and dry is False:
            raise NotImplementedError("Currently, OWM data can't be saved to the hydenv database, sorry.")

        # save or return it
        if fmt == 'json':
            if dry:
                return data
        
            if not save.endswith('.json'):
                save += '.json'
                with open(save, 'w') as f:
                    json.dump({
                        'metadata': meta,
                        'data': data
                    }, f, indent=4)
            if not quiet:
                print("Saved data to {}".format(save))

        
        elif fmt == 'csv':
            # check how to return
            if dry:
                dfs = {v: self._ordered_data_to_df(data, key=v) for v in variable}
                if len(variable) == 1:
                    return dfs[variable[0]]
                else:
                    return dfs
                
            # save
            for v in variable:
                _save = save
                if _save.endswith('.csv'):
                    _save = _save.replace('.csv', '_' + v + '.csv')
                else:
                    _save = f'{_save}_{v}.csv'
            
                df = self._ordered_data_to_df(data, key=v)
                df.to_csv(_save)
                if not quiet:
                    print("Saved data to {}".format(_save))
