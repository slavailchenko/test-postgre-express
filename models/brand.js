'use strict';
module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define('brand', {
    brandname: DataTypes.STRING,
    branddescription: DataTypes.STRING
  }, {});
  
  brand.associate = function(models) {
    brand.hasMany(models.products, {
      foreignKey: 'brandid',
      as: 'brand',
    });
  };
  return brand;
};