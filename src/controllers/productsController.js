let products = []; // простой массив для хранения продуктов

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const product = req.body;
  product.id = products.length + 1; // простая генерация id
  products.push(product);
  res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
};

exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};
