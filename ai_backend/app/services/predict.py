import joblib
import numpy as np

disaster_model = joblib.load("app/models/disaster_predictor.joblib")
risk_model = joblib.load("app/models/risk_assessment.joblib")
cluster_model = joblib.load("app/models/resource_cluster.joblib")

def predict_disaster(data):
    features = np.array([[data.humidity, data.temperature, data.rainfall, data.wind_speed]])
    prediction = disaster_model.predict(features)[0]
    return {"predicted_disaster": prediction}

def assess_risk(data):
    features = np.array([[data.population_density, data.severity_index, data.infrastructure_score]])
    prediction = risk_model.predict(features)[0]
    return {"risk_score": prediction}

def assign_cluster(data):
    features = np.array([[data.latitude, data.longitude]])
    cluster = int(cluster_model.predict(features)[0])
    return {"assigned_cluster": cluster}
