'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define('payment', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  payment.associate = function(models) {
    payment.hasMany(models.orders, {
      foreignKey: 'id_payment',
      as: 'orders',
    });
  
  };
  return payment;
};