require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  'EJ22',
  'root',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
