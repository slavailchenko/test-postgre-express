'use strict';
module.exports = (sequelize, DataTypes) => {
  const warranty = sequelize.define('warranty', {
    days: DataTypes.INTEGER
  }, {});

  warranty.associate = function(models) {
    warranty.hasMany(models.products, {
      foreignKey: 'warranty_id',
      as: 'products',
    });
  };
  return warranty;
};