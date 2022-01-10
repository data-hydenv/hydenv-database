import glob
import os
import sys
import json
import hashlib
import time
from io import StringIO
from datetime import datetime as dt
from datetime import timedelta as td
from random import choice
from string import ascii_letters

import streamlit as st
import extra_streamlit_components as stx
from streamlit_ace import st_ace, THEMES
from universal_analytics import Tracker, HTTPRequest

from hydenv.database import HydenvDatabase
from hydenv.examples.examples import HydenvExamples
from hydenv.examples.osm import CITIES, FEDERAL_STATES

BASEPATH = os.path.dirname(os.path.abspath(__file__))
WELCOME = """
This application offers a GUI to some parts of the hydenv CLI. The whole software was developed by hydrocode.
The software is open source, but is able to connect resources, content and data, that are technically not part
of the software. They can be used free of charge for educational purposes. 
Remote database connection and cloud saving of exercises are excluded from these terms and might need registration and/or 
subscription in the future.

The application tracks some general user behavior using Google analytics. The IP adress is anonymized and can not be tracked
back to you. The data collected is: Your OS version, browser version and solving attempts of exercises. Following Art. 6 par. 1
GDPR we have a legitimate interest to verify technical integrety of the application. The duration of saving is 2 months and 
the location is within Europe. By using this application, you consent to these terms.
"""

EXAMPLE_INTRO ="""
The hydenv CLI can automatically download, merge, prepare and filter remote datasets for you.
It also includes database models and can upload the data samples into the connected database.
There are many different dataset that can be loaded. Possibly, not all of the examples can 
yet be run in the GUI.
"""

CONNECT_INTRO = """To use the hydenv GUI, you need to connect a PostgreSQL database.
The easiest way is to install it locally and create a new instance here, using a superuser.
That is a one-time setup to create a new user and all needed tables, populated with some example data.

If the instance is already initialized, you can choose the 'connect existing db' option and set the connection information
of the newly created user.

It is also possible to connect one of the remote databases, which are hosted by hydrocode. In these cases, you will have received
the connection information already.
"""

def get_base_data():
    # get the tracks
    with open(os.path.join(BASEPATH, "maintain/tracks.json")) as f:
        tracks_ = json.load(f)
    
    # get the exercises
    exercises_ = list()
    files = glob.glob(os.path.join(BASEPATH, "maintain", "exercises*.json"))
    for file_ in files:
        with open(file_, 'r') as f:
            exercises_.extend(json.load(f))
    
    tracks = []
    # merge the lists
    for track in tracks_:
        sessions = []
        for session_ in track.get('sessions', []):
            exercises = []
            for exercise in session_.get('exercises', []):
                # find the exercise
                ex_data = [e for e in exercises_ if e.get('id') == exercise.get('id')].pop()
                exercise.update({k: v for k, v in ex_data.items() if k!='id'})
                
                # add
                exercises.append(exercise)
            session_.update({'exercises': exercises})
            sessions.append(session_)
        track.update({'sessions': sessions})
        tracks.append(track)    
    
    return tracks


def manage_session(tracks) -> dict:
    # load the track id
    track_id = st.session_state.get('track_id', False)

    # load the session id
    session_id = st.session_state.get('session_id', False)

    if not session_id or not track_id:
        # select a track
        TRACK = {t['id']: t['name'] for t in tracks}
        track_id = st.selectbox("Track", options=list(TRACK.keys()), format_func=lambda k: TRACK.get(k))

        # select a session
        track = [t for t in tracks if t['id'] == track_id].pop()
        SESSIONS = {s['name']: s['name'] for s in track.get('sessions', [])}
        session_id = st.selectbox("Session", options=list(SESSIONS.keys()), format_func=lambda k: SESSIONS.get(k))

        save = st.button("SELECT")
        if save:
            st.session_state.track_id = track_id
            st.session_state.session_id = session_id
            st.experimental_rerun()
        else:
            st.stop()

    # load the correct exercise
    exercise = st.session_state.get('exercise', None)
    if exercise is None:
        session = get_session(tracks, track_id, session_id)
        for e in session.get('exercises', []):
            if e['id'] in st.session_state.get('solved_exercises', []):
                continue
            else:
                exercise = e
                st.session_state.exercise = exercise
    if exercise is None:
        st.stop()
    return exercise


