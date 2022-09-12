from flask import Flask, request, make_response
from flask_restful import Resource, Api
from utils import verification, list_to_dict, create_token, check_token
import bcrypt
from connect_db import connect
from middle_where import middle_where


class Profil(Resource):
    def get(self):
        user = middle_where(request)
        if user:
            db = connect()
            query = f"""
                        SELECT nom, prenom, email FROM user WHERE id = {user["id"]};
                    """
            d = None
            with db.cursor() as c:
                c.execute(query)
                data = c.fetchall()
                d = list_to_dict(["nom", "prenom", "email"], data[0])
                db.close()
                return {"user": d}
        else:
            return make_response({"message": "invalid token"}, 401)
    