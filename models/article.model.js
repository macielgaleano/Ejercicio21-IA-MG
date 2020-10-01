const mysql = require('mysql2');
const axios = require('axios');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
var faker = require('faker');
faker.locale = "es_MX";
const Article = require('./articles_sequalize');

module.exports = {
  index: async(req,res) => {
    const articles = await Article.findAll({
      // attributes:[ 'id_articulo'] 
    })
    console.log(articles)
    return articles;
  },
  load_db: (quantity) => {
    let articles = [];

    for (let i = 0; i < quantity; i++) {
      articles.push({
        id_articulo: i,
        titulo: faker.name.title(),
        contenido: faker.lorem.words(100),
        fecha_creacion: faker.time.recent(),
        imagen: faker.image.dataUri(),
        id_autor: () => {
          return Math.round(Math.random() * (5 - 1) + 1);
       },
      });
    }

    User.bulkCreate(articles);
  },
  create: () => {
    Article.create({

    })
  },
  
}

