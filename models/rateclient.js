'use strict';
module.exports = (sequelize, DataTypes) => {
  const rateclient = sequelize.define('rateclient', {
    status: DataTypes.STRING,
    discount: DataTypes.NUMERIC
  }, {});

  rateclient.associate = function(models) {

    rateclient.hasMany(models.clients, {
      foreignKey: 'idrate',
      as: 'clients',
    });
  
  };
  return rateclient;
};