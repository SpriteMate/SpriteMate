'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sprites = sequelize.define('Sprites', {
    Image: DataTypes.STRING,
    Rating: DataTypes.DECIMAL,
    UserSubmitted: DataTypes.BOOLEAN,
    Private: DataTypes.BOOLEAN,
    Type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sprites;
};