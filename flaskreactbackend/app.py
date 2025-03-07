# Import modules
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bootstrap import Bootstrap
from flask_cors import CORS
import datetime

# Set up Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'FlaskReact'
CORS(app)
Bootstrap(app)

# Connect to Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///articles.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Configure Article table in database
class Article(db.Model):
    __tablename__ = 'articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body

# Configure Article serializer
class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'date')

# Serializer vars
article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)

# Make the database -> comment out when done
# db.create_all()

# Routes
@app.route('/get', methods = ['GET'])
def get_articles():
    all_articles = Article.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    article = Article.query.get(id)
    return article_schema.jsonify(article)

@app.route('/add', methods = ['POST'])
def add_article():
    title = request.json['title']
    body = request.json['body']

    new_article = Article(title, body)
    db.session.add(new_article)
    db.session.commit()

    return article_schema.jsonify(new_article)

@app.route('/update/<id>/', methods = ['PUT'])
def update_article(id):
    article = Article.query.get(id)

    title = request.json['title']
    body = request.json['body']

    article.title = title
    article.body = body

    db.session.commit()
    return article_schema.jsonify(article)

@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_article(id):
    article = Article.query.get(id)
    db.session.delete(article)
    db.session.commit()

    return article_schema.jsonify(article)

# Run app
if __name__ == '__main__':
    app.run(debug=True)
