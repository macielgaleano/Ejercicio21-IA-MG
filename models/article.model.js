const mysql = require('mysql2');
const axios = require('axios');
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');
var faker = require('faker');
faker.locale = "es_MX";
const Article = require('./articles_sequalize');
const { random } = require('./sequelize');

module.exports = {
  index: async(req,res) => {
    const articles = await Article.findAll({
    })
    console.log(articles)
    return articles;
  },
  load_db: (quantity) => {
    let articles2 = [];

    for (let i = 1 ; i < quantity-1; i++) {
      articles2.push({
        id_articulo: faker.random.number() ,
        titulo: faker.name.title(),
        contenido: faker.lorem.words(100),
        fecha_creacion: faker.time.recent(),
        imagen: faker.image.people(),
        id_autor: faker.random.arrayElement([1,2,3,4,5]) 
       ,
      });
    }
    Article.bulkCreate(articles2);
  },
  create: () => {
    Article.create({

    })
  },
  
}

