from hydenv.database import HydenvDatabase
from hydenv.measurements import HydenvMeasurementsCli
from hydenv.exercises import HydenvExercises
from hydenv.backend import run as backend_run


import fire
fire.Fire({
    'database': HydenvDatabase,
    'measurements': HydenvMeasurementsCli,
    'exercises': HydenvExercises,
    'backend': backend_run
})
