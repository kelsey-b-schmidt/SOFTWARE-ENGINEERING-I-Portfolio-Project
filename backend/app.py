from flask import Flask, request
from datetime import datetime
import time
import json
import random
import requests
from board_maker import board_maker

app = Flask(__name__)

message = []

def create_board():
    global message
    try:
        message = board_maker()
    except:
        pass
    return message

@app.route("/board", methods = ["GET"])
def get_board():
    global message
    while message == []:
        create_board()
    return {"message": message}

@app.route("/board", methods = ["POST"])
def new_board():
    create_board()
    return {"message": message}


if __name__ == "__main__":
    app.run(host="127.0.0.1", debug=True, port=5000, threaded=True)