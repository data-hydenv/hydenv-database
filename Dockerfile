ARG PYTHON_VERSION=3.9.13
FROM python:${PYTHON_VERSION}

# create folder structure
RUN mkdir -p /src/hydenv

# COPY the needed files
COPY ./hydenv /src/hydenv
COPY ./MANIFEST.in /src/MANIFEST.in 
COPY ./README.md /src/README.md
COPY ./requirements.txt /src/requirements.txt
COPY ./setup.py /src/setup.py

# install package
WORKDIR /src
RUN pip install -e .

# create a volume for the env file
VOLUME [ "~/" ]

ENTRYPOINT [ "python", "-m", "hydenv" ]
CMD [ "--help" ]