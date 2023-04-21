from models_db import db


class Plan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_by = db.Column(db.String(50), nullable=False)
    # meals = db.relationship('Meal', backref='plan', lazy=True)
    

    def to_json(self):
        return {
            'id' : self.id,
            'title': self.title,
            'description': self.description,
            'created_by': self.created_by
        }