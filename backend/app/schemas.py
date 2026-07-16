from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = "No Subject"
    message: str

class ContactMessageResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime

    class Config:
        from_attributes = True
