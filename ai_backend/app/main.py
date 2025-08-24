from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas.input import DisasterInput, RiskInput, ClusterInput
from app.services import predict

app = FastAPI()

# ✅ CORS Setup: Allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict-disaster")
def predict_disaster_route(data: DisasterInput):
    return predict.predict_disaster(data)

@app.post("/risk-assessment")
def assess_risk_route(data: RiskInput):
    return predict.assess_risk(data)

@app.post("/cluster-assign")
def assign_cluster_route(data: ClusterInput):
    return predict.assign_cluster(data)
