const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  invoiceNumber: {
    type: DataTypes.STRING(15),
    field: 'invoice_number',
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING(15),
    field: 'payment_method',
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(15),
    field: 'status',
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
}, {
  tableName: 'payments',
  timestamps: true,
});

module.exports = {
  Payment,
  sequelize,
};
