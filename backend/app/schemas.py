from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

from .database import engine, Base, get_db
from .models import ContactMessage
from .schemas import ContactMessageCreate, ContactMessageResponse
from .data import PORTFOLIO_DATA

# Initialize database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="IT Graduate Portfolio API",
    description="Backend API serving portfolio data and handling contact submissions",
    version="1.0.0"
)

# Configure CORS (allow React frontend)
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Welcome to the Portfolio API. Access the API documentation at /docs",
        "endpoints": {
            "portfolio": "/api/portfolio",
            "contact": "/api/contact",
            "messages": "/api/messages"
        }
    }

@app.get("/api/portfolio")
def get_portfolio():
    return PORTFOLIO_DATA

@app.post("/api/contact", response_model=ContactMessageResponse, status_code=status.HTTP_201_CREATED)
def create_contact_message(message: ContactMessageCreate, db: Session = Depends(get_db)):
    try:
        db_message = ContactMessage(
            name=message.name,
            email=message.email,
            subject=message.subject,
            message=message.message
        )
        db.add(db_message)
        db.commit()
        db.refresh(db_message)
        return db_message
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while saving the message: {str(e)}"
        )

@app.get("/api/messages", response_model=List[ContactMessageResponse])
def get_contact_messages(db: Session = Depends(get_db)):
    try:
        messages = db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()
        return messages
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while retrieving messages: {str(e)}"
        )
