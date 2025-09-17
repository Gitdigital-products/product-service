# product-service
  The **product-service** manages the product catalog.  ## Endpoints - `GET /health` — service status - `GET /products` — list all products (sample) - `GET /products/:productId` — get a product (sample) - `POST /products` — create a product (sample)  ## Tracing This service reports telemetry to the tracing-service using the URL in the `endpoints
