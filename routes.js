const article_controller = require("./controllers/article.controller");
const Author = require("./controllers/author.controller");

module.exports = function routes(app) {
  app.get("/", article_controller.index);
  app.get("/autor", (req, res) => {
    Author.create("Juan", "Rulfo", "juan@rulfo.com");
    res.send("Nuevo autor");
  });
};
