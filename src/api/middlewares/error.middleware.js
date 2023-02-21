const errors = require('../../errors');
const logger = require('../../logger');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DATABASE_ERROR]: 503,
  [errors.DEFAULT_ERROR]: 500,
  [errors.PAYMENT_ALREADY_EXISTS]: 400,
  [errors.PAYMENT_AMOUNT_INVALID]: 400,
  [errors.PAYMENT_METHOD_UNSUPPORTED]: 400,
};

module.exports = (err, req, res, next) => {
  if (!err) next();

  const status = statusCodes[err.code] || DEFAULT_STATUS_CODE;
  const { message, code } = err;

  logger.error(err);

  res.status(status).json({ message, code });
};
