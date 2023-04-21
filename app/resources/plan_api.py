from flask_restful import Resource
from models.plan import Plan
from flask import request
from models_db import db

class PlanResource(Resource):
    def post(self):
        data = request.get_json()
        title = data['title']
        description = data['description']
        created_by = data['created_by']
        plan = Plan(title=title, description=description, created_by=created_by)
        db.session.add(plan)
        db.session.commit()
        

        return "Plan created successfuly", 201

    def get(self):
        plans = Plan.query.all()
        if plans:
            all_plans = []
            for plan in plans:
                all_plans.append(plan.to_json())
            
            return all_plans, '200'





    

