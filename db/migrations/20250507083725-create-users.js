module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: sequelize.ENUM('admin', 'user', 'moderator'),
        defaultValue: 'user',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
