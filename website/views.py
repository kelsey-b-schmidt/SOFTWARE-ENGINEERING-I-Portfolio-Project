from flask import Blueprint
from flask import render_template
from flask import request

views = Blueprint("views", __name__)

@views.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        checkbox = request.form.get('checkbox')
        print("checkbox", checkbox)
        if checkbox == "1":
            with open('files/testing.txt', 'w') as file:
                file.write("toggle-on")
            return render_template("main.html", check_val="0", src="static/images/checkbox.png")
        elif checkbox == "0":
            with open('files/testing.txt', 'w') as file:
                file.write("toggle-off")

        new_game = request.form.get('new_game')
        if new_game == "1":
            with open('files/testing.txt', 'w') as file:
                file.write("new_game")
    else:
        with open('files/testing.txt', 'w') as file:
            file.write("")

    return render_template("main.html", check_val="1", src="static/images/checkbox_unchecked.png")

#@views.route("/json")
#def get_json():
#    return jsonify({"name": "tim"})

#@views.route("/data")
#def get_data():
#    data = request.json
#    return jsonify(data)
