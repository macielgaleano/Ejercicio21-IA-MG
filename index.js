require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
const mysql2 = require("mysql2");
require("./models/author_sequalize.js");
require("./models/comment_sequalize.js");
const sequelize = require("./models/sequelize");
const routes = require("./routes.js");

app.set("view engine", "ejs");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("echoTestSequelize: Connected");
  })
  .catch((error) => {
    console.log("echoTestSequelizeError: ", error);
  });
routes(app);

app.listen(3000, function () {});
