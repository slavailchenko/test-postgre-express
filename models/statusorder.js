'use strict';
module.exports = (sequelize, DataTypes) => {
  const statusorder = sequelize.define('statusorder', {
    isfulfilled: DataTypes.BOOLEAN
  }, {});

  statusorder.associate = function(models) {

  	statusorder.hasMany(models.orders, {
  		foreignKey: 'idstatus',
  		as: 'orders',
  	});

  };
  return statusorder;
};