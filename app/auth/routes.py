from flask import request, jsonify, Blueprint
from models_db import db
from models.user import User
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token

#Blueprint para acceder a los métodos de autenticación
auth = Blueprint('auth', __name__, url_prefix='/auth')

#Método de logueo
@auth.route('/login', methods=['POST'])
def login():
    user_object = db.session.query(User).filter(User.email == request.get_json().get("email")).first_or_404()
    #Valida la contraseña

    user = user_object.to_json()

    if user_object.validate_pass(request.get_json().get("password")):
        #Genera un nuevo token
        #Pasa el objeto user como identidad
        access_token = create_access_token(identity=user)
        #Devolver valores y token
        data = {
            'id': str(user['user_id']),
            'username': user['username'],
            'email': user['email'],
            'access_token': access_token
        }

        return data, 200
    else:
        return 'Incorrect password', 401




