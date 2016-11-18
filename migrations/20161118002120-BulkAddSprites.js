'use strict';

var Sprites = require('../models')["Sprites"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Sprites.bulkCreate([
      {
        Image: null, 
        ImagePreview: "https://www.dropbox.com/s/9099ww49b5qagjc/megaman_jump.jpg?dl=0",
        SpriteSheet: "https://www.dropbox.com/s/6421uv0ct5wrise/megaman_running.jpg?dl=0",
        ImageName: "Megaman",
        Description: "A Megaman spritesheet with 8 poses.",
        Rating: 10.0, 
        UserSubmitted: false, 
        Private: false, 
        Type: "Character"
      }, 
      {
        Image: null, 
        ImagePreview: "https://www.dropbox.com/s/g0zvx3h699ttva7/1.png?dl=0",
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
        ImagePreview: "https://www.dropbox.com/s/9sld3hjf83cchlv/mountain_full_background1.png?dl=0",
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
        ImagePreview: "https://www.dropbox.com/s/3ik52id970slgwo/house.png?dl=0",
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
        ImagePreview: "https://www.dropbox.com/s/5vyqw23xxcodoyz/old-tree.png?dl=0",
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
