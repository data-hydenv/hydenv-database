from hydenv.util import env


class EmployeeExample:
    r"""
    Employee Example Loader.\n
    Loads a generic example of employees and customers of an arbitrary 
    business. Can be used to learn SQL basics and database normalization.
    The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)

    def run(self, nf=None, quiet=True):
        pass

    def _load_dirty_example(self):
        pass

    def _load_normalized(self):
        pass