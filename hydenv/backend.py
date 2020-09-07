

def run(request):
    # first get the data
    data = request.json if request.json else {}
    data.update(request.args)

    if 'ping' in data:
        return ('I am here', 200, {})

    # look for an exercise identifier
    exercise_id = data.get('exercise')
    exercise_sql = data.get('sql')

#    if exercise_id is None:
#        return ({'message': 'No exercise id was passed'}, 404, {})
    if exercise_sql is None:
        return ({'message': 'No SQL to execute was found.'}, 404, {})

    return {
        'message': 'I am fine',
        'data': data
    }