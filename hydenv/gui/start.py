import subprocess
import os

from hydenv.util import env
from hydenv.exercises import HydenvExercises

SCRIPTPATH = os.path.join(os.path.dirname(__file__), 'main.py')


def run(connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}", legacy=False, **kwargs):
    """
    """
    connection = env.build_connection(connection=connection)
    # check if the legacy exercises app should be used
    if legacy:
        backend = kwargs.get('backend', 'local')
        port = kwargs.get('port', 5000)
        exercisesApi = HydenvExercises(connection=connection, backend=backend, port=port)
        exercisesApi.start(no_browser=kwargs.get('no_browser', False))
        return

    # run the new GUI
    os.system(f"streamlit run {SCRIPTPATH}")
