import json
from flask import request, make_response
from flask_restful import Resource
import csv
from middle_where import middle_where
from utils import filtre

class VelibPos(Resource):
    def get(self):
        user = middle_where(request)
        position = request.args.get('position')
        position = [float(i) for i in list(position.split(','))]
        print("--------->", position)
        if user:
            with open('velib-pos.csv') as f:
                reader = csv.DictReader(f, delimiter=";")
                liste = []
                for i in list(reader):
                    i["Description station"] = json.loads(i["Description station"])
                    i["geo"] = [float(i) for i in i["geo"].split(',')]
                    liste.append(i)
                return filtre(position, liste)
        else:
            return make_response({"message": "invalid token"}, 401)