from hydenv.database import HydenvDatabase
from hydenv.measurements import HydenvMeasurementsCli
from hydenv.exercises import HydenvExercises
from hydenv.backend import run as backend_run

from hydenv.scripts.hobo_import import HydenvHoboImporterCli
from hydenv.examples.examples import HydenvExamples
from hydenv.gui.start import run as run_gui

import fire
fire.Fire({
    'database': HydenvDatabase,
    'measurements': HydenvMeasurementsCli,
    'exercises': HydenvExercises,
    'exercise': HydenvExercises,
    'backend': backend_run,
    'hobo': HydenvHoboImporterCli,
    'gui': run_gui,
    'GUI': run_gui,
    'example': HydenvExamples,
    'examples': HydenvExamples
})
