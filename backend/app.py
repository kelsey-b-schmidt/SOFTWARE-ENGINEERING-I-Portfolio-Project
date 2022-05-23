from flask import Flask, request
import requests
from board_maker import *

app = Flask(__name__)

solved_board = []
unsolved_board = []

def create_board(difficulty):
    global solved_board
    global unsolved_board
    solved_board = generate_board()
    unsolved_board = remove_spaces(solved_board, difficulty)

@app.route("/board", methods = ["GET"])
def get_board():
    global solved_board
    global unsolved_board
    while solved_board == []:
        create_board("easy")
    return {"solved_board": solved_board, "unsolved_board": unsolved_board}

@app.route("/board", methods = ["POST"])
def new_board():
    difficulty = request.json["difficulty"]
    global solved_board
    global unsolved_board
    solved_board = []
    unsolved_board = []
    create_board(difficulty)
    return {"solved_board": solved_board, "unsolved_board": unsolved_board}



if __name__ == "__main__":
    app.run(host="127.0.0.1", debug=True, port=5000, threaded=True)