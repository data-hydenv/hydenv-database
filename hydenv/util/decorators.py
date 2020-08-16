from functools import wraps
import json

from tabulate import tabulate

from hydenv import models

def check_overrides(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        self = args[0]
        # check if skip_overrides is set
        if not kwargs.get('skip_overrides', False):
            model_name = args[1]
            override_name = '%s_%s' % (func.__name__, model_name.lower())
            if hasattr(self, override_name):
                print(kwargs)
                ov_func = getattr(self, override_name)
                return ov_func(**{k:v for k,v in kwargs.items() if k != 'skip_overrides'})
        
        # if it hasn't return, run the core func
        return func(*args, **{k:v for k,v in kwargs.items() if k != 'skip_overrides'})
    return wrapper


def stringify_output(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        self = args[0]
        if hasattr(self, 'fmt'):
            fmt = self.fmt
        else:
            fmt = 'json'
        
        # run the function
        output = func(*args, **kwargs)

        if not isinstance(output, (tuple, list)):
            output = [output]

        # handle output
        out = []
        for o in output:
            if isinstance(o, models.Base):
                d = dict()
                for col in o.__table__.columns:
                    d[col.name] = str(getattr(o, col.name))
                out.append(d)
            else:
                out.append(str(o))
        
        if fmt == 'print':
            return tabulate(out, headers='keys', tablefmt='psql')
        elif fmt == 'json':
            return json.dumps(out, indent=4)
        elif fmt in ('html', 'rst', 'latex'):
            return tabulate(out, headers='keys', tablefmt=fmt)
        else:
            return out
    return wrapper
