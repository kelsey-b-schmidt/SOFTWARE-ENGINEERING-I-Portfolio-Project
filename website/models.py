from . import db

class Boards(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    row_num = db.Column(db.Integer)
    col1 = db.Column(db.Integer)
    col2 = db.Column(db.Integer)
    col3 = db.Column(db.Integer)
    col4 = db.Column(db.Integer)
    col5 = db.Column(db.Integer)
    col6 = db.Column(db.Integer)
    col7 = db.Column(db.Integer)
    col8 = db.Column(db.Integer)
    col9 = db.Column(db.Integer)
