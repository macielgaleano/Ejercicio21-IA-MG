const ArticleController = require("./controllers/article_controller");
const AuthorController = require("./controllers/author_controller");
const CommentController = require("./controllers/comment_controller");

const routes = (app) => {
  app.get("/", async (req, res) => {
    const articles = await ArticleController.findAll({
      include: AuthorController,
      order: ["fecha_creacion"],
    });
    res.render("home_view", { articles });
  });

  app.get("/articulo/:id", async (req, res) => {
    const article = await ArticleController.findOne({
      where: {
        id: req.params.id,
      },
      include: AuthorController,
    });
    const comments = await CommentController.findAll({
      where: {
        ArticleId: req.params.id,
      },
    });
    const author = article.Author;

    res.render("article_view", { article, author, comments });
  });

  app.get("/admin", (req, res) => {
    //res.render("admin_view");
  });
};

module.exports = {
  routes,
};