def get_session(tracks, track_id, session_id=None):
    # get the track
    track = [t for t in tracks if t['id'] == track_id].pop()
    if session_id is None:
        return track
    
    # get the session
    session = [s for s in track.get('sessions', []) if s['name'] == session_id].pop()
    return session


def load_solved_list():
    # TODO use firebase for paid accounts
    cookie_manager = stx.CookieManager()
    solved = cookie_manager.get('solved_exercises')
    if solved is None:
        solved = []
    st.session_state.solved_exercises = solved


def reset_track():
    if 'track_id' in st.session_state:
        del st.session_state.track_id
    if 'session_id' in st.session_state:
        del st.session_state.session_id
    if 'exercise' in st.session_state:
        del st.session_state.exercise


def change_exercise(tracks, direction='next'):
    # get the current exercise
    session = get_session(tracks, st.session_state.track_id, st.session_state.session_id)
    exercises = session.get('exercises', [])
    ex_id = st.session_state.exercise['id']
    idx = [i for i, e in enumerate(exercises) if e['id']==ex_id].pop()

    # check if it was the last one
    if direction == 'next':
        if len(exercises) == idx + 1:
            idx = 0
        else:
            idx += 1
    else:
        idx = idx - 1 if idx > 1 else 0
    
    st.session_state.exercise = exercises[idx]
    st.experimental_rerun()


def exercise_page(tracks, db: HydenvDatabase):
    # reset button
    reset = st.sidebar.button("Change Track & Session")
    if reset:
        reset_track()
        st.experimental_rerun()

    # main container
    #main = st.container()
    editor = st.sidebar.expander('EDITOR', expanded=True)
    layout = editor.radio('LAYOUT', options=['split', 'column'])
    if layout == 'split':
        main, right = st.columns(2)
    else:
        main = st.container()
        right = st.container()

    # get the exercise
    exercise = st.session_state['exercise']
    
    # build the page
    main.title(exercise['name'])
    body = main.expander('BODY', expanded=True)
    body.write(exercise['body'].get('content', '<i>No description found</i>'), unsafe_allow_html=True)

    # hint
    if 'hint' in exercise:
        hint = main.expander('HINT', expanded=False)
        hint.write(exercise['hint'], unsafe_allow_html=True)

    right.markdown('## Results')
    # main area
    with main.form('SQL input'):
        # check if there is prefill
        prefill = st.session_state.get(f"{exercise['id']}_prefill", exercise['body'].get('prefill', ''))
        
        code_theme = editor.selectbox('Editor theme', options=THEMES, index=2)
        size = editor.selectbox('Editor Size', options=['sm', 'md', 'lg'])
        sql_code = st_ace(
            value=prefill,
            placeholder='Put your SQL here', 
            height=600 if size == 'lg' else 450 if size == 'md' else 200,
            language='sql', 
            theme=code_theme, 
            auto_update=True
        )
        # compare mode


        do_run = st.form_submit_button('EXECUTE')

        if do_run:
            # save the query
            st.session_state[f"{exercise['id']}_prefill"] = sql_code
            
            # run
            result = db.execute(sql_code, json=True)
            solution = db.execute(exercise['solution']['content'], json=True)
            
            # save
            st.session_state.last_run = dict(exercise_id=exercise['id'], result=result)

            # here check if result correct
            res_hash = hashlib.sha256(str(result).encode()).hexdigest()
            sol_hash = hashlib.sha256(str(solution).encode()).hexdigest()
            main.code(f'Your hash:\t{res_hash}\nSolution hash:\t{sol_hash}')
            
            if res_hash == sol_hash:
                event('event', category='exercise_attempt', label=exercise['id'], exercise_id=exercise['id'], solved=True)
                right.success("**Great!** Your soultion was correct.")
                
                # TODO do more
                solved = st.session_state.get('solved_exercises', [])
                if exercise['id'] not in solved:
                    solved.append(exercise['id'])
                    
                    # update session state
                    st.session_state.solved_exercises = solved
                    cookie_manager = stx.CookieManager()
                    cookie_manager.set('solved_exercises', solved, expires_at=dt.now() + td(days=30), key='set_solved')
                    time.sleep(0.3)
            else:
                event('event', category='exercise_attempt', label=exercise['id'], exercise_id=exercise['id'], solved=False)
                right.error(f"Argh!. Not yet.")
    
    # indicate if this exercise has been solved before
    if exercise['id'] in st.session_state.solved_exercises:
        right.success('This task has already been solved')
    else:
        right.info('This task was not yet solved.')
    
    # right column
    run = st.session_state.get('last_run', {})
    if run.get('exercise_id', '-99') == exercise['id']:
        right.dataframe(run['result'])
        # right.json(run['result'])

    # solution
    solution_exp = main.expander('SOLUTION', expanded=False)
    solution_exp.code(exercise['solution'].get('content', ''), language='sql')
    
    # navigate buttons
    l, _, r = st.columns((1, 3, 1))
    go_prev = l.button('PREVIOUS EXCERCISE')
    go_next = r.button('NEXT EXCERCISE')
    if go_prev or go_next:
        change_exercise(tracks, direction='next' if go_next else 'previous')


