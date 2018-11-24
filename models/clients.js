'use strict';
module.exports = (sequelize, DataTypes) => {
  const clients = sequelize.define('clients', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    adress: DataTypes.STRING,
    email: DataTypes.STRING,
    id_rate: DataTypes.INTEGER,
    id_registration: DataTypes.INTEGER,
    date_regastration: DataTypes.DATEONLY,
    exp_date_regastration: DataTypes.DATEONLY
  }, {});

  clients.associate = function(models) {

    clients.hasMany(models.orders, {
      foreignKey: 'client_id',
      as: 'orders',
    });

    clients.hasMany(models.reviews, {
      foreignKey: 'id_client',
      as: 'reviews',
    });

    clients.belongsTo(models.registrationclient, {
      foreignKey: 'id_registration',
      onDelete: 'CASCADE',
      as: 'registrationclients'
    });

    clients.belongsTo(models.rateclient, {
      foreignKey: 'id_rate',
      onDelete: 'CASCADE',
      as: 'rateclients'
    });

};
  return clients;
};