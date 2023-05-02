import { Router } from "express";

const ordersRouter = Router();

ordersRouter.get("/", (req, res) => {
  res.json({ msg: "GET all orders" });
});

ordersRouter.post("/", (req, res) => {
  res.json({ msg: "CREATE a new order" });
});

ordersRouter.get("/:id", (req, res) => {
  res.json({ msg: "GET a single order" });
});

ordersRouter.put("/:id", (req, res) => {
  res.json({ msg: "REPLACE a single order with a new one" });
});

ordersRouter.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single order" });
});

export default ordersRouter;
