# Import modules
from flask import Flask
from flask_cors import CORS
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy

# Set up Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'harrypotterravenclaw'
CORS(app)
Bootstrap(app)

# Connect to Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Make the database -> comment out when done
# db.create_all()

# Flask routes
@app.route("/")
def home():
    return "My API!"