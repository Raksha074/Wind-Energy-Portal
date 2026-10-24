from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services import fetch_elexon_data, calculate_metrics

app = FastAPI(
    title="Gridbricks UK Wind Forecast & Error Evaluation API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "online", "message": "Gridbricks UK Wind Energy API is running for January 2026."}

@app.get("/api/wind-data")
def get_wind_data():
    data = fetch_elexon_data()
    return {"data": data}

@app.get("/api/metrics")
def get_accuracy_metrics():
    data = fetch_elexon_data()
    metrics = calculate_metrics(data)
    return metrics