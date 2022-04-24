import json
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask_pymongo import PyMongo
import random
from board_maker import board_maker

app = Flask(__name__)
app.config["SECRET_KEY"] = "helloCS-361"

mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/sudoku")
db = mongodb_client.db


@app.route("/", methods=["GET"])
def home_page_unchecked():
    return render_template("main.html")


@app.route("/new_game", methods=["GET"])
def new_game_get():
    return render_template("main.html")

@app.route("/new_game", methods=["POST"])
def new_game_post():
    checkbox = request.form.get('checkbox')
    new_game = request.form.get('new_game')
    #with open('../files/button_receiver.txt', 'w') as file:
    #    file.write("new_game")
    puzzle_id = random.randint(1, 1000)
    puzzle = board_maker()
    db.boards.insert_one({'puzzle_id': puzzle_id, 'puzzle': puzzle})

    if checkbox == "1":
        # with open('files/button_receiver.txt', 'w') as file:
        # file.write("toggle-on")
        return render_template("new_game.html", check_val="0", src="../static/images/checkbox.png")
    # elif checkbox == "0":
    # with open('files/button_receiver.txt', 'w') as file:
    # file.write("toggle-off")

    # if new_game == "1":
    #    with open('files/button_receiver.txt', 'w') as file:
    #        file.write("new_game")
    # else:
    #    with open('files/button_receiver.txt', 'w') as file:
    #        file.write("")
    return render_template("new_game.html", check_val="1", src="../static/images/checkbox_unchecked.png")




if __name__ == "__main__":
    app.run(debug=True,port=5000)
