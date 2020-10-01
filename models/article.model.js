const mysql = require('mysql2');
const axios = require('axios');
const config = require('../configs/db_config');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Article = require('./articles_sequalize');

module.exports = {
  article_create: () => {
    Article.create({

    })
  },
  article_index: (req,res) => {
    Article.findAll()
    .then(users => users.json)
    .then(users => {
      return users
    })
    .catch(error => {
      return error
    })
  }
}

