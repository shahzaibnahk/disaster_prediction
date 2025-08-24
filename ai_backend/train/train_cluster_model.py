import pandas as pd
from sklearn.cluster import KMeans
from joblib import dump

df = pd.read_csv("data/resources.csv")

model = KMeans(n_clusters=3)
model.fit(df)

dump(model, "app/models/resource_cluster.joblib")
