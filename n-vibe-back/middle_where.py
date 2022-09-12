from flask import Flask, Request, make_response
from utils import check_token

def middle_where(requete):
    headers = requete.headers['Authorization']
    token_user = headers[7:]
    user = check_token(token_user)
    if user:
        return user
    else:
        return False