def get_db_con(connection: str = None) -> HydenvDatabase:
    # check if the connection has peviously been set
    con = st.session_state.get('connection')
    if con is not None:
        return HydenvDatabase(connection=con)

    else:
        install_page()
    # in any other case
    db = _check_connection(connection=connection)
    if db:
        # if that worked, set the connection
        st.session_state.connection = db.unsafe_get_connection
        st.experimental_rerun()
    else:
        # force the install page
        install_page()


def _check_connection(connection: str = None, with_tables: bool = True):
    try:
        db = HydenvDatabase(connection=connection)
        if with_tables:
            res = db.execute('SELECT * FROM space_raw LIMIT 1;')
        else:
            res = db.execute('SELECT * FROM information_schema.tables LIMIT 1;')
        return db
    except Exception:
        return False


def install_page():
    # cookie consent
    if not st.session_state.get('consent', False):
        st.markdown('### A hydrocode application')
        st.markdown('# Hydenv GUI')
        st.markdown(WELCOME)

        got_it = st.button('Continue')
        if got_it:
            st.session_state.consent = True
            st.experimental_rerun()
        else:
            st.stop()
    
    # there is nothing to try - could use a cookie here
    st.markdown('## Connect hydenv database')
    st.markdown(CONNECT_INTRO)
            
    # check if there was a error message
    if 'error_msg' in st.session_state:
        st.error(st.session_state.error_msg)
        del st.session_state.error_msg
    
    if 'success_msg' in st.session_state:
        st.success(st.session_state.success_msg)
        del st.session_state.success_msg

    if not st.session_state.get('config_connection', False):
        # build the 
        left, right, _ = st.columns((1, 1, 4))
        install_new = left.button('CREATE NEW HYDENV INSTANCE')
        connect_existing = right.button('CONNECT EXISTING HYDENV DB')
        
        if install_new:
            st.session_state.config_connection = 'install_new'
        elif connect_existing:
            st.session_state.config_connection = 'connect_existing'
        else:
            st.stop()

    if st.session_state.config_connection == 'finished':
        del st.session_state.config_connection
        msg = st.empty()
        bar = st.progress(0)

        for i in range(5):
            msg.write("You will be redirected in {} seconds".format(5 - i))
            bar.progress((i + 1) *20)
            time.sleep(1)
        
        st.session_state.connection = st.session_state.raw_connection
        del st.session_state.raw_connection
        st.session_state.page_name = 'home'
        st.experimental_rerun()

    # build the menu
    with st.form('SETUP CONNECTION'):
        host = st.text_input('DATABASE HOST', 'localhost')
        port = st.text_input('PORT', '5432')
        if st.session_state.config_connection == 'install_new':
            pg_pass = st.text_input('POSTGRES SUPER PASSWORD')
        user = st.text_input('HYDENV USER', 'hydenv')
        userpw = st.text_input('HYDENV PASSWORD', 'hydenv')
        db_name = st.text_input('DATABASE NAME', 'hydenv')
        submit = st.form_submit_button()

        # check 
        if submit:
            if st.session_state.config_connection == 'install_new':
                con = f"postgresql://postgres:{pg_pass}@{host}:{port}/postgres"
                
                # do the stuff
                try:
                    db = HydenvDatabase(connection=con)
                    with st.spinner('Creating database...'):
                        db.install_silent(db_name=db_name, user=user, password=userpw, skipt_init=False)

                    # finished
                    st.session_state.raw_connection = db.unsafe_get_connection
                    st.session_state.config_connection = 'finished'
                    st.session_state.success_msg = 'Successfully created database. You will be redirected to the main page.'
                    st.experimental_rerun()
                except Exception as e:
                    st.session_state.error_msg = str(e)
                    st.experimental_rerun()
            elif st.session_state.config_connection == 'connect_existing':
                con = f"postgresql://{user}:{userpw}@{host}:{port}/{db_name}"
                
                # check if it works with tables
                if _check_connection(connection=con):
                    st.session_state.raw_connection = con
                    st.session_state.config_connection = 'finished'
                    st.experimental_rerun()
                
                # if not try to install the tables or fail
                else:
                    try:
                        db = _check_connection(connection=con, with_tables=False)
                        if not db:
                            raise Exception('Could not connect to database')
                        db.init(clean=True)
                        st.session_state.raw_connection = db.unsafe_get_connection
                        st.session_state.config_connection = 'finished'
                        st.session_state.success_msg = 'Successfully connected to database. You will be redirected to the main page.'
                        st.experimental_rerun()
                    except Exception as e:
                        st.session_state.error_msg = str(e)
                        st.experimental_rerun()
            else:
                st.error('Something went wrong')
                st.json(st.session_state)
                st.stop()
    # STOP
    st.stop()


