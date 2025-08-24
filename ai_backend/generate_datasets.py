import pandas as pd
import numpy as np
import random

# ---- Disaster Dataset ----
def generate_disaster_data(n=300):
    data = []
    for _ in range(n):
        humidity = random.randint(10, 100)
        temperature = random.uniform(20, 45)
        rainfall = random.uniform(0, 200)
        wind_speed = random.uniform(0, 30)

        if rainfall > 80 and humidity > 60:
            disaster_type = "flood"
        elif temperature > 38 and humidity < 30:
            disaster_type = "fire"
        elif wind_speed < 10 and rainfall < 10:
            disaster_type = "earthquake"
        else:
            disaster_type = random.choice(["flood", "fire", "earthquake"])

        data.append([humidity, round(temperature, 2), round(rainfall, 2), round(wind_speed, 2), disaster_type])
    
    df = pd.DataFrame(data, columns=["humidity", "temperature", "rainfall", "wind_speed", "disaster_type"])
    df.to_csv("data/disaster_data.csv", index=False)
    print("✅ disaster_data.csv generated.")


# ---- Risk Assessment Dataset ----
def generate_risk_data(n=300):
    data = []
    for _ in range(n):
        pop_density = random.randint(50, 1000)
        severity = round(random.uniform(1, 10), 2)
        infra_score = round(random.uniform(1, 10), 2)

        if severity > 7 and pop_density > 700:
            risk_score = "high"
        elif severity > 4:
            risk_score = "medium"
        else:
            risk_score = "low"

        data.append([pop_density, severity, infra_score, risk_score])

    df = pd.DataFrame(data, columns=["population_density", "severity_index", "infrastructure_score", "risk_score"])
    df.to_csv("data/risk_data.csv", index=False)
    print("✅ risk_data.csv generated.")


# ---- Resource Clustering Dataset ----
def generate_resource_data(n=500):
    lat_range = [24.5, 35.5]
    lon_range = [67.0, 74.5]
    data = []

    for _ in range(n):
        lat = round(random.uniform(*lat_range), 6)
        lon = round(random.uniform(*lon_range), 6)
        data.append([lat, lon])

    df = pd.DataFrame(data, columns=["latitude", "longitude"])
    df.to_csv("data/resources.csv", index=False)
    print("✅ resources.csv generated.")


if __name__ == "__main__":
    import os
    os.makedirs("data", exist_ok=True)
    generate_disaster_data()
    generate_risk_data()
    generate_resource_data()
