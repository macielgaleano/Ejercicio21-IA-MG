const Author = require("../models/author.model");

module.exports = {
  index: async (req, res) => {
    Author.load_authors(5);
    const autores = await Author.index();
    return autores;
  },
  create: (nombre, apellido, email) => {
    Author.create(nombre, apellido, email);
  },
  destroy: (id) => Author.destroy(id),
  authorSelected: async (id_autor) => {
    let response = await Author.author_selected(id_autor);
    return await response;
  },
  modify: (id, nombre, apellido, email) => {
    Author.modify(id, nombre, apellido, email);
  },
};
