from flask_restful import Resource
from models.plan import Plan
from models.recipe import Recipe
from flask import request
from models_db import db
from flask_jwt_extended import jwt_required, get_jwt_identity



class PlanResource(Resource):
    @jwt_required()
    def post(self):
        claims = get_jwt_identity()
        created_by = claims.get('user_id')
        data = request.get_json()
        if data:
            title = data['title']
            description = data['description']
            plan = Plan(title=title, description=description, created_by=created_by)
            db.session.add(plan)
            db.session.commit()
            return "Plan created xsuccessfuly", 201
        return 'Invalid data', 400

    def get(self):
        plans = Plan.query.all()
        if plans:
            all_plans = []
            for plan in plans:
                all_plans.append(plan.to_json())
            
            return all_plans, '200'

    def delete(self):
        db.session.query(Plan).delete()
        db.session.commit()
        return "All plans have been deleted successfully", 204    


class SinglePlanResource(Resource):

    def get(self, plan_id):
        plans = Plan.query.filter_by(id=plan_id).all()
        if plans:
            for plan in plans:
                return plan.to_json(), 200

    def delete(self, plan_id):
        plan = Plan.query.filter_by(id=plan_id).all()
        if plan:
            db.session.delete(plan)
            db.session.commit()
            return 'Plan succesfully deleted', 204
        return 'No plan found', 204

    def put(self, plan_id):
        plan = Plan.query.filter_by(id=plan_id).first()
        if plan:
            data = request.get_json()
            for key, value in data.items():
                if key == 'title':
                    plan.title = value
                elif key == 'description':
                    plan.description = value
                elif key == 'recipe':
                    recipe = Recipe(**value)
                    for i in plan.recipes:
                        if i.recipe_id_fatsecret_sor == int(recipe.recipe_id_fatsecret_sor):
                            return 'Recipe already exists on plan', 400
                    plan.recipes.append(recipe)
            db.session.commit()
            return 'Plan successfully updated', 200
        else:
            return 'Plan not found', 404



class PlanByUserId(Resource):
    def get(self, user_id):
        plans = Plan.query.filter_by(created_by=user_id).all()
        if plans:
            all_plans = [plan.to_json() for plan in plans]
            return all_plans, 200
        return 'No plans found', 204
            



        

