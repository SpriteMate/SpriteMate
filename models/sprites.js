'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sprites = sequelize.define('Sprites', {
    Image: DataTypes.STRING,
    ImageName: DataTypes.STRING,
    Rating: DataTypes.DECIMAL,
    UserSubmitted: DataTypes.BOOLEAN,
    Private: DataTypes.BOOLEAN,
    Type: DataTypes.STRING,
    ImagePreview: DataTypes.STRING,
    Description: DataTypes.STRING,
    SpriteSheet: DataTypes.STRING

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sprites;
};