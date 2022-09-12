from flask import Flask, send_from_directory
from flask_restful import Api
from signup import Signup
from login import Login
from profil import Profil
from velib_pos import VelibPos
from flask_cors import CORS

app = Flask(__name__, static_folder='public', static_url_path='')

CORS(app)

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

api = Api(app)

api.add_resource(Signup, '/api/signup')
api.add_resource(Login, '/api/login')
api.add_resource(Profil, '/auth/profil')
api.add_resource(VelibPos, '/auth/positions')

@app.route('/')
def main():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html'), 404

if __name__=="__main__":
    app.run(debug=True)