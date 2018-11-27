'use strict';
module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define('brand', {
    brand_name: DataTypes.STRING,
    brand_description: DataTypes.STRING
  }, {});
  
  brand.associate = function(models) {
    brand.hasMany(models.products, {
      foreignKey: 'brand_id',
      as: 'brands',
    });
  };
  return brand;
};