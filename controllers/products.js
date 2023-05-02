// Here you will need to import an eventual Product model

export const getProducts = (req, res) => {
  // res.setHeader("Content-Type", "application/json");
  // res.send(JSON.stringify({ name: "Nir" }));
  res.json({ msg: "GET all products" });
};

export const createProduct = (req, res) => {
  res.json({ msg: "CREATE a new product" });
};

export const getProduct = (req, res) => {
  res.json({ msg: "GET a single product" });
};

export const replaceProduct = (req, res) => {
  res.json({ msg: "REPLACE a single product with a new one" });
};

export const deleteProduct = (req, res) => {
  res.json({ msg: "DELETE a single product" });
};
