from random import random, choices, choice
from io import StringIO

import pandas as pd
from sqlalchemy import create_engine
# from barnum import gen_data

from hydenv.util import env

NORMALIZE_SQL ="""
-- PRODUCTS
drop table if exists products cascade;
create table products as
select distinct 
	split_part(split_part(purchase, ' | ', 1), ' - ', 1) as product_id,
	split_part(split_part(purchase, ' | ', 1), ' - ', 2) as name,
    split_part(purchase, ' | ', 1) as orig
from purchases;
alter table products add constraint  pkey_products primary key (product_id);
-- CITIES
drop table if exists cities cascade;
create table cities as
select 
	row_number() over (order by zip) as city_id,
	t.*
from
(select distinct
	split_part(split_part(purchase, ' | ', 2), ' - ', 1) as zip,
	split_part(split_part(purchase, ' | ', 2), ' - ', 2) as city,
	split_part(split_part(purchase, ' | ', 2), ' - ', 3) as state,
    split_part(purchase, ' | ', 2) as orig
from purchases) t;
alter table cities add constraint pkey_cities primary key (city_id);
-- STORES
drop table if exists stores cascade;
create table stores as 
select 
	row_number() over (order by name) as store_id,
	t.name
from (select distinct 
	split_part(purchase, ' | ', 3) as name
from purchases) t;
alter table stores add constraint pkey_stores primary key (store_id);
-- CUSTOMERS
drop table if exists customers;
create table customers as 
select row_number() over (order by customer_id) as id, 
* from (select 
	customer_id,
	prod.product_id,
	s.store_id,
	c.city_id
from purchases p
join products prod on prod.orig=split_part(p.purchase, ' | ', 1)
join stores s on s.name=split_part(p.purchase, ' | ', 3)
join cities c on c.orig=split_part(p.purchase, ' | ', 2)) t;
alter table customers add constraint pkey_customers primary key (id);
alter table customers add constraint fkey_products foreign key (product_id) references products (product_id);
alter table customers add constraint fkey_stores foreign key (store_id) references stores (store_id);
alter table customers add constraint fkey_cities foreign key (city_id) references cities (city_id);
COMMIT;
"""
DROP_SQL = """
drop table if exists products cascade;
drop table if exists cities cascade;
drop table if exists stores cascade;
drop table if exists customers;
"""
class HydenvCustomerExamples:
    """
    Space Missions Example Loader.\n
    Loads Space Missions example data from Github and load it into the
    given database. The database has to be installed and initialized before. 
    Do that by hand or use the two CLI commands:
        python -m hydenv database install  --connection=postgresql://postgres:<adminpassword>@localhost:5432/postgres
        python -m hydenv database init --clean --connection=postgresql://hydenv:hydenv@localhost:5432/hydenv
    :param connection: The database URI following syntax:\n
        postgresql://<user>:<password>@<host>:<port>/<database>

    """
    def __init__(self, connection="postgresql://{usr}:{pw}@{host}:{port}/{dbname}"):
        # substitute and save
        self.__connection = env.build_connection(connection=connection)
        self.engine = create_engine(self.__connection)

    def run(self, quiet=True, k=500, normalize=False):
        """
        """
        pass
        # 3% different stores - max 60
        # maxs = 60 if int(0.03 * k) > 60 else int(0.03 * k) 
        # stores = [gen_data.create_company_name() for _ in range(maxs)]

        # # 2% different locations - max 21
        # maxs = 21 if int(0.02 * k) > 21 else int(0.02 * k)
        # locations = [gen_data.create_city_state_zip() for _ in range(maxs)]

        # # 8% different products - 1200 max 
        # maxs = 1200 if int(0.08 * k) > 1200 else int(0.08 * k)
        # products = [(int(random() * 10**8), gen_data.create_nouns(choices([1,2,3], weights=[0.7, 0.2, 0.1], k=1)[0])) for _ in range(maxs)]

        # # 60% different customers
        # customer_ids = choices(list(range(int(0.6 * k))), k=k)

        # csv = "customer_id,purchase\n"

        # for customer_id in customer_ids:
        #     # new dataset
        #     p = '%s - %s' % choice(products)
        #     loc = ' - '.join(choice(locations))
        #     line = '%s,%s' % (customer_id, ' | '.join([p, loc, choice(stores)]))
            
        #     csv += line + '\n'
        
        # # build buffer
        # buf = StringIO()
        # buf.write(csv)
        # buf.seek(0)

        # df = pd.read_csv(buf)

        # if not quiet:
        #     print('Uploading...')
        
        # # save to database
        # with self.engine.connect() as con:
        #     con.execute('DROP TABLE IF EXISTS purchases CASCADE;COMMIT;')
        # df.to_sql('purchases', self.engine, index=None, if_exists='replace')

        # if normalize:
        #     if not quiet:
        #         print('Normalizing data scheme...')
        #     self._normalize()

        # if not quiet:
        #     print('Done.')

    def _normalize(self):
        with self.engine.connect() as con:
            con.execute(NORMALIZE_SQL)

    def drop(self):
        with self.engine.connect() as con:
            con.execute(DROP_SQL)
