require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_ej21", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
