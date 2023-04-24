from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from resources.plan_api import PlanResource, SinglePlanResource
from resources.proxy import ProxyResource
from resources.recipe_api import RecipeResource
from models_db import db
from models.plan import Plan


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
with app.app_context():
    db.init_app(app)
    db.create_all()

api = Api(app)
api.init_app(app)
migrate = Migrate(app, db)
api.add_resource(PlanResource, '/api/plan')
api.add_resource(SinglePlanResource, '/api/plan/<int:plan_id>')
api.add_resource(ProxyResource, '/api/proxy')    
api.add_resource(RecipeResource, '/api/recipe')    


app.run(port=8080)

