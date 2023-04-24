from models_db import db


class Plan(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_by = db.Column(db.String(50), nullable=False)
    recipes = db.relationship('Recipe', backref='plan', lazy=False)
    

    def to_json(self):
        recipes = [recipe.to_json() for recipe in self.recipes]
        return {
            'id' : self.id,
            'title': self.title,
            'description': self.description,
            'created_by': self.created_by,
            'recipes': recipes
        }