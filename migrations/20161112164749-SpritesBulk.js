'use strict';

var Sprites = require('../models')["Sprites"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Sprites.bulkCreate([
      {
        Image: "../public/assets/images/megaman_jump.jpg", 
        Rating: null, 
        UserSubmitted: false, 
        Private: false, 
        Type: "character"
      }, 
      {
        Image: "../public/assets/images/mountain_background/mountain_full_background1.png", 
        Rating: null, 
        UserSubmitted: false, 
        Private: false, 
        Type: "background"
      }, 
      {
        Image: "../public/assets/images/house.png", 
        Rating: null, 
        UserSubmitted: false, 
        Private: false, 
        Type: "asset"
      }, 
      {
        Image: "../public/assets/images/old-tree.png", 
        Rating: null, 
        UserSubmitted: false, 
        Private: false, 
        Type: "asset"
      }, 
      {
        Image: "../public/assets/images/red_turtle/1.png", 
        Rating: null, 
        UserSubmitted: false, 
        Private: false, 
        Type: "character"
      } 
    ])
  },

  down: function (queryInterface, Sequelize) {
    return Sprites.destroy({where:{UserSubmitted: false}})
  }
};
