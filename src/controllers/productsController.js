const productService = require('../services/productService');

exports.createProduct = (req, res) => {
    const product = productService.create(req.body);
    res.status(201).json(product);
};

exports.updateProduct = (req, res) => {
    const updated = productService.update(req.params.id, req.body);
    res.json(updated);
};

exports.deleteProduct = (req, res) => {
    productService.delete(req.params.id);
    res.status(204).send();
};