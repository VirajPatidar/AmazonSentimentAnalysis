import requests as rq
import json as js

def test():
    result = rq.post('http://127.0.0.1:8000/api/get_sentiment/', data = js.dumps({"message": "Marco"}))
    print(f"==[ result: {result.json()}")

if __name__=="__main__":
    test()