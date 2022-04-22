from flask import Blueprint
from flask import render_template
from flask import jsonify
from flask import request
from flask import flash


views = Blueprint("views", __name__)

@views.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        checkbox = request.form.get('checkbox')
        if checkbox == "1":
            return render_template("toggle.html")
        new_game = request.form.get('new_game')
        if new_game == "1":
            return render_template("new_game.html")
    return render_template("main.html")

@views.route("/json")
def get_json():
    return jsonify({"name": "tim"})

@views.route("/data")
def get_data():
    data = request.json
    return jsonify(data)
