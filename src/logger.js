const { default: pino } = require('pino');

module.exports = pino({
  transport: {
    target: 'pino-pretty',
  },
});
