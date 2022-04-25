import json
from flask import Flask
from flask import render_template
from flask import request
from flask import jsonify
from flask_pymongo import PyMongo


connection_port = 5000
app = Flask(__name__)
app.config["SECRET_KEY"] = "helloCS-361"

mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/sudoku")
db = mongodb_client.db


@app.route("/", methods=["POST"])
def main_page():
    todo_data = request.get_json()
    return 'Done', 201



if __name__ == "__main__":
    app.run(debug=True,port=connection_port)
