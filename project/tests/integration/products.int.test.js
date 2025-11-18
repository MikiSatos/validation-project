const request = require('supertest');
const app = require('../../src/app');


test('creates a product', async () => {
const response = await request(app)
.post('/api/products')
.send({
name: 'Phone',
price: 500,
category: 'Electronics',
brand: 'Samsung',
inStock: true
});


expect(response.status).toBe(201);
});