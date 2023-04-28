from models_db import db
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    user_id = db.Column(db.Integer,primary_key = True)
    username = db.Column(db.String(100),nullable = False)
    email = db.Column(db.String(100),nullable = False)
    password = db.Column(db.String(100),nullable = False)
    plans = db.relationship('Plan', backref='user', lazy=False)
    
    @property
    def plain_password(self):
        raise AttributeError("NOT ALLOWED")

    @plain_password.setter
    def plain_password(self,password):
        self.password = generate_password_hash(password)
    
    def validate_pass(self,password):
        return check_password_hash(self.password,password)

    def to_json(self):
        plans = [plan.to_json() for plan in self.plans]
        return {
            "user_id": self.user_id,
            "username": self.username,
            "email": self.email,
            "plans": plans
        }

