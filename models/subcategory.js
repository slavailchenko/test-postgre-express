'use strict';
module.exports = (sequelize, DataTypes) => {
  const subcategory = sequelize.define('subcategory', {
    id_category: DataTypes.INTEGER,
    name_sub_category: DataTypes.STRING,
    description_subcategory: DataTypes.STRING
  }, {});

  subcategory.associate = function(models) {

  	subcategory.belongsTo(models.category, {
      foreignKey: 'id_category',
      as: 'categories'
    });

  };
  return subcategory;
};