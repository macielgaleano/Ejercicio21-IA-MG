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
  select: async (id) => {
    const selected = await Author.select(id);
    return selected;
  },
  modify: (id, nombre, apellido, email) => {
    Author.modify(id, nombre, apellido, email);
  },
};
