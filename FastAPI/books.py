# Python + FastAPI Project
# March 3-4, 2023
# Books app
# https://www.youtube.com/watch?v=MCVcAAoDJS8 (FastAPI setup)
# https://www.youtube.com/watch?v=34jQRPssM5Q (FastAPI + SQLite)

# Built-in FastAPI docs
# http://127.0.0.1:8000/docs#/

# Import Modules
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel, Field
from uuid import UUID
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

# Set up FastAPI app
app = FastAPI()
models.Base.metadata.create_all(bind=engine)

# Methods
def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

# Create models
class Book(BaseModel):
    title: str = Field(min_length=1)
    author: str = Field(min_length=1, max_length=100)
    description: str = Field(min_length=1, max_length=100)
    rating: int = Field(gt=-1, lt=101)

# Start up app in terminal with command below
# uvicorn books:app --reload

# FastAPI routes
@app.get("/")
def read_api(db: Session = Depends(get_db)):
    return db.query(models.Books).all()

@app.post("/")
def create_book(book: Book, db: Session = Depends(get_db)):
    book_model = models.Books()
    book_model.title = book.title
    book_model.author = book.author
    book_model.description = book.description
    book_model.rating = book.rating

    db.add(book_model)
    db.commit()

    return book

@app.put("/{book_id}")
def update_book(book_id: int, book: Book, db: Session = Depends(get_db)):
    book_model = db.query(models.Books).filter(models.Books.id == book_id).first()

    if book_model is None:
        return HTTPException(
            status_code=404,
            detail=f"ID {book_id} does not exist!"
        )

    book_model.title = book.title
    book_model.author = book.author
    book_model.description = book.description
    book_model.rating = book.rating

    db.add(book_model)
    db.commit()

    return book

@app.delete("/{book_id}")
def delete_book(book_id: int, db: Session = Depends(get_db)):
    book_model = db.query(models.Books).filter(models.Books.id == book_id).first()

    if book_model is None:
        return HTTPException(
            status_code=404,
            detail=f"ID {book_id} does not exist!"
        )

    db.query(models.Books).filter(models.Books.id == book_id).delete()
    db.commit()