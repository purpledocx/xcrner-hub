# xcrner-hub

<div align="center">
  <a href="https://python.org" target="_blank"><img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" /></a>
  <a href="https://fastapi.tiangolo.com/" target="_blank"><img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" /></a>
  <a href="https://react.dev/" target="_blank"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="https://vitejs.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
  <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
</div>

## Tech stack

| Layer | Stack |
| --- | --- |
| Frontend | React 19, React Router, Vite, Tailwind CSS, Lucide icons |
| Backend | Python 3.10+, FastAPI, Uvicorn, Pydantic |
| Tooling | npm, Node.js, Git |

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/purpledocx/xcrner-hub.git
cd xcrner-hub
```

### 2. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 3. Start the backend

```bash
cd backend
uvicorn main:app --reload
```

The backend is exposed at `http://127.0.0.1:8000`.

### 4. Install frontend dependencies

```bash
cd xcrner-hub
npm install
```

### 5. Run the frontend

```bash
cd xcrner-hub
npm run dev
```

Then open the local URL reported by Vite, typically `http://localhost:5173`.

## Production build

A real build has been verified with:

```bash
cd xcrner-hub
npm run build
```

Evidence from the current workspace run:

- Vite built successfully in `702ms`
- Output included the generated `dist` assets for the SPA

```text
xcrner-hub/
├── backend/
│   └── main.py            # FastAPI app and /analyze endpoint
├── xcrner-hub/
│   ├── src/
│   │   ├── App.jsx        # Router and page wiring
│   │   ├── pages/         # Home, Projects, Stuff, Password Analyzer
│   │   └── components/    # Header and Footer navigation
│   └── package.json       # Frontend dependencies and scripts
└── README.mdx             # Project documentation
```
| Path | Purpose |
| --- | --- |
| `backend/main.py` | FastAPI server entry point and password analysis logic |
| `backend/requirements.txt` | Backend Python dependency list |
| `xcrner-hub/src/App.jsx` | Top-level routing and layout composition |
| `xcrner-hub/src/pages/` | All primary UI views |
| `xcrner-hub/src/components/` | Shared page chrome such as header and footer |
| `xcrner-hub/package.json` | Frontend scripts, dependencies, and build metadata |
| `xcrner-hub/vite.config.js` | Vite configuration with React and Tailwind integration |

### `POST /analyze`

The analyzer endpoint accepts a JSON payload containing a password and returns a strength assessment.

#### Request

```json
{
  "password": "MySecretPassword123"
}
```

#### Response

```json
{
  "strength": "Strong",
  "entropy": "76 bits",
  "progress": 100,
  "color": "#10b981",
  "suggestions": ["Great and secure password!"]
}
```

## Usage example

```jsx
const result = await fetch('http://127.0.0.1:8000/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ password: 'MySecretPassword123' }),
});

const data = await result.json();
console.log(data);
```

## Contact
For questions or refinements, the currently visible project contact point is the GitHub profile linked in the footer component of the frontend.
