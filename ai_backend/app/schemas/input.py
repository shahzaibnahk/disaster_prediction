from pydantic import BaseModel

class DisasterInput(BaseModel):
    humidity: float
    temperature: float
    rainfall: float
    wind_speed: float

class RiskInput(BaseModel):
    population_density: float
    severity_index: float
    infrastructure_score: float

class ClusterInput(BaseModel):
    latitude: float
    longitude: float
