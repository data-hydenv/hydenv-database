from setuptools import setup, find_packages

def version():
    with open('hydenv/__version__.py', 'r') as f:
        loc = dict()
        exec(f.read(), loc, loc)
        return loc['__version__']


def readme():
    with open('README.md') as f:
        return f.read()


def requirements():
    with open('requirements.txt') as f:
        return f.read().split('\n')


setup(
    name='hydenv',
    version=version(),
    author='Mirko Mälicke',
    author_email='mirko@hydrocode.de',
    description='Database management tools for data lecture',
    long_description=readme(),
    long_description_content_type='text/markdown',
    install_requires=requirements(),
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False
)
