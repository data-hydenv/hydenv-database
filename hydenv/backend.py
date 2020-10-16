import os
import json
from datetime import datetime as dt

from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from sqlalchemy import create_engine

from hydenv.util.json import sqlencoder
from hydenv.database import HydenvDatabase

app = Flask(__name__)
CORS(app)


@app.route('/<path:path>', methods=['GET'])
def static_files(path: str):
    if path.endswith('js'):
        return send_from_directory('./exercises-js/', path, mimetype='application/javascript')
    return send_from_directory('./exercises-js/', path)

@app.route('/')
def index():
    return send_from_directory('./', 'index.html')

@app.route('/api/v1/ping', methods=['GET'])
def ping():
    return jsonify({'message': 'I an here'}), 200


@app.route('/api/v1/execute', methods=['GET'])
def execute():
    t1 = dt.now()
    # get passed data
    data = request.json if request.json else {}
    data.update(request.args)

    # get SQL query
    safe = data.get('safe', True)
    sql = data.get('sql')
    explain = data.get('explain', False)
    if sql is None:
        return jsonify({'message': 'No SQL query given.'}), 404
    
    # build the CLI
    cli = HydenvDatabase(connection=app.config['DB_URI'])

    # run
    t2 = dt.now()
    try:
        res = cli.execute(sql=sql, safe=safe, json=True)
    except Exception as e:
        return jsonify({
                'message': 'Run errored!',
                'params': data,
                'error': True,
                'data': [dict(errorMessage=str(e))]
            }, )

    t3 = dt.now()
    
    # build response object
    response = {
        'message': 'Run successful',
        'params': data,
        'data': [{k: sqlencoder(v) for k,v in r.items()} for r in res],
        'perf': dict(
            backendTime=(t3 - t2).total_seconds(), 
            executionTime=(t3 - t1).total_seconds()
        )
    }

    # run explain if needed
    if explain:
        # get the format
        if explain not in ['text', 'json', 'xml', 'yaml']:
            fmt = 'text'
        else:
            fmt = explain
        try:
            exp_text = cli.explain(sql=sql, fmt=fmt)
        except Exception as e:
            exp_text = str(e)
        response['explain'] = exp_text
    
    # return
    return jsonify(response)



@app.route('/api/v1/explain', methods=['GET'])
def explain():
    data = request.json if request.json else {}
    data.update(request.args)

    # get SQL query and params
    full = data.get('full', False)
    fmt = data.get('format', data.get('fmt', 'json'))
    sql = data.get('sql')
    if sql is None:
        return jsonify({'message': 'No SQL query given.'}), 404
    
    # run the CLI
    cli = HydenvDatabase(connection=app.config['DB_URI'])
    exp = cli.explain(sql=sql, fmt=fmt, full=full)

    # return
    if fmt == 'json':
        return jsonify(exp)
    else:
        return exp




def run(db_uri, debug=False, port=5000, host='localhost'):
    """
    Hydenv Exercise backend server\n
    For local execution of exercises. Usually, the exercise 
    CLI starts the backend and you don't need to start it 
    manually. However, you have more control over the server, but 
    you need to start it before you start the exercises.
    """
    app.config['DB_URI'] = db_uri
    app.run(debug=debug, port=port, host=host)


if __name__=='__main__':
    import fire
    fire.Fire(run)