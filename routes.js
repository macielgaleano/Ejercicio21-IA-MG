const article_controller = require("./controllers/article.controller");
const article_model = require("./models/article.model");


module.exports = function(app){

  app.get('/', (req,res) => {
    res.redirect('/articulos');
  });

  app.get('/articulos', (req,res) => {
    article_controller.index(req,res);
  })
 }