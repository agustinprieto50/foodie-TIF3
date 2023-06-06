from flask_restful import Resource
from models.recipe import Recipe
from flask import request
from models_db import db


class RecipeResource(Resource):
    def post(self):
        data = request.get_json()
        if data:
            plan_id = data['plan_id']
            recipe_id_fatsecret_sor = data['recipe_id_fatsecret_sor']
            recipe = Recipe(plan_id=plan_id, recipe_id_fatsecret_sor=recipe_id_fatsecret_sor)
            db.session.add(recipe)
            db.session.commit()
            return 'Recipe successfully created', 201
        
    def delete(self):
        db.session.query(Recipe).delete()
        db.session.commit()
        return "All plans have been deleted successfully", 204    

        
    


