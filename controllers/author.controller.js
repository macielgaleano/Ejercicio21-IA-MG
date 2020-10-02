const Author = require("../models/author.model");

module.exports = {
  index: async () => {
    const autores = await Author.index();
    return autores;
  },
  create: (nombre, apellido, email) => {
    Author.create(nombre, apellido, email);
  },
  destroy: (id) => Author.destroy(id),
  modify: (id, nombre, apellido, email) => {
    Author.modify(id, nombre, apellido, email);
  },
};
