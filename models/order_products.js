'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_products = sequelize.define('order_products', {
    orderid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER
  }, {});
  order_products.associate = function(models) {
    // associations can be defined here
  };
  return order_products;
};