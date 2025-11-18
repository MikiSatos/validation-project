const { productCreateSchema } = require('../../src/validators/productSchema');


test('validates correct product', () => {
const valid = {
name: 'Laptop',
price: 1200,
category: 'Electronics',
brand: 'Dell',
inStock: true
};


const { error } = productCreateSchema.validate(valid);
expect(error).toBeUndefined();
});