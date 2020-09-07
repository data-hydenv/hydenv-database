from hydenv.database import HydenvDatabase
from hydenv.measurements import HydenvMeasurementsCli
from hydenv.exercises import HydenvExercises


import fire
fire.Fire({
    'database': HydenvDatabase,
    'measurements': HydenvMeasurementsCli,
    'exercises': HydenvExercises
})
