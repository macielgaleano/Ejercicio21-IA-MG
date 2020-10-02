const Author = require("./author_sequalize");
const faker = require("faker");
faker.locale = "es_MX";

module.exports = {
  index: async () => {
    const autores = await Author.findAll();
    const data = [];
    autores.forEach(({ dataValues: { id, nombre, apellido } }) =>
      data.push({ id, nombre, apellido })
    );
    return data;
  },
  select: async (id) => {
    const selected = await Author.findAll({
      where: {
        id: id,
      },
    });

    return selected[0].dataValues;
  },

  load_authors: async (quantity) => {
    let autores = [];
    let authors_count = await Author.count({});
    console.log(authors_count);
    if(await !authors_count) {
      for (let i = 1; i < quantity - 1; i++) {
        autores.push({
          nombre: faker.name.firstName(),
          apellido: faker.name.lastName(),
          email: faker.internet.email(),
        });
      }
      Author.bulkCreate(autores);
    }
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

  modify: async (id, nombre, apellido, email) => {
    await Author.update(
      {
        nombre: nombre,
        apellido: apellido,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },
};
