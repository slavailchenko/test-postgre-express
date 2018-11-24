'use strict';
module.exports = (sequelize, DataTypes) => {
  const availability = sequelize.define('availability', {
    status: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  availability.associate = function(models) {
    availability.hasMany(models.products, {
      foreignKey: 'availabilityid',
      as: 'availabilities',
    });
  };
  return availability;
};