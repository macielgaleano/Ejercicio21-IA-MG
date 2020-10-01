const Author = require("./author_sequalize");

module.exports = {
  index: function () {
    console.log("index");
  },

  destroy: (id) => {
    Author.destroy({
      where: {
        id_autor: id,
      },
    }).then(() => {
      console.log("¡Autor eliminado!");
    });
  },

  create: (nombre, apellido, email) => {
    Author.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
    })
      .then(console.log(`Se agrego ${autor} a la base!`))
      .catch(console.log("error"));
  },

  modify: function () {
    console.log("modify");
  },
};
