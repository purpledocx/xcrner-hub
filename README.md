# 🌐 xcrner-hub & Tools
**Personal web hub featuring a portfolio and a real-time password strength analyzer**
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)

---
## 📌 About The Project
**xcrner-hub** is a personal multi-page website/archive hub that combines a personal profile, project showcase, and interactive web tools. 
---
## 🛠️ Tech Stack
| Domain | Technologies |
| --- | --- |
| **Backend** | Python 3.10+, FastAPI, Uvicorn, Pydantic |
| **Frontend** | HTML5, JavaScript (Vanilla ES6+), Tailwind CSS v3 |
| **Tools** | Node.js, npm, Git |

---
## 🚀 Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/purpledocx/xcrner-hub.git
cd xcrner-hub
```

### 2. Backend Setup (FastAPI)
In the first terminal window, start the Python backend server:
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run Uvicorn server from the root directory
uvicorn backend.main:app --reload
```
> 📍 Backend will be available at: `http://127.0.0.1:8000`

### 3. Frontend Setup (Tailwind CSS)
In a **second terminal window**, compile Tailwind styles in watch mode:
```bash
# Install Node.js dependencies
npm install

# Run Tailwind CSS compiler
npx tailwindcss -i input.css -o ./src/output.css --watch
```

### 4. View in Browser
Open `index.html` or `pwdanalyzer.html` directly in your browser (or use the **Live Server** extension in VS Code).

---
## 🔌 API Endpoint
### `POST /analyze`
Accepts password input and returns UI formatting parameters along with strength analysis.
**Request:**
```json
{
  "password": "MySecretPassword123"
}
```
**Response (200 OK):**
```json
{
  "strength": "Strong",
  "entropy": "76 bits",
  "progress": 100,
  "color": "#10b981",
  "suggestions": [
    "Great and secure password!"
  ]
}
```

---
Made by [purpledocx](https://github.com/purpledocx)