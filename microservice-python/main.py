import base64
import random
import numpy as np
import cv2
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Botanical AI Microservice")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImagePayload(BaseModel):
    image_base64: str

CONDITIONS = ["Severe Dandruff", "Dry Scalp", "Acne Breakout", "Oily Skin"]

@app.post("/analyze-image")
async def analyze_image(payload: ImagePayload):
    try:
        # Decode base64 image
        header, encoded = payload.image_base64.split(",", 1) if "," in payload.image_base64 else (None, payload.image_base64)
        image_data = base64.b64decode(encoded)
        nparr = np.frombuffer(image_data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if img is None:
            raise HTTPException(status_code=400, detail="Invalid image data")

        # Dummy OpenCV processing (e.g., checking average brightness)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        avg_brightness = np.mean(gray)

        # Mocked ML classification logic
        # For demonstration: use brightness to skew results slightly
        if avg_brightness > 200:
            detected_condition = "Oily Skin"
        elif avg_brightness < 50:
            detected_condition = "Severe Dandruff"
        else:
            detected_condition = random.choice(CONDITIONS)

        confidence = round(random.uniform(0.85, 0.99), 2)

        return {
            "detected_condition": detected_condition,
            "confidence": confidence,
            "metadata": {
                "brightness": float(avg_brightness),
                "resolution": f"{img.shape[1]}x{img.shape[0]}"
            }
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
