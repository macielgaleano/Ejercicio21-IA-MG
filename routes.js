const { param } = require("express-validator");
const article_controller = require("./controllers/article.controller");
const Article = article_controller;
const Author = require("./controllers/author.controller");
const formidable = require("formidable");
const moment = require("moment");

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
          author: await Author.authorSelected(articles[i].id_autor),
        });
        console.log(await Author.authorSelected(articles[i].id_autor));
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
    res.render("partial/modify.view.ejs", {
      article: article,
      author: await Author.select(article.id_autor),
    });
  });

  app.get("/dropdown/:id/eliminar", async (req, res) => {
    const article = await Article.select(req.params.id);
    await Article.destroy(article.id);
    res.redirect("/dropdown");
  });

  app.post("/dropdown/:id/modificar", async (req, res) => {
    /* const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/public/img",
      keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
      res.redirect(`/dropdown/${req.params.id}/modificar`);
    }); */
    const fecha_creacion = moment().format();

    const { titulo, contenido } = req.body;

    await Article.modify(req.params.id, titulo, contenido, fecha_creacion);
    res.redirect(`/dropdown/${req.params.id}`);
  });

  app.get("/admin", async (req, res) => {
    res.render("pages/admin.view.ejs", {
      authors: await Author.index(),
    });
  });
};
