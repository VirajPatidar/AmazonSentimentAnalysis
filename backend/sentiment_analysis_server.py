from tokenize import String
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Sentiment(BaseModel):
    message: str


@app.post("/api/get_sentiment/")
async def return_sentiment(sentiment: Sentiment):
    return {
        "status": "OK",
        "data": sentiment
    }

@app.get('/ping/')
async def ping():
    return "pong"


@app.get("/")
async def read_main():
    return {"msg": "Hello World"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
