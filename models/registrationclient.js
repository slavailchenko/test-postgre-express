'use strict';
module.exports = (sequelize, DataTypes) => {
  const registrationclient = sequelize.define('registrationclient', {
    status: DataTypes.STRING
  }, {});

  registrationclient.associate = function(models) {
  	registrationclient.hasMany(models.clients, {
      foreignKey: 'id_registration',
      as: 'clients',
    });
  };
  
  return registrationclient;
};