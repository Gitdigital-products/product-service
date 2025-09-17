export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "product-service" });
  });

  // Product-specific endpoints
  app.get("/products", (req, res) => {
    res.json([
      { id: 1, name: "Sample Product A", price: 100.0 },
      { id: 2, name: "Sample Product B", price: 150.0 }
    ]);
  });

  app.get("/products/:productId", (req, res) => {
    const { productId } = req.params;
    res.json({ id: productId, name: `Product ${productId}`, price: 99.99 });
  });

  app.post("/products", (req, res) => {
    const { name, price } = req.body;
    res.json({ message: `Product ${name} created (sample)`, price });
  });
}
