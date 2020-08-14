---
layout: page
title: database.py
permalink: /database
---
# database.py

The database.py CLI can be used to install and manage new instances of the 
PostgreSQL database needed for the lecture.

## usage

You can simply execute the `database.py` file using the Python interpreter you 
installed `hydenv` into. Show the help like:

```bash
python database.py -h
```
```
INFO: Showing help with the command 'database.py -- --help'.

NAME
    database.py - Hydenv database tool

SYNOPSIS
    database.py <flags>

DESCRIPTION
    You can use this tool to install and populate new instances of
    the hydenv database. Works for local, remote and cloud instances.

FLAGS
    --connection=CONNECTION
        The database URI following syntax:

        postgresql://<user>:<password>@<host>:<port>/<database>
```

If you installed the tools via pip, the `database.py` might be buried in some 
complicated path. Therefore, there is also an module entrypoint into `hydenv`. 
Instead of calling a Python script, you can invoke the whole module and use the 
script name as command:

```bash
python -m hydenv database -h
```

```
INFO: Showing help with the command '__main__.py database -- --help'.

NAME
    __main__.py database - Hydenv database tool

SYNOPSIS
    __main__.py database <flags>

DESCRIPTION
    You can use this tool to install and populate new instances of
    the hydenv database. Works for local, remote and cloud instances.

FLAGS
    --connection=CONNECTION
        The database URI following syntax:

        postgresql://<user>:<password>@<host>:<port>/<database>
```

## commands

Right now, there are two commands:

```
python -m hydenv database install -h
python -m hydenv database init -h
```

*more info coming soon*
