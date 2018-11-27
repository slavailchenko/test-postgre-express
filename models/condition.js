'use strict';
module.exports = (sequelize, DataTypes) => {
  const condition = sequelize.define('condition', {
    state: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  condition.associate = function(models) {

    condition.hasMany(models.products, {
      foreignKey: 'condition_id',
      as: 'conditions',
    });
  };
  return condition;
};