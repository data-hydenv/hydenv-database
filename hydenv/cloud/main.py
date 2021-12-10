from netatmo import authenticate
import os

def get_token(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    if request_json is None or not request_json.get('password', False):
        return {'error': 'No password provided'}, 400
    
    # check if password is given
    passw = os.environ['PASSWORD']
    if request_json['password'] != passw:
        return {'error': 'Wrong password'}, 401
    
    # else get a token
    try:
        token = authenticate()
        return token
    except Exception as e:
        return {'error': str(e)}, 500
