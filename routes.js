const article_controller = require("./controllers/article.controller");
module.exports = function(app){
  const article_controller = require('./controllers/article.controller');

  app.get('/' , (req,res) => {
    res.send(article_controller.index());
  })

 }