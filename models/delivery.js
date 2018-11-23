'use strict';
module.exports = (sequelize, DataTypes) => {
  const delivery = sequelize.define('delivery', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  delivery.associate = function(models) {
    delivery.hasMany(models.orders, {
      foreignKey: 'iddelivery',
      as: 'orders',
    });
  };
  return delivery;
};