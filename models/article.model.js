const mysql = require("mysql2");
const axios = require("axios");
const { Sequelize, Model, DataTypes, Op } = require("sequelize");
const sequelize = require("./sequelize");
var faker = require("faker");
faker.locale = "es_MX";
const Article = require("./articles_sequalize");
const { random } = require("./sequelize");

module.exports = {
  index: async (req, res) => {
    const articles = await Article.findAll({
      // where: {
      // }
    });
    return articles;
  },

  load_db: (quantity) => {
    let articles2 = [];

    for (let i = 1; i < quantity - 1; i++) {
      articles2.push({
        id_articulo: faker.random.number(),
        titulo: faker.name.title(),
        contenido: faker.lorem.words(100),
        fecha_creacion: faker.date.recent(),
        imagen: `${faker.image.nature()}?random=${Date.now()}`,
        id_autor: faker.random.arrayElement([1, 2, 3]),
      });
    }
    Article.bulkCreate(articles2);
  },

  create: () => {
    Article.create({});
  },

  destroy: (id) => {
    Article.destroy({
      where: {
        id: id,
      },
    });
  },

  select: async (id) => {
    const selected = await Article.findAll({
      where: {
        id: id,
      },
    });

    return selected[0].dataValues;
  },

  modify: async (id, titulo, contenido, fecha_creacion, imagen, id_autor) => {
    await Article.update(
      {
        titulo: titulo,
        contenido: contenido,
        fecha_creacion: fecha_creacion,
        imagen: imagen,
        id_autor: id_autor,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },
};
