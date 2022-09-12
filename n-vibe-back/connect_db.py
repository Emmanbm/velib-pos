import mysql.connector
import json

def connect():
    config = None
    with open('config.json', 'r') as file:
        config = json.load(file)
    db = mysql.connector.connect(**config)
    return db