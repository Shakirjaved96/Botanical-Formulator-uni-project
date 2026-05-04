# Botanical Formulator

An AI-powered diagnostic and formulation web tool for premium skin and scalp care.

## Tech Stack
- **Frontend:** React.js (TypeScript), Tailwind CSS, Framer Motion.
- **Core Backend:** Java 17, Spring Boot, Spring Data MongoDB.
- **AI Microservice:** Python 3.10, FastAPI, OpenCV.
- **Database:** MongoDB.
- **Orchestration:** Docker Compose.

## Getting Started

### Prerequisites
- Docker & Docker Compose installed.

### Running the Application
1. Clone the repository (if not already in it).
2. Open a terminal in the project root (`botanical-formulator`).
3. Run the following command to build and start all services:
   ```bash
   docker compose up --build
   ```

### Accessing the Services
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Java Backend API:** [http://localhost:8080](http://localhost:8080)
- **Python AI Service:** [http://localhost:8000](http://localhost:8000)
- **MongoDB:** `mongodb://localhost:27017`

## Project Structure
- `/frontend-react`: React application with camera integration.
- `/backend-java`: Spring Boot API for business logic and data persistence.
- `/microservice-python`: FastAPI service for image analysis.
- `docker-compose.yml`: Unified orchestration file.

## Features
- **VIP Aesthetic:** Earthy tones, glassmorphism, and smooth animations.
- **Native Camera Integration:** Direct access to device webcam via `getUserMedia`.
- **AI-Powered Diagnosis:** Python microservice validates images and predicts conditions.
- **Botanical Formulations:** MongoDB-backed remedies based on traditional ingredients.
- **Automated Seeding:** Database automatically populates with initial botanical data on startup.
