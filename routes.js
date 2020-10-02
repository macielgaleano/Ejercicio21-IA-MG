const { param } = require("express-validator");
const article_controller = require("./controllers/article.controller");
const Article = article_controller;
const Author = require("./controllers/author.controller");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.redirect("/articulos");
  });

  app.get("/articulos", async (req, res) => {
    res.render("pages/home.view.ejs", {
      articles: await article_controller.index(req, res),
      authors: await Author.index(req, res),
    });
  });

  app.get("/articulo/:id", async (req, res) => {
    let articles = await article_controller.index(req, res);
    for (let i = 0; i < articles.length; i++) {
      if (Number(articles[i].id) === Number(req.params.id)) {
        res.render("pages/article.view.ejs", {
          article: articles[i],
          author: await Author.select(articles[i].id_autor),
        });
        console.log(await Author.select(articles[i].id_autor));
      }
    }
  });
  
  app.get("/dropdown", async (req, res) => {
    res.render("partial/dropdown.view.ejs", {
      articles: await article_controller.index(req, res),
      authors: await Author.index(req, res),
    });
  });

  app.get("/dropdown/:id", async (req, res) => {
    const article = await Article.select(req.params.id);
    res.render("partial/delete.view.ejs", {
      article: article,
      author: await Author.select(article.id_autor),
    });
  });

  app.get("/dropdown/:id/eliminar", async (req, res) => {
    const article = await Article.select(req.params.id);
    await Article.destroy(article.id);

    res.redirect("/dropdown");
  });

  app.get('/admin', async (req,res) => {
    res.render("pages/admin.view.ejs", {
      authors: await Author.index()
    })
  })

  app.post('/admin/crearAutor', async (req,res) => {
    console.log(req.body);
    Author.create(req.body.name,req.body.surname,req.body.email);
    res.redirect('/admin')
  })

  app.post('/admin/crear',  (req,res) => {
    console.log(req.body);
  })

};


