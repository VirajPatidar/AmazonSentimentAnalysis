from tokenize import String
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import json
from tensorflow.keras.preprocessing.text import tokenizer_from_json
import datetime
from fastapi.middleware.cors import CORSMiddleware

origins = ["*"]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# loading model and tokenizer
model = load_model('sentiment_analysis')
with open('tokenizer.json') as f:
    data = json.load(f)
    tokenizer = tokenizer_from_json(data)
max_length = 100
padding_type="post"
trunc_type="post"


class Sentiment(BaseModel):
    message: str


@app.post("/api/get_sentiment/")
async def return_sentiment(sentiment: Sentiment):
    # text message should be less than 100 characters
    if len(sentiment.message) > 100:
        return {
            "status": "Forbidden",
            "data": "Sentence should be less than 100 characters" 
        }
    test_this = [sentiment.message]
    print(f"this is the test input: {test_this}")
    sequences = tokenizer.texts_to_sequences(test_this)
    padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)

    prob=model.predict(padded)
    print(prob[0][0])
    return {
        "status": "OK", 
        "probability": float(prob[0][0]),
        "sentiment": int(float(prob[0][0]) * 100 / 20) + 1,
        "timestamp": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

@app.get('/ping/')
async def ping():
    return "pong"


@app.get("/")
async def read_main():
    return {"msg": "Hello World"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
