const article_controller = require("./controllers/article.controller");
const article_model = require("./models/article.model");


module.exports = function(app){

  app.get('/', (req,res) => {
    res.redirect('/articulos');
  });

  app.get('/articulos', async(req,res) => {
    res.render('pages/home.view.ejs', {articles:  await article_controller.index(req,res) })
  })
  
 }