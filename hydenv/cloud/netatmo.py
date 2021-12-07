import os
import json
import requests
from datetime import datetime as dt
from datetime import timedelta as td


def get_local_args(**kwargs):
    # check if a secrect file exists
    try:
        with open(os.path.join(os.path.dirname(__file__), 'netatmo.secret'), 'r') as f:
            fkwargs = json.load(f)
    except Exception as e:
        fkwargs = {}
    
    # update kwargs
    fkwargs.update(kwargs)

    AUTH = dict(
        client_id=fkwargs.get('client_id', os.environ.get('CLIENT_ID', '6193abaf40deab36bd67d434')),
        client_secret=fkwargs.get('client_secret', os.environ.get('CLIENT_SECRET')),
        username=fkwargs.get('username', os.environ.get('username')),
        password=fkwargs.get('password', os.environ.get('password')),
        grant_type='password'
    )

    # check params
    if not AUTH['client_id']:
        raise Exception('client_id is missing')
    if not AUTH['client_secret']:
        raise Exception('client_secret is missing')
    if not AUTH['username']:
        raise Exception('username is missing')
    if not AUTH['password']:
        raise Exception('password is missing')

    return AUTH


def authenticate(**kwargs):
    # get authentication
    AUTH = get_local_args(**kwargs)

    # set the url
    URL = os.environ.get('NETATMO_AUTH_URL', 'https://api.netatmo.com/oauth2/token')

    # authenticate
    response = requests.post(URL, data=AUTH)
    response.raise_for_status()

    # return the response
    token = json.loads(response.content.decode())

    if 'expires_in' in token:
        token['created'] = dt.now()
        token['expires'] = token['created'] + td(seconds=token['expires_in'])

    return token
