import requests
import constant


class API:
    def get(URL):
        response = requests.get(URL)
        #print(response.json())
        return response