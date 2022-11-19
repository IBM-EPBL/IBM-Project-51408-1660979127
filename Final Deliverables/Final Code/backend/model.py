import pandas as pd
import numpy as np
# import seaborn as sns
# import matplotlib.pyplot as py
# from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle


df = pd.read_csv("Heart_Disease_Prediction.csv")
x = df.iloc[:, :-1].values
y = df.iloc[:, -1].values


std = StandardScaler()
x = std.fit_transform(x)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2)

model = RandomForestClassifier()
model.fit(x_train, y_train)
# predictions=model.predict(x_test)
# accuracy = accuracy_score(y_test,predictions)


def predict_heart_disease(parameter_list):
    return model.predict(parameter_list)[0]


pickle.dump(model, open('model.pkl', 'wb'))