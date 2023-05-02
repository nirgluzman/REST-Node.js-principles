import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.send(JSON.stringify({ name: "Nir" }));
  res.json({ msg: "GET all products" });
});

productsRouter.post("/", (req, res) => {
  res.json({ msg: "CREATE a new product" });
});

productsRouter.get("/:id", (req, res) => {
  res.json({ msg: "GET a single product" });
});

productsRouter.put("/products/:id", (req, res) => {
  res.json({ msg: "REPLACE a single product with a new one" });
});

productsRouter.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single product" });
});

export default productsRouter;
