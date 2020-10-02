require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./models/sequelize");
const mysql2 = require("mysql2");
require("./models/author_sequalize.js");
require("./models/comment_sequalize.js");
const routes = require("./routes.js");

app.set("view engine", "ejs");

routes(app);
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("echoTestSequelize: Connected");
  })
  .catch((error) => {
    console.log("echoTestSequelizeError: ", error);
  });
routes(app);

app.listen(process.env.APP_PORT, function () {});
