const mysql = require('mysql2');
const axios = require('axios');
const config = require('../configs/db_config');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Article = require('./articles_sequalize');

module.exports = {
  create: () => {
    Article.create({

    })
  },
  index: async(req,res) => {
    const articles = await Article.findAll({
      // attributes:[ 'id_articulo'] 
    })
    console.log(articles)
    return articles;
  }
}

