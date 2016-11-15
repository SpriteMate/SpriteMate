'use strict';

var Users = require('../models')["Users"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Users.bulkCreate([
      {
        FullName: "Marty McFly", 
        UserName: "FlyGuySays", 
        Email: "flyguy@aol.com", 
        Password: "marty1", 
        AverageRating: 8.5
      }, 
      {
        FullName: "Yosemite Sam", 
        UserName: "RealOS", 
        Email: "yosemite@gmail.com", 
        Password: "passwerd", 
        AverageRating: 6.3
      }, 
      {
        FullName: "Greg Considine", 
        UserName: "Greggy23", 
        Email: "gconsidine@gmail.com", 
        Password: "trilogy", 
        AverageRating: 7.0
      }, 
      {
        FullName: "Darien Lombardi", 
        UserName: "DareBear", 
        Email: "darealest@gmail.com", 
        Password: "darealest", 
        AverageRating: 4.7
      }, 
      {
        FullName: "Nick Bartlet", 
        UserName: "RaiseTheBar", 
        Email: "nbartlet@gmail.com", 
        Password: "marketplace", 
        AverageRating: 10.0
      } 
    ])
  },

  down: function (queryInterface, Sequelize) {
    return Users.destroy({where:{UserName: [
      "FlyGuySays",
      "RealOS",
      "Greggy23",
      "DareBear",
      "RaiseTheBar"
    ]}})
  }
};
