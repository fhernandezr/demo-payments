const buildError = ({ message, code }) => Object.assign(new Error(message), { code });

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = (message, code = exports.DEFAULT_ERROR) => buildError({ message, code });

exports.PAYMENT_METHOD_UNSUPPORTED = 'PAYMENT_METHOD_UNSUPPORTED';
exports.paymentMethodUnsupported = (paymentMethod) => buildError({
  message: `The payment method ${paymentMethod} is not supported`,
  code: exports.PAYMENT_METHOD_UNSUPPORTED,
});

exports.PAYMENT_AMOUNT_INVALID = 'payment_amount_invalid';
exports.paymentAmountInvalid = (amount) => buildError({
  message: `The amount provided ($ ${amount}) is not within the minimum allowed.`,
  code: exports.PAYMENT_AMOUNT_INVALID,
});

exports.PAYMENT_ALREADY_EXISTS = 'payment_already_exists';
exports.paymentAlreadyExists = (invoiceNumber) => buildError({
  message: `The invoice number ${invoiceNumber} already exists`,
  code: exports.PAYMENT_ALREADY_EXISTS,
});
