from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path

SQLALCHEMY_TRACK_MODIFICATIONS = False

db = SQLAlchemy()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "helloCS-361"
    app.config["SQLALCHEMY_DATABASE_URI"] = f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    from website.views import views
    app.register_blueprint(views, url_prefix="/")

    import website.models

    create_database(app)

    return app

def create_database(app):
    if not path.exists("website/" + DB_NAME):
        db.create_all(app=app)
        print("created database!")