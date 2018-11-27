'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name_category: DataTypes.STRING,
    description_category: DataTypes.STRING
  }, {});
  
  category.associate = function(models) {

    category.hasMany(models.subcategory, {
      foreignKey: 'id_category',
      as: 'sub_categories',
    });
  };
  return category;
};