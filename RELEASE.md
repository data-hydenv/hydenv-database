## Hydenv Database CLI

Database management and data upload CLI for the data management lecture at University of Freiburg and Karlsruhe Institute of Technology (KIT).
The CLI needs a running PostgreSQL/PostGIS instance running. It has CLI and GUI tools to install, populate and run example datasets and exercises for all assignments and additional practice. You can install the CLI locally using pip:

```bash
pip install hydenv
python -m hydenv --help
```

or use the docker container
```bash
docker run --rm -it ghcr.io/data-hydenv/hydenv --help
```

## Install

After that, you need to connect the CLI to your database once, and create a new user to generate all tables needed.
There is an interactive install command to guide you through the install process.

```
hydenv database -i
```