'use strict';
module.exports = (sequelize, DataTypes) => {
  const statusorder = sequelize.define('statusorder', {
    is_fulfilled: DataTypes.BOOLEAN
  }, {});

  statusorder.associate = function(models) {

  	statusorder.hasMany(models.orders, {
  		foreignKey: 'id_status',
  		as: 'orders',
  	});

  };
  return statusorder;
};