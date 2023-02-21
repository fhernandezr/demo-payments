const app = require('./api/app');
const logger = require('./logger');
const { sequelize } = require('./models');

app.listen(3000, async () => {
  await sequelize.sync({ force: true });
  logger.info('App started at port 3000');
});
