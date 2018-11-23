'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    clientid: DataTypes.INTEGER,
    idstatus: DataTypes.INTEGER,
    idpayment: DataTypes.INTEGER,
    iddelivery: DataTypes.INTEGER
  }, {});
  
  orders.associate = function(models) {

    orders.hasMany(models.order_products, {
      foreignKey: 'orderid',
      as: 'order_products',
    });

    orders.hasMany(models.reviews, {
      foreignKey: 'idorder',
      as: 'reviews',
    });

    orders.belongsTo(models.clients, {
      foreignKey: 'clientid',
      as: 'clients'
    });

    orders.belongsTo(models.statusorder, {
      foreignKey: 'idstatus',
      as: 'statusorder'
    });

    orders.belongsTo(models.payment, {
      foreignKey: 'idpayment',
      as: 'payment'
    });

    orders.belongsTo(models.delivery, {
      foreignKey: 'iddelivery',
      as: 'delivery'
    });

  };
  return orders;
};