def example_page(db: HydenvDatabase):
    example = st.session_state.page_name.split('_')[1]

    # CHECK queries
    CHECK = {
        'hobo': ["SELECT short as \"Identifier\", full_name as \"Term\", count(*) AS \"HOBO Metadata\" FROM metadata m JOIN terms ON terms.id=m.term_id JOIN sensors s ON m.sensor_id=s.id WHERE s.name='hobo' GROUP BY full_name, short;"],
        'osm': [
            """SELECT node_type as "Node Type", count(*) as "Features" from osm_nodes GROUP BY node_type;""",
            """select 'Distinct OSM tags' as "Description", count(distinct key) from osm_tags union select 'Total tags on Nodes' as "Description", count(*) from nm_nodes_tags;"""
        ]
    }
    CMD = {
        'hobo': 'python -m hydenv examples hobo',
        'osm': 'python -m hydenv examples osm',
        'netatmo': 'python -m hydenv examples netatmo'
    }
    cmd = CMD[example]

    # show the title
    st.title('Example {}'.format(example.upper()))
    
    # show the tables
    if example in CHECK:
        st.markdown('### Existing tables\n Please make sure that the examples data is not listed below. Most example APIs will create dublicates if you run them twice.')
        for query in CHECK[example]:
            overview_data = db.execute(query, json=True)
            st.table(overview_data)

    st.sidebar.markdown('### API options')
    
    # example-specific code
    is_defnied = True
    args = {}
    if example == 'hobo':
        # terms
        terms = st.sidebar.multiselect('Terms', options=['WT18', 'WT19', 'WT20', 'WT21', 'WT22'])
        if len(terms) == 0:
            st.warning('It is recommended to explicitly select the terms. Otherwise all terms will be selected.')
        else:
            args = {'terms': terms}
        
        # handle only flag
        ONLYS = {'all':'Import all at once', 'metadata': 'HOBO Metadata', 'raw-data': 'HOBO raw data', 'quality-data': 'HOBO quality checked data'}
        only = st.sidebar.radio('Import only', options=list(ONLYS.keys()), index=0, format_func=lambda k: ONLYS[k])

        if only != 'all':
            args['only'] = only
    
    elif example == 'osm':
        # action
        action = st.sidebar.selectbox('Action', options=['city-districts', 'counties', 'energiewende', 'nodes', 'way'])
        args = {'action': action}

        if action not in ('nodes', 'way'):
            use_predefined = st.sidebar.checkbox('Use predefined geometry settings', value=True)
        
        if action == 'city-districts':
            if use_predefined:
                city = st.sidebar.selectbox('PREDEFINED CITY', options=list(CITIES.keys()), format_func=lambda k: CITIES[k])
                args['city'] = city
            else:
                args['city'] = st.sidebar.text_input('CITY', 'Karlsruhe')
        
        elif action == 'counties':
            if use_predefined:
                args['state'] = st.sidebar.selectbox('FEDERAL STATE', options=FEDERAL_STATES)
            else:
                args['state'] = st.sidebar.text_input('FEDERAL STATE', 'Baden-Württemberg')
        
        elif action == 'energiewende':
            st.markdown("""### Description\nThis API endpoint is a special endpoint, which calls the `counties` and `node` endpoints several times. Only useful for the Data-Challenge *Energiewende*.""")
            if use_predefined:
                BOUNDS = {**CITIES, **{s: s for s in FEDERAL_STATES}}
                args['boundary'] = st.sidebar.selectbox('BOUNDARY', options=list(BOUNDS.keys()), format_func=lambda k: BOUNDS.get(k))
            else:
                args['boundary'] = st.sidebar.text_input('BOUNDARY', 'Karlsruhe', help="Make sure that this is a valid OSM amenity tag.")

        elif action == 'nodes' or action == 'way':
            args['boundary'] = st.sidebar.text_input('BOUNDARY', 'Baden-Württemberg' if action == 'nodes' else 'Karlsruhe', help="Make sure that this is a valid OSM amenity tag.")
            args['attribute'] = st.sidebar.text_input('OSM Tag Attribute', 'generator:source' if action == 'nodes' else 'leisure', help=f"The OSM Tag, which has to exist on the {action}")
            args['value'] = st.sidebar.text_input('OSM Tag Value', 'wind' if action == 'nodes' else 'playground', help=f"Filters for this value on {action} with tag {args['attribute']}")
            st.sidebar.info('You can rename the tag')
            alias = st.sidebar.text_input('TYPE ALIAS', 'wind turbine' if action == 'nodes' else 'playground')
            if alias.strip() != "":
                args['type_alias'] = alias

    elif example == 'netatmo':
        st.info('The Netatmo API interface is highly experimental. Database upload is not yet implemented.')
        args['action'] = st.sidebar.selectbox('Action', options=['get-data', 'metadata', 'parse'])
        if args['action'] != 'parse':
            args['password'] = st.sidebar.text_input('Passphrase', '', help='The passphrase can be obtained from mirko@hydrocode.de')
            if args['password'] == '':
                st.sidebar.warning('This field can\'t be empty. Please enter a passphrase.')
                st.stop()
            if args['action'] == 'get-data':
                start_date = st.date_input('Load data from', dt.now().date() - td(days=7), help="You can only request 1024 data points of given temporal scling (usually 30min).")
                args['start'] = start_date.strftime('%Y%m%d')
            cc_opts = st.sidebar.radio('Set boundary', options=['city', 'bbox'])
            if cc_opts == 'city':
                args['city'] = st.sidebar.selectbox('City', options=['karlsruhe', 'freiburg'], format_func=lambda c: c.capitalize())
            else:
                args['bbox'] = "[%s]" % st.sidebar.text_input('Bounding box', '49.060234,8.541590,48.974132,8.294625', help='The bounding box has to be in the format: lat_ne,lon_ne,lat_sw,lon_sw')
            args['required-data'] = st.sidebar.multiselect('Required data variables', options=['temperature', 'humidity', 'pressure'], default=['temperature'],  help="Omit Netatmo stations, which do not include these variables")
        else:
            uploaded_file = st.sidebar.file_uploader('Load dump file', type='json', help="Load the Netatmo API dump file here.")
            if uploaded_file is not None:
                args['load'] = uploaded_file.name
            args['use_type'] = st.sidebar.selectbox('Use variable type', options=['temperature', 'humidity', 'pressure'])
            args['fmt'] = st.sidebar.selectbox('Output format', options=['latex','markdown','html','json','csv'])
    else:
        is_defnied = False
    
    # build args
    for k, v in args.items():
        cmd += f" --{k.replace('_', '-')}={v}"

    # ARGS are build now - build the API
    api = HydenvExamples(connection=db.unsafe_get_connection, quiet=False)
    runner = getattr(api, example)

    with st.expander('DOCUMENTATION', expanded=False):
        st.markdown('This is what I found in the code:')
        st.help(runner)

    # show the command
    st.markdown('### CLI command\nThe command below is the corresponding CLI command for the specified API call.')
    st.code(cmd, language='bash')

    if not is_defnied:
        st.info('This example dataset is not yet implemented. Try running it using the cli. Maybe the help page will help as well.')
        st.code(cmd + ' --help', language='bash')
        st.stop()

    # start buttions
    but1 = st.button('RUN CLI', key='but1')
    but2 = st.sidebar.button('RUN CLI', key='but2')

    if but1 or but2:
         # create the classes to handle output
        console_output = st.empty()
        def callback(output):
            console_output.code(output, language='bash')
        
        class Console(StringIO):
            backlog = ""
            def write(self, s):
                self.backlog += s
                super(Console, self).write(s)
                callback(self.backlog)
        
        # handle StdOut
        try:
            orginial_stdout = sys.stdout
            sys.stdout = Console()
            with st.spinner('Executing API call...'):
                if example == 'netatmo':
                    output = runner(**args)
                else:
                    output = None
                    runner(**args)
                runner(**args)
        except Exception as e:
            st.warning('Something went wrong: {}'.format(e))
            st.exception(e)
        finally:
            # restore original StdOut
            sys.stdout = orginial_stdout
        
        if output is not None:
            st.markdown('## CLI output')
            if 'fmt' not in args or args['fmt'] == 'json':
                st.json(output)
            elif args['fmt'] == 'markdown':
                st.markdown(output)
            else:
                st.code(output, language=args['fmt'])
        st.success('Finished')
    st.stop()


