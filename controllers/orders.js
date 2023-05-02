export const getOrders = (req, res) => {
  res.json({ msg: "GET all orders" });
};

export const createOrder = (req, res) => {
  res.json({ msg: "CREATE a new order" });
};

export const getOrder = (req, res) => {
  res.json({ msg: "GET a single order" });
};

export const replaceOrder = (req, res) => {
  res.json({ msg: "REPLACE a single order with a new one" });
};

export const deleteOrder = (req, res) => {
  res.json({ msg: "DELETE a single order" });
};
