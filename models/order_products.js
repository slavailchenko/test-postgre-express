'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_products = sequelize.define('order_products', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});

  order_products.associate = function(models) {

    order_products.belongsTo(models.orders, {
      foreignKey: 'order_id',
      as: 'orders'
    });

    order_products.belongsTo(models.products, {
      foreignKey: 'product_id',
      as: 'products'
    });
  };
  return order_products;
};