import os
import json

NAME_MAP = dict(
    usr='POSTGRES_USER',
    pw='POSTGRES_PASSWORD',
    host='POSTGRES_HOST',
    port='POSTGRES_PORT',
    dbname='POSTGRES_DBNAME'
)

def store_file(**kwargs):
    fname = os.path.abspath(os.path.join(os.path.expanduser('~'), 'hydenv.env'))
    config = read_file()
    # update
    for k,v in kwargs.items():
        config[NAME_MAP[k]] = v
    
    with open(fname, 'w') as f:
        json.dump(config, f)

def read_file() -> dict:
    fname = os.path.abspath(os.path.join(os.path.expanduser('~'), 'hydenv.env'))
    if os.path.exists(fname):
        with open(fname, 'r') as f:
            config = json.load(f)
    else:
        config = dict()
    return config

def expose(**kwargs):
    for k,v in kwargs.items():
        os.environ[k] = v