const ArticleModel = require('../models/article.model');
const { body,check, validationResult } = require('express-validator');
const articleModel = require('../models/article.model');

const article_controller = {
  
  index: () => {
    articleModel.article_index()
  }
}

module.exports = article_controller;