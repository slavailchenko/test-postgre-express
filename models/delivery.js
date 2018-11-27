'use strict';
module.exports = (sequelize, DataTypes) => {
  const delivery = sequelize.define('delivery', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  delivery.associate = function(models) {
    delivery.hasMany(models.orders, {
      foreignKey: 'id_delivery',
      as: 'orders',
    });
  };
  return delivery;
};