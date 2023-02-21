const {
  PAYMENT_METHOD,
  PAYMENT_MIN_AMOUNT,
  PAYMENT_STATUS,
} = require('../../constants');
const {
  paymentMethodUnsupported,
  paymentAmountInvalid,
  paymentAlreadyExists,
} = require('../../errors');
const { Payment } = require('../../models');

async function guardPayment(invoiceNumber, paymentMethod, amount) {
  const paymentMethodSupported = PAYMENT_METHOD[paymentMethod];

  if (!paymentMethodSupported) {
    throw paymentMethodUnsupported(paymentMethod);
  }

  if (amount <= PAYMENT_MIN_AMOUNT) {
    throw paymentAmountInvalid(amount);
  }

  const hasPayment = await Payment.findOne({ where: { invoiceNumber } });

  if (hasPayment) {
    throw paymentAlreadyExists(invoiceNumber);
  }
}

async function createPayment({ invoiceNumber, paymentMethod, amount }) {
  await guardPayment(invoiceNumber, paymentMethod, amount);

  await Payment.create({
    invoiceNumber,
    paymentMethod,
    amount,
    status: PAYMENT_STATUS.PENDING,
  });
}

module.exports = createPayment;
