import glob
import os
import json
import hashlib
import time
from datetime import datetime as dt
from datetime import timedelta as td
from random import choice
from string import ascii_letters

import streamlit as st
import extra_streamlit_components as stx
from streamlit_ace import st_ace, THEMES
from universal_analytics import Tracker, HTTPRequest

from hydenv.database import HydenvDatabase

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
    layout = st.sidebar.radio('LAYOUT', options=['split', 'column'])
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
        editor = st.sidebar.expander('EDITOR', expanded=True)
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
    st.markdown('long text')
            
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


def home_page():
    st.title('Hydenv CLI overview')
    st.markdown('All Hydenv CLI endpoints which are implemented are available here. You find a short explanation with the call signature and a link to the GUI, if available.')

    # install
    with st.expander('HYDENV DATABASE', expanded=True):
        st.markdown('Can be used to install new database instance, connect exising ones on the same host or remote and to clean up and re-initialize the database.')
        il, ir = st.columns((9, 1))
        il.code('# install new database\npython -m hydenv database install -i', language='bash')
        il.code('# clean and re-init\npython -m hydenv database init --clean', language='bash')
        iopen = ir.button('OPEN IN GUI', key='open_install')
        if iopen:
            st.session_state.page_name = 'install'
            st.experimental_rerun()
    
    # exercises
    with st.expander('EXERCISES', expanded=True):
        st.markdown('One of the main feature of hydenv-database. You can interactively start SQL exercises, which are tested with your **own database copy** and give you feedback.')
        el, er = st.columns((9, 1))
        el.code('# start exercises\npython -m hydenv exercises start', language='bash')
        eopen = er.button('OPEN IN GUI', key='open_exercises')
        if eopen:
            st.session_state.page_name = 'exercise'
            st.experimental_rerun()
        
        st.markdown('There is also a full-featured web-application, that is currently not developed any further. But it is still available')
        st.code('python -m hydenv exercises start --legacy', language='bash')
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

    if page_name == 'home':
        home_page()
    elif page_name == 'exercise':
        # load the list of solved exercises
        load_solved_list()
        
        # get the tracks and select the exercise
        tracks = get_base_data()
        exercise = manage_session(tracks)

        exercise_page(tracks, db)
    elif page_name == 'install':
        install_page()


if __name__ == "__main__":
    import fire
    fire.Fire(main_app)
