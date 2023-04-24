from models_db import db


class Recipe(db.Model):
    recipe_id = db.Column(db.Integer, primary_key=True)
    recipe_id_fatsecret_sor = db.Column(db.Integer)
    plan_id = db.Column(db.Integer, db.ForeignKey('plan.id'), nullable=False)
    
    def to_json(self):
        return {
            "recipe_id": self.recipe_id,
            "recipe_id_fatseecret_sor": self.recipe_id_fatsecret_sor,
            "plan_id": self.plan_id
        }

