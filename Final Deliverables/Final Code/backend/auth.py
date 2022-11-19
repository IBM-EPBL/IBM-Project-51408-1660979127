import jwt
import db
from bson.objectid import ObjectId

def create_bearer_token(user_id):
    return jwt.encode({"id":user_id}, "hdpsecret", algorithm="HS256")

def decode_and_verify_user(bearer_token):
    try:
        user = jwt.decode(bearer_token, "hdpsecret", algorithms=["HS256"])
        user_id = ObjectId(user['id'])
        data = list(db.users.find({'_id':user_id}))
        if(len(data) == 0):
            return [False]
        else:
            return [True,data]
    except Exception as ex:
        return False