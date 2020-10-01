const Article = require('../models/article.model');
const { body,check, validationResult } = require('express-validator');

const article_controller = {
  
  index: async (req, res) => {
    res.json(await Article.index())
  }
}

module.exports = article_controller;