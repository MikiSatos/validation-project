const express = require('express');
const productsRouter = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productsRouter);
app.use(errorHandler);

module.exports = app;