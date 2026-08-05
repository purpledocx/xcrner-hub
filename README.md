<div align="center">

# 🚀 Xcrner Hub

### A modern security toolkit built with **React + FastAPI**

<p align="center">
A centralized platform providing powerful security and networking utilities, including an advanced Password Analyzer and a high-performance Network Port Scanner.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

</div>

---

# 📖 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚙ Installation](#-installation)
- [🚀 Running the Project](#-running-the-project)
- [🔌 API Reference](#-api-reference)
- [💻 Usage Examples](#-usage-examples)
- [🏗 Production Build](#-production-build)
- [📬 Contact](#-contact)

---

# ✨ Features

### 🔐 Password Analyzer

- Real-time password strength analysis
- Entropy calculation
- Security recommendations
- Color-coded strength meter
- Instant feedback

---

### 🌐 Network Port Scanner

- Fast TCP port scanning
- Scan custom port lists
- Detect open and closed ports
- Lightweight FastAPI implementation
- Responsive frontend interface

---

### ⚡ Modern Web Application

- React 19 + Vite
- Tailwind CSS UI
- FastAPI backend
- Asynchronous API endpoints
- Clean project architecture

---

# 🛠 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React 19 • React Router • Vite • Tailwind CSS • Lucide Icons |
| **Backend** | Python 3.10+ • FastAPI • Uvicorn • Pydantic |
| **Tooling** | npm • Node.js • Git |

---

# 📂 Project Structure

```text
xcrner-hub/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── xcrner-hub/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   └── components/
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/xcrner-hub.git
cd xcrner-hub
```

---

## Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Start the FastAPI server.

```bash
uvicorn main:app --reload
```

The backend will run at:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

Navigate to the frontend.

```bash
cd xcrner-hub
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 🚀 Running the Project

| Service | URL |
|---------|------|
| Frontend | http://localhost:5173 |
| Backend | http://127.0.0.1:8000 |
| API Docs | http://127.0.0.1:8000/docs |

---

# 🔌 API Reference

## POST `/analyze`

Analyze password strength.

### Request

```json
{
  "password": "MySecretPassword123"
}
```

### Response

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

## POST `/scan`

Scan a target host for open ports.

### Request

```json
{
  "target": "127.0.0.1",
  "ports": [22, 80, 443, 8000]
}
```

### Response

```json
{
  "target": "127.0.0.1",
  "results": [
    {
      "port": 22,
      "status": "closed"
    },
    {
      "port": 80,
      "status": "closed"
    },
    {
      "port": 443,
      "status": "closed"
    },
    {
      "port": 8000,
      "status": "open"
    }
  ],
  "scan_duration_ms": 142
}
```

---

# 💻 Usage Examples

## Password Analyzer

```javascript
const checkPassword = async () => {
  const response = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: "MySecretPassword123",
    }),
  });

  const data = await response.json();
  console.log(data);
};
```

---

## Port Scanner

```javascript
const scanNetwork = async () => {
  const response = await fetch("http://127.0.0.1:8000/scan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      target: "127.0.0.1",
      ports: [8000, 5173],
    }),
  });

  const data = await response.json();
  console.log(data);
};
```

---

# 🏗 Production Build

Generate an optimized frontend build.

```bash
cd xcrner-hub
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

# 📬 Contact

If you have questions, suggestions, or improvements, feel free to open an issue or reach out through your GitHub profile.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

Made with ❤️ using **React**, **FastAPI**, and **Tailwind CSS**

</div>
````
