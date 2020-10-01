const Author = require("../models/author.model");

module.exports = {
  create: (nombre, apellido, email) => {
    Author.create(nombre, apellido, email).then(console.log("Autor creado!"));
  },
};
