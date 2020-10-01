const express = require('express');
// const fetch = require("node-fetch");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes.js')(app);
app.use(express.static("public"));
const config = require('./configs/db_config');
const mysql2 = require('mysql2');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./models/sequelize');

app.set('view engine', 'ejs');

app.listen(3000, function (){
  sequelize.sync({force: false})
  .then(() => {
    console.log('echoTestSequelize: Connected')
  })
  .catch(error => {
    console.log('echoTestSequelizeError: ', error)
  })
});

