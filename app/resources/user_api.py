from flask_restful import Resource
from models.user import User
from flask import request
from models_db import db
from werkzeug.security import generate_password_hash


class UserResource(Resource):
    def post(self):
        data = request.get_json()
        if data:
            username = data['username']
            email = data['email']
            password = data['password']
            hashed_password = generate_password_hash(password)
            user = User(username=username, email=email, password=hashed_password)
            db.session.add(user)
            db.session.commit()
            return 'User created', 201
        return 'Invalid data', 400
    
    def get(self):
        users = User.query.all()
        if users:
            all_users = []
            for user in users:
                all_users.append(user.to_json())
            return all_users, 200
        return 'No users found', 404




        

