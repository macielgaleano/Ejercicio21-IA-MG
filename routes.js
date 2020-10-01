const { param } = require("express-validator");
const article_controller = require("./controllers/article.controller");
const article_model = require("./models/article.model");


module.exports = function(app){

  app.get('/', (req,res) => {
    res.redirect('/articulos');
  });

  app.get('/articulos', async(req,res) => {
    res.render('pages/home.view.ejs', {articles:  await article_controller.index(req,res) })
  })

  app.get('/articulo/:id', async(req,res) => {
    let articles = await article_controller.index(req,res);
    for (let i = 0; i < articles.length; i++) {
      if (Number(articles[i].id) === Number(req.params.id) ){
        console.log(articles[i]);
        res.render('pages/article.view.ejs', {article:  articles[i]})
      }
     
    }
    //  let article = await articles.find((item,index,arr) => {item.i === req.params.id})
  
 })

}