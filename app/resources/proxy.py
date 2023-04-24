import requests
from flask_restful import Resource
from flask import jsonify


class ProxyResource(Resource):

    # POST API token
    def post(self):
        client_id = "8b1528e0c8bb4fc89edaeee0a7b7ddbf"
        client_secret = '62a2347f60f14528b62140c805934df6'
        url = 'https://oauth.fatsecret.com/connect/token'
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        data = {'grant_type': 'client_credentials', 'scope': 'basic'}
        auth = (client_id, client_secret)
        response = requests.post(url, headers=headers, data=data, auth=auth)
        return response.json()

    # GET all recipes
    def get(self):
        token = self.post()
        access_token = token['access_token']
        headers = {'Authorization': 'Bearer ' + access_token}
        data = {'method': 'recipes.search.v3', 'format': 'json'}
        response = requests.get('https://platform.fatsecret.com/rest/server.api', headers=headers, data=data)
        return jsonify(response.json()) 



