'use strict';
module.exports = (sequelize, DataTypes) => {
  const supplier = sequelize.define('supplier', {
    company: DataTypes.STRING,
    manager: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  supplier.associate = function(models) {

    supplier.hasMany(models.products, {
      foreignKey: 'supplier_id',
      as: 'products',
    });
  
  };
  return supplier;
};