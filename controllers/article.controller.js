const Article = require('../models/article.model');
const { body,check, validationResult } = require('express-validator');

const article_controller = {
  index: async(req, res) => {
    Article.load_db(5);
    return await Article.index();
  }
}

module.exports = article_controller;