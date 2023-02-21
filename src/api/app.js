const express = require('express');

const payments = require('./routes/payments.route');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/payments', payments);

app.use(errorMiddleware);

module.exports = app;
