from flask import request, make_response
from flask_restful import Resource
from utils import verification, list_to_dict, create_token
import bcrypt
from connect_db import connect


class Login(Resource):
    def post(self):
        user = request.get_json()
        field = None
        for k in user:
            if k in ["email"]:
                field = k
        exists = verification(field, user[field])
        db = connect()
        if exists: 
            query = f"""
                        SELECT id, mdp FROM user WHERE {field} = '{user[field]}';
                    """
            d = None
            with db.cursor() as c:
                c.execute(query)
                data = c.fetchall()
                d = list_to_dict(["id", "mdp"], data[0])
                hack_mdp = d["mdp"]
                user_mdp = user["mdp"]
                value = bcrypt.checkpw(user_mdp.encode(encoding="utf-8"), hack_mdp.encode(encoding="utf-8"))
                db.close()
                if value:
                    token_user = create_token(d)
                    return {"message": "Utilisateur trouvé", "token": token_user}
                else:
                    return make_response({"message": "Mot de passe incorrect"}, 401)
        else:
            db.close()
            return make_response({"message": "Utilisateur non trouvé!"}, 404)