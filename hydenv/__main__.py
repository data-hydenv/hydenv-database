from hydenv.database import HydenvDatabase
from hydenv.measurements import HydenvMeasurementsCli


import fire
fire.Fire({
    'database': HydenvDatabase,
    'measurements': HydenvMeasurementsCli
})
