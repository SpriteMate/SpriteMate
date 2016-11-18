'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn(
      'Sprites',
      'ImageName',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Sprites', 'ImageName')
  }
};
