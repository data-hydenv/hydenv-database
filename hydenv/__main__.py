from hydenv.database import HydenvDatabase
from hydenv.measurements import HydenvMeasurementsCli
from hydenv.exercises import HydenvExercises
from hydenv.backend import run as backend_run

from hydenv.scripts.hobo_import import HydenvHoboImporterCli
from hydenv.scripts.examples import HydenvExamplesCli


import fire
fire.Fire({
    'database': HydenvDatabase,
    'measurements': HydenvMeasurementsCli,
    'exercises': HydenvExercises,
    'exercise': HydenvExercises,
    'backend': backend_run,
    'hobo': HydenvHoboImporterCli,
    'example': HydenvExamplesCli,
    'examples': HydenvExamplesCli
})
