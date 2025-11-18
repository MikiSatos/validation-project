const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const validate = require('../middleware/validate');
const { productCreateSchema, productUpdateSchema } = require('../validators/productSchema');

router.post('/', validate(productCreateSchema), controller.createProduct);
router.put('/:id', validate(productUpdateSchema), controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;