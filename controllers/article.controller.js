const Article = require("../models/article.model");
const { body, check, validationResult } = require("express-validator");

const article_controller = {
  index: async (req, res) => {
    Article.load_db(5);
    return await Article.index();
  },

  destroy: (id) => Article.destroy(id),
  select: async (id) => {
    const selected = await Article.select(id);
    return selected;
  },
  modify: (id, titulo, contenido, fecha_creacion, imagen, id_autor) => {
    Article.modify(id, titulo, contenido, fecha_creacion, imagen, id_autor);
  },
};

module.exports = article_controller;
