from fastapi import FastAPI
import uvicorn
import os

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Analytics Service running"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3005))
    uvicorn.run(app, host="0.0.0.0", port=port)
