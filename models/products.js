'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    sub_category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    article: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    availability_id: DataTypes.INTEGER,
    warranty_id: DataTypes.INTEGER,
    condition_id: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    indexes: [{
      type: 'STRING',
      name: 'products_title_idx',
      fields: ['title', 'article']
    }]
  });

  products.associate = function(models) {

    products.hasMany(models.order_products, {
      foreignKey: 'product_id',
      as: 'order_products',
    });

    products.hasMany(models.reviews, {
      foreignKey: 'id_product',
      as: 'reviews',
    });

    products.belongsTo(models.subcategory, {
      foreignKey: 'sub_category_id',
      as: 'subcategories'
    });

    products.belongsTo(models.brand, {
      foreignKey: 'brand_id',
      as: 'brands'
    });

    products.belongsTo(models.availability, {
      foreignKey: 'availability_id',
      as: 'availabilities'
    });

    products.belongsTo(models.warranty, {
      foreignKey: 'warranty_id',
      as: 'warranties'
    });

    products.belongsTo(models.condition, {
      foreignKey: 'condition_id',
      as: 'conditions'
    });

    products.belongsTo(models.supplier, {
      foreignKey: 'supplier_id',
      as: 'suppliers'
    });

  };
  return products;
};