import { Router } from "express";

import {
  getProducts,
  createProduct,
  getProduct,
  replaceProduct,
  deleteProduct,
} from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct);
productsRouter.get("/:id", getProduct);
productsRouter.put("/products/:id", replaceProduct);
productsRouter.delete("/:id", deleteProduct);

export default productsRouter;
