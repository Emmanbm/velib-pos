from datetime import datetime, timedelta
from connect_db import connect
import bcrypt
import jwt

key_word = "hippopotomonstrosesquippedaliophobie"

def list_to_dict(liste1, liste2):
    d = {}
    for i in range(len(liste1)):
        d[liste1[i]] = liste2[i]
    return d

def verification(cle, valeur):
    db = connect()
    d = None
    with db.cursor() as c:
        c.execute(
            "SELECT * FROM user;"
        )
        data = c.fetchall()
        for i in data:
            d = list_to_dict(
                ["id", "nom", "prenom", "mdp", "email"], 
                i)
            if d[cle] == valeur:
                db.close()
                return True

    db.close()
    return False

def register_user(user):
    db = connect()
    query = """
        INSERT INTO user(nom, prenom, mdp, email) VALUE (%s, %s, %s, %s)
    """
    mdp = bcrypt.hashpw(str(user["mdp"]).encode(), bcrypt.gensalt(14))

    list_data = (user["nom"], 
                user["prenom"],
                mdp,
                user["email"])
    curseur = db.cursor()
    curseur.executemany(query, [list_data])
    db.commit()
    print(curseur.rowcount, "Données enregistrées")
    db.close()

def create_token(dico):
    timestamp = datetime.timestamp(datetime.now() + timedelta(days=2))
    encoded_jwt = jwt.encode({**dico, "exp": timestamp}, key_word, algorithm="HS256")
    return encoded_jwt.decode(encoding="utf-8")

def check_token(token_user):
    try:
        return jwt.decode(token_user, key_word, algorithms=["HS256"])
    except:
        return None
        
def filtre(user_position, liste):
    new_list = list(liste)
    distances_list = []
    final_list = []
    distances_dict = {}
    for i in new_list:
        distance = ((user_position[0] - i['geo'][0])**2 + (user_position[1] - i['geo'][1])**2) ** 0.5
        distances_list.append(distance)
        distances_dict[distance] = i

    distances_list.sort()
    for i in range(50):
        final_list.append(distances_dict[distances_list[i]])

    return final_list