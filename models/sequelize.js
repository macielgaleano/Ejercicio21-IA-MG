require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("EJ22", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
