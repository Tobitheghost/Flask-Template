from flask import render_template, Blueprint


home = Blueprint("home", __name__, url_prefix="/")

@home.route('/')
def homepage():
    return render_template("home.html", page_name="home")