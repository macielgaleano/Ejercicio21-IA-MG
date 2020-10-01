const Author = require("./author_sequalize");
const faker = require("faker");

module.exports = {
  index: async () => {
    const autores = await Author.findAll();
    const data = [];
    autores.forEach(({ dataValues: { id, nombre, apellido } }) =>
      data.push({ id, nombre, apellido })
    );

    return data;
  },

  destroy: (id) => {
    Author.destroy({
      where: {
        id: id,
      },
    });
  },

  create: async (nombre, apellido, email) => {
    const autor = await Author.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
    });
    console.log(`Se agrego a ${autor.nombre} ${autor.apellido}`);
  },

  modify: function () {
    console.log("modify");
  },
};
