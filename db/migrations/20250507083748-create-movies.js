module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: sequelize.STRING,
        allowNull: false,
      },
      description: sequelize.STRING,
      year: sequelize.INTEGER,
      poster_url: {
        type: sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('movies');
  },
};
