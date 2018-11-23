'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    subcategoryid: DataTypes.INTEGER,
    brandid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    article: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    availabilityid: DataTypes.INTEGER,
    warrantyid: DataTypes.INTEGER,
    conditionid: DataTypes.INTEGER,
    supplierid: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});

  products.associate = function(models) {

    products.hasMany(models.order_products, {
      foreignKey: 'productid',
      as: 'order_products',
    });

    products.hasMany(models.reviews, {
      foreignKey: 'idproduct',
      as: 'reviews',
    });

    products.belongsTo(models.subcategory, {
      foreignKey: 'subcategoryid',
      as: 'subcategory'
    });

    products.belongsTo(models.brand, {
      foreignKey: 'brandid',
      as: 'brand'
    });

    products.belongsTo(models.availability, {
      foreignKey: 'availabilityid',
      as: 'availability'
    });

    products.belongsTo(models.warranty, {
      foreignKey: 'warrantyid',
      as: 'warranty'
    });

    products.belongsTo(models.condition, {
      foreignKey: 'conditionid',
      as: 'condition'
    });

    products.belongsTo(models.supplier, {
      foreignKey: 'supplierid',
      as: 'supplier'
    });

  };
  return products;
};