'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('clients', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING,
    adress: DataTypes.STRING,
    email: DataTypes.STRING,
    idrate: DataTypes.INTEGER,
    idregistration: DataTypes.INTEGER,
    dateregastration: DataTypes.DATE,
    expdateregastration: DataTypes.DATE
  }, {});

  clients.associate = function(models) {

    clients.hasMany(models.orders, {
      foreignKey: 'clientid',
      as: 'orders',
    });

    clients.hasMany(models.reviews, {
      foreignKey: 'idclient',
      as: 'reviews',
    });

    clients.belongsTo(models.registrationclient, {
      foreignKey: 'idregistration',
      as: 'registrationclient'
    });

    clients.belongsTo(models.rateclient, {
      foreignKey: 'idrate',
      as: 'rateclient'
    });

};
  return clients;
};