from setuptools import setup, find_packages

def version():
    with open('VERSION') as f:
        return f.read().strip()


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
