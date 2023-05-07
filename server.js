/*
REST = REpresentational State Transfer
API = Application Programming Interface
HTTP = Hypertext Transfer Protocol

    [x] Uniform interface
        Routes for HTTP verbs
        Standardized actions (calls)
        Response type
    [x] Client-Server
    [x] Stateless
    [x] Cacheable
*/

import express from "express";
import "colors";

import 'dotenv/config';

import productsRouter from "./routes/productsRouter.js";
import ordersRouter from "./routes/ordersRouter.js";
import errorHandler from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.red);
});
