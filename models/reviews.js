'use strict';
module.exports = (sequelize, DataTypes) => {
  const reviews = sequelize.define('reviews', {
    idclient: DataTypes.INTEGER,
    idorder: DataTypes.INTEGER,
    idproduct: DataTypes.INTEGER,
    title: DataTypes.STRING,
    descriprion: DataTypes.STRING
  }, {});

  reviews.associate = function(models) {

    reviews.belongsTo(models.clients, {
      foreignKey: 'idclient',
      as: 'clients'
    });

    reviews.belongsTo(models.orders, {
      foreignKey: 'idorder',
      as: 'orders'
    });

    reviews.belongsTo(models.products, {
      foreignKey: 'idproduct',
      as: 'products'
    });

  };
  return reviews;
};