require('dotenv').config();
const express = require('express');
// const fetch = require("node-fetch");
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes.js')(app);
app.use(express.static("public"));
const mysql2 = require('mysql2');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./models/sequelize');

app.set('view engine', 'ejs');

app.listen(process.env.APP_PORT, function (){
  sequelize.sync({force: false})
  .then(() => {
    console.log('echoTestSequelize: Connected')
  })
  .catch(error => {
    console.log('echoTestSequelizeError: ', error)
  })
});

