from flask import Flask
from flask_pymongo import pymongo


CONNECTION_STRING = "mongodb://localhost:27017"
client = pymongo.MongoClient(CONNECTION_STRING)
db = client.get_database('User')
users = pymongo.collection.Collection(db, 'users')
