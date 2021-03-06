'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn(
      'Sprites',
      'SpriteSheet',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Sprites', 'SpriteSheet')
  }
};