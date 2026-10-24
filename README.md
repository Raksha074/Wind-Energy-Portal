# Gridbricks UK Wind Energy Portal

A production-grade, full-stack web application developed for the Gridbricks take-home assessment. This platform provides real-time visualization and quantitative evaluation of UK day-ahead wind power generation actuals (`FUELHH`) and forecasts (`WINDFOR`) for January 2026.

## 🚀 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS, Recharts, Axios
- **Backend:** Python, FastAPI, Uvicorn, Pandas, NumPy
- **Containerization:** Docker & Docker Compose

---

## 📁 Project Structure

```text
wind-energy-portal/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                  # FastAPI app & API endpoints
│   │   └── services.py              # Elexon data streaming & metric calculations (MAE, RMSE, Bias)
│   ├── Dockerfile                   # Backend Docker configuration
│   └── requirements.txt             # Python dependencies (FastAPI, uvicorn, pandas, numpy, etc.)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx           # App header & system status indicator
│   │   │   ├── MetricCards.jsx      # UI cards for MAE, RMSE, and Forecast Bias
│   │   │   └── WindChart.jsx        # Recharts interactive time-series chart
│   │   ├── App.jsx                  # Main component, API fetching & state management
│   │   ├── main.jsx                 # React entry point
│   │   └── index.html               # HTML template
    ├── package.json                 # Node dependencies (React, Vite, Tailwind, Recharts, Axios)
    ├── postcss.config.js            # PostCSS configuration for processing Tailwind CSS
    ├── tailwind.config.js           # Tailwind design system configuration
    └── vite.config.js               # Vite build tool configuration
│
└── README.md                        # Documentation, local setup steps, and live deployment links
```

---

## 📊 Core Features & Quantitative Metrics

The application calculates and displays key domain-specific statistical error evaluations:
1. **Mean Absolute Error (MAE):** Measures the average magnitude of forecast errors, offering a clear view of general deviation.
2. **Root Mean Square Error (RMSE):** Penalizes larger forecast deviations more heavily, highlighting significant prediction errors.
3. **Forecast Bias:** Evaluates systemic tendencies toward over-forecasting or under-forecasting.
4. **Interactive Time-Series Chart:** High-performance visualization comparing actual wind generation against the latest day-ahead forecasts.

---

## 🛠️ Installation & Running Instructions

### Option 1: Running Locally (Development Mode)

#### Step 1: Start the Backend Server
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows (or source venv/bin/activate on Mac/Linux)
pip install -r requirements.txt
uvicorn app.main:app --reload
```
*(The FastAPI server will start at `http://127.0.0.1:8000`)*

#### Step 2: Start the Frontend Application
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
*(The React dashboard will run at `http://localhost:5173`)*

---

### Option 2: Running via Docker
To run the complete full-stack environment containerized:
```bash
docker-compose up --build
```

---

## 🚀 Live Demo & Links

- **Live Application (Frontend):** View Live App:"https://wind-energy-portal.vercel.app/"
- **Backend API:** View Backend API:"https://wind-energy-portal.onrender.com"

## ✨ Author & Submission Notes
Built with clean, modular architecture, adhering to senior-level engineering standards and best practices for reliability and code maintainability.