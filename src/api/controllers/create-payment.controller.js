const logger = require('../../logger');
const createPayment = require('../../services/payment/create-payment.service');

module.exports = async (req, res, next) => {
  try {
    logger.info(req.body, 'trying to create payment');
    await createPayment(req.body);
    logger.info(req.body, 'payment was created');

    res.status(200).json({
      message: 'payment was created',
    });
  } catch (error) {
    next(error);
  }
};
