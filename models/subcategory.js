'use strict';
module.exports = (sequelize, DataTypes) => {
  const subcategory = sequelize.define('subcategory', {
    idcategory: DataTypes.INTEGER,
    namesubcategory: DataTypes.STRING,
    descriptionsubcategory: DataTypes.STRING
  }, {});

  subcategory.associate = function(models) {

  	subcategory.belongsTo(models.category, {
      foreignKey: 'idcategory',
      as: 'categories'
    });

  };
  return subcategory;
};