/*
REST = REpresentational State Transfer
API = Application Programming Interface
HTTP = Hypertext Transfer Protocol

    [x] Uniform interface
        Routes for HTTP verbs
        Standardized actions (calls)
        Response type
    [x] Client-server
    [x] Stateless
    [x] Cacheable
*/

import express from "express";
import "colors";

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/products", (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.send(JSON.stringify({ name: "Nir" }));
  res.json({ msg: "GET all products" });
});

app.post("/products", (req, res) => {
  res.json({ msg: "CREATE a new product" });
});

app.get("/products/:id", (req, res) => {
  res.json({ msg: "GET a single product" });
});

app.put("/products/:id", (req, res) => {
  res.json({ msg: "REPLACE a single product with a new one" });
});

app.delete("/products/:id", (req, res) => {
  res.json({ msg: "DELETE a single product" });
});

app.get("/orders", (req, res) => {
  res.json({ msg: "GET all orders" });
});

app.post("/orders", (req, res) => {
  res.json({ msg: "CREATE a new order" });
});

app.get("/orders/:id", (req, res) => {
  res.json({ msg: "GET a single order" });
});

app.put("/orders/:id", (req, res) => {
  res.json({ msg: "REPLACE a single order with a new one" });
});

app.delete("/orders/:id", (req, res) => {
  res.json({ msg: "DELETE a single order" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.red);
});
