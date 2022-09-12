from flask import request, make_response
from flask_restful import Resource
from utils import verification, register_user


class Signup(Resource):
    def post(self):
        user = request.get_json()
        email_exist = verification('email', user["email"])
        if email_exist:
            return make_response({"message": "Cette adresse email est déjà utilisé"}, 400)
        else:
            if len(user["mdp"]) < 5:
                return make_response({"message": "Mot de passe trop court"}, 400)
            if len(user["nom"]) < 2 or len(user["nom"]) > 30:
                return make_response({"message": "Nom trop court"}, 400)
            if len(user["prenom"]) < 2 or len(user["nom"]) > 30:
                return make_response({"message": "Prenom trop court"}, 400)
            register_user(user)
            return make_response({"message": "Utilisateur enregistré !"}, 201)