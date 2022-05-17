from flask import Flask
import requests
from board_maker import board_maker

app = Flask(__name__)

current_board = []

def create_board():
    global current_board
    try:
        current_board = board_maker()
    except:
        pass

@app.route("/board", methods = ["GET"])
def get_board():
    global current_board
    while current_board == []:
        create_board()
    return {"current_board": current_board}

@app.route("/board", methods = ["POST"])
def new_board():
    global current_board
    current_board = []
    while current_board == []:
        create_board()
    return {"current_board": current_board}




if __name__ == "__main__":
    app.run(host="127.0.0.1", debug=True, port=5000, threaded=True)