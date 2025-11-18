const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const validate = require('../middleware/validate');
const { productCreateSchema, productUpdateSchema } = require('../validators/productSchema');

// GET — получить все продукты
router.get('/', controller.getAllProducts);

// POST — создать продукт
router.post('/', validate(productCreateSchema), controller.createProduct);

// PUT — обновить продукт по id
router.put('/:id', validate(productUpdateSchema), controller.updateProduct);

// DELETE — удалить продукт по id
router.delete('/:id', controller.deleteProduct);

module.exports = router;
