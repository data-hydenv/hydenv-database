import os

from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import create_engine

app = Flask(__name__)
CORS(app)

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({'message': 'I an here'}), 200


@app.route('/execute', methods=['GET'])
def execute():
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
        res = con.execute(sql)

    return jsonify({
        'message': 'Run successful',
        'data': data,
        'result': [dict(r) for r in res]
    })


def run(db_uri, debug=False, port=5000):
    """
    Hydenv Exercise backend server\n
    For local execution of exercises. Usually, the exercise 
    CLI starts the backend and you don't need to start it 
    manually. However, you have more control over the server, but 
    you need to start it before you start the exercises.
    """
    app.config['DB_URI'] = db_uri
    app.run(debug=debug, port=port)


if __name__=='__main__':
    import fire
    fire.Fire(run)