const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'test', // Database name
  process.env.DB_USER || 'root', // Username
  process.env.DB_PASS || 'root', // Password
  {
    host: process.env.DB_HOST || 'localhost', // Database host
    dialect: 'mysql',
  }
);

module.exports = sequelize;
