module.exports = function(app){
  const ArticleModel = require('../models/article.model');
  const { body,check, validationResult } = require('express-validator');

  app.get('/' , (req,res) => {
    console.log(ArticleModel.article_index());
    res.send(ArticleModel.article_index());
  })

 }