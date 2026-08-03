from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

class PasswordModel(BaseModel):
    password: str

@app.post('/analyze')
def analyze(data: PasswordModel):
    pwd = data.password
    length = len(pwd)

    strength = "Waiting..."
    color = "#a855f7"
    score = 0
    suggestions = []

    if not pwd:
        return {
            "strength": strength,
            "entropy": "0 bits",
            "progress": 0,
            "color": color,
            "suggestions": ["Start typing to see suggestions..."]
        }

    if length >= 8:
        score += 40
    else:
        suggestions.append("Make it at least 8 characters long")
        
    if any(c.isdigit() for c in pwd):
        score += 30
    else:
        suggestions.append("Add at least one digit")
        
    if any(c.isupper() for c in pwd) and any(c.islower() for c in pwd):
        score += 30
    else:
        suggestions.append("Use both uppercase and lowercase letters")

    if score < 50:
        strength = "Weak"
        color = "#f43f5e"
    elif score < 90:
        strength = "Medium"
        color = "#f59e0b"
    else:
        strength = "Strong"
        color = "#10b981"
        if not suggestions:
            suggestions.append("Great and secure password!")

    return {
        "strength": strength,
        "entropy": f"{length * 4} bits",
        "progress": score,
        "color": color,
        "suggestions": suggestions
    }