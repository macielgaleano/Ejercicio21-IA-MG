var faker = require("faker");
faker.locale = "es_MX";

const db_LoadArticles = async (Article, quantity) => {
  let articles2 = [];
  let articles_count = await Article.count({});
  if (await !articles_count) {
    for (let i = 0; i < quantity; i++) {
      articles2.push({
        titulo: faker.name.title(),
        contenido: faker.lorem.words(100),
        fecha_creacion: faker.date.recent(),
        imagen: `${faker.image.nature()}?random=${Date.now()}`,
        AuthorId: faker.random.arrayElement([1, 2, 3]),
      });
    }
    Article.bulkCreate(articles2);
  }
};

const db_LoadAuthors = async (Author, quantity) => {
  {
    let autores = [];
    let authors_count = await Author.count({});
    if (await !authors_count) {
      for (let i = 0; i < quantity; i++) {
        autores.push({
          nombre: faker.name.firstName(),
          apellido: faker.name.lastName(),
          email: faker.internet.email(),
        });
      }
      Author.bulkCreate(autores);
    }
  }
};

const db_LoadComments = async (Comment, quantity) => {
  {
    let comments = [];
    let comments_count = await Comment.count({});
    if (await !comments_count) {
      for (let i = 0; i < quantity; i++) {
        comments.push({
          comentario: faker.lorem.words(15),
          autor_comentario: faker.name.firstName(), // + faker.name.lastName(),
          fecha_comentario: faker.date.recent(),
          ArticleId: faker.random.arrayElement([1, 2, 3]),
        });
      }
      Comment.bulkCreate(comments);
    }
  }
};

module.exports = { db_LoadArticles, db_LoadAuthors, db_LoadComments };
