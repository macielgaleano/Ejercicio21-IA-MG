const { param } = require("express-validator");
const article_controller = require("./controllers/article.controller");
const article_model = require("./models/article.model");
const Author = require("./controllers/author.controller");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.redirect("/articulos");
  });

  app.get("/articulos", async (req, res) => {
    res.render("pages/home.view.ejs", {
      articles: await article_controller.index(req, res),
      authors: await Author.index(req,res)
    });
  });

  app.get("/articulo/:id", async (req, res) => {
    let articles = await article_controller.index(req, res);
    for (let i = 0; i < articles.length; i++) {
      if (Number(articles[i].id) === Number(req.params.id)) {
        res.render("pages/article.view.ejs", { 
          article: articles[i],
          author:  await Author.authorSelected( articles[i].id_autor)
           });
        console.log(await Author.authorSelected( articles[i].id_autor))
      }
    }
  });
  //  let article = await articles.find((item,index,arr) => {item.i === req.params.id})

  app.get('/dropdown', async (req,res) => {
    res.render("partial/dropdown.view.ejs", {
      articles: await article_controller.index(req, res),
      authors: await Author.index(req,res)
    });
  })

  app.get("/autor/:id", async (req, res) => {
    Author.create("Juan", "Rulfo", "juan@gmail.com");
    Author.destroy(req.params.id);
    const autores = await Author.index();
    res.send(autores);
  });
};
