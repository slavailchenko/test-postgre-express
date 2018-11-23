'use strict';
module.exports = (sequelize, DataTypes) => {
  const warranty = sequelize.define('warranty', {
    days: DataTypes.INTEGER
  }, {});

  warranty.associate = function(models) {
    warranty.hasMany(models.products, {
      foreignKey: 'warrantyid',
      as: 'products',
    });
  };
  return warranty;
};