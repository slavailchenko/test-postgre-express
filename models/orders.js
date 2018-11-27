'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    client_id: DataTypes.INTEGER,
    id_status: DataTypes.INTEGER,
    id_payment: DataTypes.INTEGER,
    id_delivery: DataTypes.INTEGER
  }, {});
  
  orders.associate = function(models) {

    orders.hasMany(models.order_products, {
      foreignKey: 'order_id',
      as: 'order_products',
    });

    orders.hasMany(models.reviews, {
      foreignKey: 'id_order',
      as: 'reviews',
    });

    orders.belongsTo(models.clients, {
      foreignKey: 'client_id',
      as: 'clients'
    });

    orders.belongsTo(models.statusorder, {
      foreignKey: 'id_status',
      as: 'statusorders'
    });

    orders.belongsTo(models.payment, {
      foreignKey: 'id_payment',
      as: 'payments'
    });

    orders.belongsTo(models.delivery, {
      foreignKey: 'id_delivery',
      as: 'deliveries'
    });

  };
  return orders;
};