'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    namecategory: DataTypes.STRING,
    descriptioncategory: DataTypes.STRING
  }, {});
  category.associate = function(models) {

    category.hasMany(models.subcategory, {
      foreignKey: 'idcategory',
      as: 'subcategory',
    });
  };
  return category;
};