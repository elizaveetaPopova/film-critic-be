module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable('reviews', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: sequelize.STRING,
      rating: {
        type: sequelize.FLOAT,
        allowNull: false,
        defaultValue: 1,
      },
      movie_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'movies',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('reviews');
  },
};
