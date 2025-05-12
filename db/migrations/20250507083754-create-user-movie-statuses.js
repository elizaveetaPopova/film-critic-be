module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable('user_movie_statuses', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      status: {
        type: sequelize.ENUM('want_to_watch', 'watched'),
        allowNull: false,
        defaultValue: 'want_to_watch',
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
    return queryInterface.dropTable('user_movie_statuses');
  },
};
