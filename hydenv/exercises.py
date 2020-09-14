import os
import requests
import subprocess
from threading import Timer
import webbrowser

from hydenv.util import env

BACKEND = os.path.abspath(os.path.join(os.path.dirname(__file__), 'backend.py'))

class HydenvExercises:
    """
    Hydenv exercise tool\n
    You can use this tool to run queries against a connected database instance.
    It is also possible to compare your result to prepared solutions.
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>
    :param backend: The backend server to process the SQL.\n
        defaults to 'local', to run on localhost. Can be overwritten by a
        remote API server.
    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", backend='local'):
        self.connection = env.build_connection(connection=connection)

        # backend settings
        self.backend_use_debug = False
        self.allow_external = False     
        self._backend_proc = None
        self._backend_thread = None

        if backend == 'local':
            self.backend = 'http://localhost:5000/'
            self.backend_use_debug = True
        elif backend == 'extern' or backend == 'external':
            self.backend = 'http://localhost:5000/'
            self.backend_use_debug = False
            self.allow_external = True
        else:
            self.backend = backend
        print(self.backend)

    def start(self):
        """
        Check if the backend is already running.
        """
        print(self.backend)
        try:
            res = requests.get(self.backend + 'api/v1/ping')
            if res.status_code != 200:
                raise requests.ConnectionError()
            print('Backend instance already running')
        except requests.ConnectionError:
            self._run_backend_server()

    def _run_backend_server(self):
        """
        On local machines, we need to start the functions-framework in a 
        subprocess.
        """
        print('Starting backend server: %s' % self.backend)
        
        # add the database connection to evironment variables

        # build command
        cmds = ['python', BACKEND, '--db_uri=%s' % self.connection]
        if self.backend_use_debug:
            cmds.append('--debug')
        if self.allow_external:
            cmds.extend(['--host', '0.0.0.0'])
#            subprocess.call(['iptables', '-t', 'nat', '-A', 'PREROUTING', '-p', 'tcp', '--dport', '80', '-j', 'REDIRECT', '--to-port', '8080'])
        
        # execute
        print('Running\nOpen a new terminal to start learning')
        t = Timer(0.3, webbrowser.open_new_tab, args=[self.backend + 'api/v1/ping'])
        t.start()
        self._backend_proc = subprocess.call(cmds)
        

    def run_sql(self, sql: str, safe=True):
        """
        Run SQL code against the given connection and return the result.
        :param sql: The sql code to be executed
        :param safe: Only allow SELECT statements
        """
        if safe and not sql.lower().startswith('select'):
            print('The SQL statement is not allowed.')
            return
        
        res = requests.get(self.backend + 'run', params={'sql': sql})
        if res.status_code == 200:
            return res.json()
        else:
            print('An error occured.\nPlease report to the developer: mirko@hydrocode.de')
            return res.json()

