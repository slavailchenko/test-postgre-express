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
      foreignKey: 'client_id',
      as: 'clients'
    });

    orders.belongsTo(models.statusorder, {
      foreignKey: 'idstatus',
      as: 'statusorders'
    });

    orders.belongsTo(models.payment, {
      foreignKey: 'idpayment',
      as: 'payments'
    });

    orders.belongsTo(models.delivery, {
      foreignKey: 'iddelivery',
      as: 'deliveries'
    });

  };
  return orders;
};