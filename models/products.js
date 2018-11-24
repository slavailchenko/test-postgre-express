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
      as: 'subcategories'
    });

    products.belongsTo(models.brand, {
      foreignKey: 'brandid',
      as: 'brands'
    });

    products.belongsTo(models.availability, {
      foreignKey: 'availabilityid',
      as: 'availabilities'
    });

    products.belongsTo(models.warranty, {
      foreignKey: 'warrantyid',
      as: 'warranties'
    });

    products.belongsTo(models.condition, {
      foreignKey: 'conditionid',
      as: 'conditions'
    });

    products.belongsTo(models.supplier, {
      foreignKey: 'supplierid',
      as: 'suppliers'
    });

  };
  return products;
};