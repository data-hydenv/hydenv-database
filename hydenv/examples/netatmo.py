from functools import reduce
import os
import json
from datetime import datetime as dt
from datetime import timedelta as td
from typing import List, Union
import requests
import progressbar
import pandas as pd
from dateutil.parser import parse as date_parse


class HydenvNetatmoExample:
    def __init__(self, password: str = None, quiet: bool = False):
        # set some urls
        self._token_url = "https://us-central1-data-course-261609.cloudfunctions.net/get_token"
        self._netatmo_stations_url = 'https://api.netatmo.com/api/getpublicdata'
        self._netatmo_data_url = 'https://api.netatmo.com/api/getmeasure'

        # set other args
        self._password = password
        self.quiet = quiet
        
        # check for tokens
        self._check_token()

    def _check_token(self):
        # check if there is a netatmo token in environment
        env_token = os.environ.get("NETATMO_TOKEN", "{}")

        token = json.loads(env_token)
        # default to an expired token 
        expires_at = token.get("expires_at", dt.now() - td(days=1))
        
        # check token refresh
        if expires_at > dt.now():
            self._token = token
        else:
            self._token = self._get_token()

    def _get_token(self):
        if self._password is None:
            print("[ERROR] Can't refresh the Bearer token without a password")
            return {}
        
        if not self.quiet:
            print("Requesting a new token...", end="")
        
        # get the new token
        try:
            resp = requests.post(self._token_url, json={'password': self._password}, headers={'Content-Type': 'application/json'})
            resp.raise_for_status()
            print('done.')
        except Exception as e:
            if not self.quiet:
                print("\[ERROR]", str(e))
            raise e
        
        # set the new token to environment
        token = resp.json()
        os.environ['NETATMO_TOKEN'] = json.dumps(token)

        return resp.json()
    
    @property
    def token(self):
        if self._token is None or 'access_token' not in self._token:
            raise AttributeError('No valid Token and no password given to request a new token.')
        else:
            return self._token

    def get_stations(self, lat_ne: float = 48.037, lon_ne: float = 7.89841, lat_sw: float = 47.9569, lon_sw: float = 7.72333, required_data: list = ['temperature'], **kwargs):
        """
        """
        # create the header
        HEADER = {'Authorization': 'Bearer ' + self.token['access_token']}

        # create the params
        PARAMS = dict(lat_ne=lat_ne, lon_ne=lon_ne, lat_sw=lat_sw, lon_sw=lon_sw, required_data=','.join(required_data))

        if not self.quiet:
            print(f"Requesting data at [{self._netatmo_stations_url}] ...", end="")
        
        # do the request
        try:
            response = requests.get(self._netatmo_stations_url, headers=HEADER, params=PARAMS)
            response.raise_for_status()
        except Exception as e:
            if not self.quiet:
                print("faild.\n[ERROR]: ", str(e))
            raise e
        
        if not self.quiet:
            print("done.")
        
        # extract stations
        stations = response.json()['body']
        return stations

    def transform_stations_list(self, stations: list, filter_for=['temperature', 'humidity', 'rain_60min', 'pressure'], **kwargs):
        """
        """
        transformed = []

        for s in stations:
            # get MAC address
            trans = dict(device_id=s['_id'])

            loc = s.get('place', {}).get('location')
            if loc is None:
                print(f"MAC: {trans['device_id']} has no location. Skipping...")
                continue
            else:
                trans['location'] = f"SRID=4326;POINT({loc[0]} {loc[1]})"
            
            # get measures
            m = s.get('measures', {})
            for m_id, measure in m.items():
                for filt in  filter_for:
                    if filt in measure.get('type', []):
                        trans['filt'] = m_id
            
            # append
            transformed.append(trans)

        return transformed

    def load_station_data(self, station: dict, **kwargs) -> dict:
        """
        """
        # get the MAC address
        device_id = station['_id']

        # extract the measures
        measures = station.get('measures', {})
        if not self.quiet:
            print(f"Found {len(measures)} measures on MAC {device_id}.")
        
        # create the header
        HEADER = {'Authorization': 'Bearer ' + self.token['access_token']}

        # get some main settings
        scale = kwargs.get('scale', '30min')

        # check if a start date was set
        start_date = kwargs.get('start', None)
        if start_date is not None:
            start_date = date_parse(str(start_date))
        end_date = kwargs.get('end', None)
        if end_date is not None:
            end_data = date_parse(str(end_date))
        
        # go for each module id
        for module_id, measure in measures.items():
            if 'type' not in measure:
                # TODO I think this is the rainfall module...
                print(f"Found malformed measure: {module_id}. Skipping...")
                continue
            type_ = ','.join(measure['type'])   
            
            # build the params for this round
            PARAMS = dict(device_id=device_id, module_id=module_id, scale=scale, type=type_)

            # check if we use a start data
            if start_date is not None:
                PARAMS['date_begin'] = start_date.timestamp()
            if end_date is not None:
                PARAMS['date_end'] = end_date.timestamp()

            # do the request
            try:
                response = requests.get(self._netatmo_data_url, headers=HEADER, params=PARAMS)
                response.raise_for_status()
                
                # check if data was actually returned
                body = response.json()['body']
                if len(body) == 0:
                    print(f"No body for {device_id}/{module_id}")
                    continue
                elif len(body) > 1:
                    print(f'Weird! Body of {device_id}/{module_id} too large!')
                if len(body[0].get('value')) == 0:
                    print(f"No data found for {device_id}/{module_id}")
                    continue

                # add data
                if 'data' not in station:
                    station['data'] = {}

                # add the data
                station['data'][module_id] = response.json()['body']

            except Exception as e:
                if not self.quiet:
                    print(f"[Error]: Module {module_id} failed: {str(e)}")
                continue
        
        if not self.quiet:
            print(f"Finished loading data for MAC {device_id}.")
        
        return station

    def get_data(self, lat_ne: float, lon_ne: float, lat_sw: float, lon_sw: float, required_data: list = ['temperature'], **kwargs):
        """
        """
        # get the stations
        metadata = self.get_stations(lat_ne=lat_ne, lon_ne=lon_ne, lat_sw=lat_sw, lon_sw=lon_sw, required_data=required_data, **kwargs)

        if not self.quiet:
            print(f"Found {len(metadata)} stations.")
            bar = progressbar.ProgressBar(max_value=len(metadata), redirect_stdout=True)

        stations = []

        # load the data for each stations
        for i, meta in enumerate(metadata):
            station = self.load_station_data(meta, **kwargs)
            stations.append(station)

            if not self.quiet:
                bar.update(i + 1)
        
        if not self.quiet:
            print("Done.")

        # check if stations without data should be removed
        if kwargs.get('clean', False):
            return [station for station in stations if 'data' in station]
        else:
            return stations

    def run(self, bbox=None, city=None, save=None, **kwargs):
        """
        BBOX shape is [lat_ne, lon_ne, lat_sw, lon_sw]
        """
        if bbox is None and city is None:
            print("[ERROR] You need to specify either a bbox or a city.")
            return
        
        CITIES = {
            'fr': [48.037, 7.89841, 47.9569, 7.72333],
            'freiburg': [48.037, 7.89841, 47.9569, 7.72333],
            'ka': [49.06023452689163, 8.541590419576641,48.97413213170277, 8.294625101041413],
            'karlsruhe':  [49.06023452689163, 8.541590419576641,48.97413213170277, 8.294625101041413]
        }
        
        # check for predefined city
        if city is not None:
            if city.lower() not in CITIES.keys():
                print(f"[ERROR] City {city} not pre-defined. Please pass the bbox")
                return
            bbox = CITIES[city.lower()]

        # check for pre-defined bbox
        if bbox is not None:
            lat_ne, lon_ne, lat_sw, lon_sw = bbox
        
        # run
        if kwargs.get('metadata_only', False):
            result = self.get_stations(lat_ne=lat_ne, lon_ne=lon_ne, lat_sw=lat_sw, lon_sw=lon_sw, **kwargs)
        else:
            result = self.get_data(lat_ne=lat_ne, lon_ne=lon_ne, lat_sw=lat_sw, lon_sw=lon_sw, **kwargs)
        
        # check if we want to save to file
        if save is not None:
            with open(save, 'w') as f:
                json.dump(result, f, indent=4)
            if not self.quiet:
                print(f"Saved to {save}.")
        else:
            return result

    def parse(self, fname: Union[str, List[dict]], use_type: str, fmt='dataframe'):
        """
        Pare a saved Netatmo API dump into various formats.\n
        Please note that the parse function can only extract on measure type at
        a time. If you want to extract multiple measure types, you need to
        call the parse function multiple times.
        :param fname: The file name or list of dictionaries to parse.
        :param use_type: The type of measure to extract.
        :param fmt: Output format; ONe of ['dataframe', 'latex', 'markdown', 'csv', 'html']
        """
        # open the file if necessary
        if isinstance(fname, str):
            with open(fname, 'r') as f:
                stations = json.load(f)
        else:
            stations = fname

        data = pd.DataFrame()

        # go for each stations
        for station in stations:
            # get the measures
            measures = station.get('measures', {})
            
            # add search for use type
            for module_id, measure in measures.items():
                if use_type in measure.get('type', []):
                    # get the index of the right measure
                    data_index = measure['type'].index(use_type)
                    raw_data_obj = station.get('data', {}).get(module_id, [[]])[0]
                    values = [obs[data_index] for obs in raw_data_obj.get('value', [])]

                    # build the datetime index
                    index = pd.date_range(start=dt.fromtimestamp(int(raw_data_obj.get('beg_time'))), periods=len(values), freq='30min')
                    df = pd.DataFrame(values, index=index, columns=[f"{station['_id']}__{module_id}"])

                    # merge
                    data = pd.merge(data, df, how='outer', left_index=True, right_index=True)

        # return 
        if fmt == 'dataframe':
            return data
        
        elif fmt == 'markdown':
            return data.to_markdown()
        elif fmt == 'latex':
            return data.to_latex()
        elif fmt == 'csv':
            return data.to_csv()
        elif fmt == 'html':
            return data.to_html()
