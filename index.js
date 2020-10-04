require("dotenv").config();
const {
  db_LoadArticles,
  db_LoadAuthors,
  db_LoadComments,
} = require("./seeder.js");
const express = require("express");
const { routes } = require("./routes");
const {
  sequelize,
  Sequelize,
  Article,
  Author,
  Comment,
} = require("./models/index");

const app = express();
const port = process.env.APP_PORT;

// Configuracion app
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));

// Sequelize
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tablas creadas!");
  })
  /// Cargo articulos a la tabla
  .then(() => db_LoadAuthors(Author, 5))
  .then(() => db_LoadArticles(Article, 5))
  .then(() => db_LoadComments(Comment, 5))
  .catch((error) => {
    console.log("echoTestSequelizeError: ", error);
  });

routes(app);

app.listen(port, () => console.log(`Servidor escuchando en puerto: ${port}`));
