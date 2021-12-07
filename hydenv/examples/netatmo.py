import os
import json
from datetime import datetime as dt
from datetime import timedelta as td
import requests


class HydenvNetatmoExample:
    def __init__(self, password: str = None, quiet: bool = False):
        self._token_url = "https://us-central1-data-course-261609.cloudfunctions.net/get_token"
        self._password = password
        self.quiet = quiet
        pass

    def _check_token(self):
        # check if there is a netatmo token in environment
        env_token = os.environ.get("NETATMO_TOKEN", "{}")

        token = json.loads(env_token)
        # default to an expired token 
        expires_at = token.get("expires_at", dt.now() - td(days=1))
        
        # check token refresh
        if expires_at > dt.now():
            self.token = token
        else:
            self.token = self._get_token()

    def _get_token(self):
        if self._password is None:
            raise Exception("[ERROR] Can't refresh the Bearer token without a password")
        
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


def get_stations(ne=[48.037, 7.89841], sw=[47.9569, 7.72333], token: dict = None, **kwargs):
    # if no token given, try to get one
    #if token is None:
    #    token = authenticate(**kwargs)
    
    # set the url
    URL = os.environ.get('NETATMO_STATIONS_URL', 'https://api.netatmo.com/api/getpublicdata')

    # build the header
    header = {'Authorization': f"Bearer {token['access_token']}"}

    # build url params
    params = dict(lat_ne=[ne[0]], lon_ne=[ne[1]], lat_sw=[sw[0]], lon_sw=[sw[1]], required_data='temperature')

    try:
        response = requests.get(URL, headers=header, params=params)
        response.raise_for_status()
    except Exception as e:
        print(str(e))
        return None
    
    # extract stations
    stations = json.loads(response.content.decode())['body']

    return stations


def transform_stations_list(stations: list, filter_for=('temperature', 'humidity', 'rain_60min', 'pressure')):
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