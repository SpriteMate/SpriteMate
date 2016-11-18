'use strict';

var Sprites = require('../models')["Sprites"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Sprites.bulkCreate([
      {
        Image: null, 
        ImagePreview: "http://imgur.com/4ce5hOW",
        SpriteSheet: "http://imgur.com/diHmAf4",
        ImageName: "Megaman",
        Description: "A Megaman spritesheet with 8 poses.",
        Rating: 10.0, 
        UserSubmitted: false, 
        Private: false, 
        Type: "Character"
      }, 
      {
        Image: null, 
        ImagePreview: "http://imgur.com/8sH4HHu",
        SpriteSheet: null,
        ImageName: "Red Turtle",
        Description: "A single red turtle sprite with no sprite sheet.",
        Rating: 3.2, 
        UserSubmitted: false, 
        Private: false, 
        Type: "Character"
      }, 
      {
        Image: null, 
        ImagePreview: "http://imgur.com/xNcBZNl",
        SpriteSheet: null,
        ImageName: "Mountain Background",
        Description: "A static background with some pretty mountains.",
        Rating: 8.9, 
        UserSubmitted: false, 
        Private: false, 
        Type: "Background"
      }, 
      {
        Image: null, 
        ImagePreview: "http://imgur.com/N7oWRel",
        SpriteSheet: null,
        ImageName: "House",
        Description: "A static image of a house.",
        Rating: 7, 
        UserSubmitted: false, 
        Private: false, 
        Type: "Asset"
      }, 
      {
        Image: null, 
        ImagePreview: "http://imgur.com/0r3WJRX",
        SpriteSheet: null,
        ImageName: "Withered Tree",
        Description: "A static image of a withered tree.",
        Rating: 4, 
        UserSubmitted: false, 
        Private: false, 
        Type: "Asset"
      } 
    ])
  },

  down: function (queryInterface, Sequelize) {
    return Sprites.destroy({where:{UserSubmitted: false}})
  }
};
