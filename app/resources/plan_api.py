from flask_restful import Resource
from models.plan import Plan
from flask import request
from models_db import db

class PlanResource(Resource):
    def post(self):
        data = request.get_json()
        if data:
            title = data['title']
            description = data['description']
            created_by = data['created_by']
            plan = Plan(title=title, description=description, created_by=created_by)
            db.session.add(plan)
            db.session.commit()
            return "Plan created successfuly", 201
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
        return 'No plan found', 404

    def put(self, plan_id):
        plan = Plan.query.filter_by(id=plan_id).all()
        if plan:
            data = request.get_json()
            for key, value in data:
                if key == 'title':
                    plan.title = value
                if key == 'description':
                    plan.description = value
            return 'Plan successfully updated', 200

        return 'Plan not found', 404




            



        

