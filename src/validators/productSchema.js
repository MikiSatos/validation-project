const Joi = require('joi');

const categories = ['Electronics', 'Books', 'Clothing', 'Sports'];

exports.productCreateSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().positive().required(),
    category: Joi.string().valid(...categories).required(),
    brand: Joi.string().min(2).max(30).required(),
    inStock: Joi.boolean().required(),
    description: Joi.string().max(300).optional()
});

exports.productUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(50),
    price: Joi.number().positive(),
    category: Joi.string().valid(...categories),
    brand: Joi.string().min(2).max(30),
    inStock: Joi.boolean(),
    description: Joi.string().max(300)
});