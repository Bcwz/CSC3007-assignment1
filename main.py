import constant
import time
from api.api import API

polling_interval = 2

def main():
    while True:
        response = API.get(constant.URL)
        print(response.json())
        time.sleep(polling_interval)

if __name__ == "__main__":
    main()
