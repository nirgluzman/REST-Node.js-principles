import { Router } from "express";

import {
  getOrders,
  createOrder,
  getOrder,
  replaceOrder,
  deleteOrder,
} from "../controllers/orders.js";

const ordersRouter = Router();

ordersRouter.get("/", getOrders);

ordersRouter.post("/", createOrder);

ordersRouter.get("/:id", getOrder);

ordersRouter.put("/:id", replaceOrder);

ordersRouter.delete("/:id", deleteOrder);

export default ordersRouter;
