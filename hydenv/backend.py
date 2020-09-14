import os
import json
from datetime import datetime as dt

from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import create_engine

from hydenv.util.json import sqlencoder

app = Flask(__name__)
CORS(app)

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
    if sql is None:
        return jsonify({'message': 'No SQL query given.'}), 404
    
    # enable safe mode
    if safe:
        sql = sql.split(';')[0]
        if not sql.lower().startswith('select'):
            return jsonify({'In safe mode, only SELECT queries are allowed'}), 403

    # run 
    engine = create_engine(app.config['DB_URI'])
    with engine.connect() as con:
        t2 = dt.now()
        try:
            res = con.execute(sql)
        except Exception as e:
            return jsonify({
                'message': 'Run errored!',
                'params': data,
                'error': True,
                'data': [dict(errorMessage=str(e))]
            }, )
        t3 = dt.now()

    return jsonify({
        'message': 'Run successful',
        'params': data,
        'data': [{k: sqlencoder(v) for k,v in r.items()} for r in res],
        'perf': dict(
            backendTime=(t3 - t2).total_seconds(), 
            executionTime=(t3 - t1).total_seconds()
        )
    })


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