'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn(
      'Sprites',
      'ImagePreview',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Sprites', 'ImagePreview')
  }
};
