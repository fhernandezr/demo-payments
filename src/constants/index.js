const PAYMENT_METHOD = {
  MERCADO_PAGO: 'mercado_pago',
  PAY_PAL: 'pay_pal',
};

const PAYMENT_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
};

const PAYMENT_MIN_AMOUNT = 1_000;

module.exports = {
  PAYMENT_METHOD,
  PAYMENT_STATUS,
  PAYMENT_MIN_AMOUNT,
};
