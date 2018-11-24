'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_products = sequelize.define('order_products', {
    orderid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER
  }, {});

  order_products.associate = function(models) {

    order_products.belongsTo(models.orders, {
      foreignKey: 'orderid',
      as: 'orders'
    });

    order_products.belongsTo(models.products, {
      foreignKey: 'productid',
      as: 'products'
    });
  };
  return order_products;
};