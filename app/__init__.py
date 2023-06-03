from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_jwt_extended import JWTManager
from resources.plan_api import PlanResource, SinglePlanResource, PlanByUserId
from resources.proxy import ProxyResource, ProxyResourceRecipes
from resources.recipe_api import RecipeResource
from resources.user_api import UserResource
from resources.pedidos_api import EstimateShipping
from resources.pedidos_api import ConfirmedEstimateOrder
from models_db import db


app = Flask(__name__)

app.config['JWT_SECRET_KEY'] = 'your_secret_key_here'
jwt = JWTManager(app)
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
api.add_resource(ProxyResourceRecipes, '/api/get_recipes/<int:recipe_id>')    
api.add_resource(RecipeResource, '/api/recipe')
api.add_resource(UserResource, '/api/user') 
api.add_resource(PlanByUserId, '/api/user_plans/<int:user_id>')  
api.add_resource(EstimateShipping, '/api/estimate_shipping')
api.add_resource(ConfirmedEstimateOrder, '/api/confirmed_estimate_order/<string:estimateId>')



from auth import routes
    #Importar blueprint
app.register_blueprint(routes.auth)

app.run(port=8080)

