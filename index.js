const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./routes.js')(app);
app.use(express.static("public"));
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./models/sequelize');

app.set('view engine', 'ejs');

app.listen(4000, function (){
  sequelize.sync({force: true})
  .then(() => {
    console.log('echoTestSequelize: Connected')
  })
  .catch(error => {
    console.log('echoTestSequelizeError: ', error)
  })
});

