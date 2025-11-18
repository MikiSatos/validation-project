const express = require('express');
const productsRouter = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Парсим JSON из тела запроса
app.use(express.json());

// Отдаём фронтенд из папки public
app.use(express.static('public'));

// Подключаем роуты для API
app.use('/api/products', productsRouter);

// Middleware для обработки ошибок
app.use(errorHandler);

module.exports = app;
