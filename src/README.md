Small Node.js API in TypeScript that exposes two endpoints:
GET /health → returns { status: "ok" }
GET /quote → returns a random motivational quote fetched from an S3 bucket (JSON file)

Service is:
Containerised with Docker
AWS credentials and region loaded from environment variables
Uses  AWS SDK v3

Run with: docker compose up --build