def home_page(db: HydenvDatabase):
    st.title('Hydenv CLI overview')
    st.markdown('All Hydenv CLI endpoints which are implemented are available here. You find a short explanation with the call signature and a link to the GUI, if available.')

    # install
    with st.expander('HYDENV DATABASE', expanded=False):
        # INSTALL COMMAND
        st.markdown('Can be used to install new database instance, connect exising ones on the same host or remote and to clean up and re-initialize the database.')
        il, ir = st.columns((9, 1))
        il.code('# install new database\npython -m hydenv database install -i', language='bash')
        iopen = ir.button('OPEN IN GUI', key='open_install')
        if iopen:
            st.session_state.page_name = 'install'
            st.experimental_rerun()
        
        # INIT COMMAND
        st.warning('This will delete all data in the database!')
        il2, ir2 = st.columns((9, 1))
        il2.code('# clean and re-init\npython -m hydenv database init --clean', language='bash')
        ir2_run = ir2.button('RUN HERE', key='run_init')
        if ir2_run:
            db.init(clean=True)
            il2.success('Successfully cleaned and re-initialized the database.')

        # TABLE COMMAND
        tl, tr = st.columns((9, 1))
        tl.code('# show all tables\npython -m hydenv database table --list', language='bash')
        tl.code('# inspect a single table\npython -m hydenv database table --name=osm_nodes --fmt=markdown', language='bash')
        topen = tr.button('TABLE TREE', key='open_table')
        if topen:
            table_names = db.table(list=True, fmt='json')
            tree = {}
            bar = st.progress(0)
            
            # load all tables
            for i, table in enumerate(table_names):
                cols = db.table(table['name'], fmt='json')
                tree[table['name']] ={'TYPE': table['type'], 'ATTRIBUTES': cols}

                bar.progress((i + 1) / len(table_names))

            st.session_state.table_tree = tree
            st.experimental_rerun()
    
    # exercises
    with st.expander('EXERCISES', expanded=True):
        st.markdown('One of the main feature of hydenv-database. You can interactively start SQL exercises, which are tested with your **own database copy** and give you feedback.')
        el, er = st.columns((9, 1))
        el.code('# start exercises\npython -m hydenv gui', language='bash')
        eopen = er.button('OPEN IN GUI', key='open_exercises')
        if eopen:
            st.session_state.page_name = 'exercise'
            st.experimental_rerun()
        
        st.markdown('There is also a full-featured web-application, that is currently not developed any further. But it is still available')
        st.code('python -m hydenv exercises gui --legacy', language='bash')
    
    # examples
    st.markdown('## Examples')
    st.markdown(EXAMPLE_INTRO)
    
    # space
    with st.expander('SPACE MISSIONS', expanded=False):
        st.markdown('The space example set is pre-installed with the package. You don\' need to run this manually.')
        exl, exr = st.columns((9, 1))
        exl.code('# start examples\npython -m hydenv examples space', language='bash')
        exl.code('# Install all normalized tables as well.\npython -m hydenv examples space --normalize', language='bash')

    # hobo
    with st.expander('HOBO', expanded=True):
        st.markdown('One of the main features. The CLI can upload your HOBO measurements, metadata and quality controlled data into your database. Data is available from winter Term 2018 on, quality checked data from term 2019.')

        exhl, exhr = st.columns((9, 1))
        exhl.code('# Upload all from 3 terms\npython -m hydenv examples hobo --terms=[WT,19,WT20,WT21]', language='bash')
        exhl.code('# Upload only metadata\n python -m examples hobo --terms=WT20 --only=metadata')

        hobo_open = exhr.button('OPEN IN GUI', key='open_hobo')
        if hobo_open:
            st.session_state.page_name = 'example_hobo'
            st.experimental_rerun()

    # osm
    with st.expander('OpenStreetMap', expanded=False):
        st.markdown('Hydenv includes some parepared OverpassAPI queries to download infrastructure data from OpenStreetMap.org. These are uploaded into the database, using a slightly different schema.')

        osmr, osml  = st.columns((9, 1))
        osmr.code('# Download OSM city districts\npython -m hydenv examples osm city-districts --city=FR', language='bash')

        osm_open = osml.button('OPEN IN GUI', key='open_osm')
        if osm_open:
            st.session_state.page_name = 'example_osm'
            st.experimental_rerun()
    
    # earthquake
    with st.expander('EARTHQUAKES', expanded=False):
        st.markdown('The earthquake dataset can be used for the exercises. It can upload the raw dataset, or add a normalized version of it.')

        # raw command
        eel1, eer1 = st.columns((9, 1))
        eel1.code('# Upload raw earthquake data\npython -m hydenv examples earthquake', language='bash')
        run_raw = eer1.button('RUN HERE', key='run_raw')
        if run_raw:
            api = HydenvExamples(connection=db.unsafe_get_connection)
            api.earthquake(normalize=False)
            st.success('Successfully uploaded raw earthquake data.')
        
        # normalized command
        eel2, eer2 = st.columns((9, 1))
        eel2.code('# Upload normalized earthquake data\npython -m hydenv examples earthquake --normalize', language='bash')
        run_norm = eer2.button('RUN HERE', key='run_norm')
        if run_norm:
            api = HydenvExamples(connection=db.unsafe_get_connection)
            api.earthquake(normalize=True)
            st.success('Successfully uploaded normalized earthquake data.')
    
    # Netatmo
    with st.expander('Netatmo', expanded=False):
        st.markdown('Hydenv includes a API to download Netatmo weather data. You don\'t need a Netatmo account to use the API. A passphrase will be distributed in course, to use the hydrocode account internally.')
        st.warning('The API only allows the download into a file. Database upload is not yet implemented')

        netl, netr = st.columns((9, 1))
        netl.code('# Download Netatmo data dump into local file\npython -m hydenv examples netatmo get-data --password=<password> --bbox=[49.042909,8.486009,48.985286,8.309699] >> ./ka_dump.json', language='bash')
        netl.code('# Parse the dump created above\npython -m hydenv examples netatmo parse --load=./ka_dump.json --use_type=temperature --fmt=markdown >> temperature.md', language='bash')
        run_netatmo = netr.button('OPEN IN GUI', key='run_netatmo')
        if run_netatmo:
            st.session_state.page_name = 'example_netatmo'
            st.experimental_rerun()

    st.stop()


