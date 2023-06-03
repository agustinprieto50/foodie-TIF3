import requests
from flask_restful import Resource
from flask import jsonify, request


class EstimateShipping(Resource):

    def post(self):
        body = request.get_json()
        notificationMail = body.get('notificationMail')
        items = body.get('items')
        waypoints = body.get('waypoints')
        referenceId = body.get('referenceId')
        isTest = body.get('isTest')
        url = "https://courier-api.pedidosya.com/v3/shippings/estimates"
        headers = {
                    'Authorization':'6678-010142-eaf1c88b-353f-4fe6-74d9-4359a3c9e18c',
                    'Content-Type': 'application/json'
                  }
        data = {
            "referenceId":referenceId,
            "isTest": isTest,
            "notificationMail": notificationMail,
            "items": items,
            "waypoints": waypoints
            }
        response = requests.post(url=url, json=data, headers=headers)
        return response.json(), response.status_code
        
class ConfirmedEstimateOrder(Resource):

    def post(self, estimateId):
        body = request.get_json()
        deliveryOfferId = body.get("deliveryOfferId")
        url = f'https://courier-api.pedidosya.com/v3/shippings/estimates/{estimateId}/confirm'
        headers = {'Authorization':'6678-010142-eaf1c88b-353f-4fe6-74d9-4359a3c9e18c', 
                   'Content-Type': 'application/json'
                   }
        data = {
            "deliveryOfferId": deliveryOfferId
        }
        response = requests.post(url=url, json=data, headers=headers)
        return response.json(), response.status_code


