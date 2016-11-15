'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Sprites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Image: {
        type: Sequelize.STRING
      },
      Rating: {
        type: Sequelize.DECIMAL
      },
      UserSubmitted: {
        type: Sequelize.BOOLEAN
      },
      Private: {
        type: Sequelize.BOOLEAN
      },
      Type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Sprites');
  }
};