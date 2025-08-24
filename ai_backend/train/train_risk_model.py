import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from joblib import dump

df = pd.read_csv("data/risk_data.csv")
X = df.drop("risk_score", axis=1)
y = df["risk_score"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = GradientBoostingClassifier()
model.fit(X_train, y_train)

dump(model, "app/models/risk_assessment.joblib")
