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


def build_connection(connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}") -> str:
    # check for replacements
    fargs = read_file()
    args = dict()
    if '{usr}' in connection:
        args['usr'] = os.environ.get('POSTGRES_USER', fargs.get('POSTGRES_USER', 'hydenv'))
    if '{pw}' in connection:
        args['pw'] = os.environ.get('POSTGRES_PASSWORD', fargs.get('POSTGRES_PASSWORD'))
    if '{host}' in connection:
        args['host'] = os.environ.get('POSTGRES_HOST', fargs.get('POSTGRES_HOST', 'localhost'))
    if '{port}' in connection:
        args['port'] = os.environ.get('POSTGRES_PORT', fargs.get('POSTGRES_PORT', 5432))
    if '{dbname}' in connection:
        args['dbname'] = os.environ.get('POSTGRES_DBNAME', fargs.get('POSTGRES_DBNAME', 'hydenv'))
        
    # substitute and return
    return connection.format(**args)


