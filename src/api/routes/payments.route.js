const { Router } = require('express');
const createPaymentController = require('../controllers/create-payment.controller');

const router = Router();

router.post('/', createPaymentController);

module.exports = router;
