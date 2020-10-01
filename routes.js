const article_controller = require("./controllers/article.controller");
module.exports = function(app){
  const article_controller = require('./controllers/article.controller');

  app.get('/', article_controller.index);

 }