def event(event_name: str, *args, **kwargs):
    # ger the measurementId
    measurementId = st.session_state.get('measurementId')
    if measurementId is None:
        if st.session_state.get('debug', False):
            print('[Tracker] No measurementId found')
        return

    # get the clientId
    clientId = st.session_state.get('clientId')
    if clientId is None:
        clientId = ''.join(choice(ascii_letters) for _ in range(16))
        st.session_state.clientId = clientId
    
    # do the request
    with HTTPRequest() as http:
        tracker = Tracker(measurementId, http)
        tracker.send(event_name, *args, **kwargs)
        if st.session_state.get('debug', False):
            print(f"[Tracker] Event sent: {event_name} - Payload: {' '. join(args)} {' '.join([f'{k}={v}' for k,v in kwargs.items()])}")


def pageview():
    if'last_page' not in st.session_state:
        st.session_state.last_page = 'none'
    
    # get the current and the last page
    current_page = st.session_state.page_name
    last_page = st.session_state.last_page

    if current_page != last_page:
        # send the pageview
        event('pageview', path=f"/{current_page}", last_page=last_page, title=current_page.capitalize())
        st.session_state.last_page = current_page


def main_app(connection=None, measurementId="G-RLF2LDRQSR", debug=False):
    st.set_page_config(page_title="Excercises by hydrocode", layout="wide")
    
    # hydrocode branding
    l, r = st.sidebar.columns((1,4))
    l.image('https://firebasestorage.googleapis.com/v0/b/hydrocode-website.appspot.com/o/public%2Flogo.png?alt=media&token=8dda885c-0a7d-4d66-b5f6-072ddabf3b02', use_column_width=True)
    r.title('hydrocode powered')
    # set the measurementId
    if 'measurementId' not in st.session_state:
        st.session_state.measurementId = measurementId
    
    if 'debug' not in st.session_state:
        st.session_state.debug = debug

    # check if there is need for install
    db = get_db_con()

    # checkout the app page
    page_name = st.session_state.get('page_name')
    if page_name is None:
        st.session_state.page_name = 'home'
        page_name = 'home'
    # pageview event
    pageview()

    # back button
    if st.session_state.get('connection', False) and page_name != 'home':
        back = st.sidebar.button('Back GUI overview')
        if back:
            st.session_state.page_name = 'home'
            st.experimental_rerun()
    
    # check if a table tree was loaded
    if 'table_tree' in st.session_state:
        st.sidebar.markdown('### DATABASE TABLES')
        st.sidebar.json(st.session_state.table_tree)

    if page_name == 'home':
        home_page(db)
    elif page_name == 'exercise':
        # load the list of solved exercises
        load_solved_list()
        
        # get the tracks and select the exercise
        tracks = get_base_data()
        exercise = manage_session(tracks)

        exercise_page(tracks, db)
    elif page_name == 'install':
        install_page()
    
    elif page_name.startswith('example_'):
        example_page(db)


if __name__ == "__main__":
    import fire
    fire.Fire(main_app)
