'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    id_client: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    title: DataTypes.STRING,
    descriprion: DataTypes.STRING
  }, {});

  reviews.associate = function(models) {

    reviews.belongsTo(models.clients, {
      foreignKey: 'id_client',
      as: 'clients'
    });

    reviews.belongsTo(models.orders, {
      foreignKey: 'id_order',
      as: 'orders'
    });

    reviews.belongsTo(models.products, {
      foreignKey: 'id_product',
      as: 'products'
    });

  };
  return reviews;
};