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
  author_selected: async (id_autor) => {
    const autorSerched = await Author.findAll({
      where: {
        id: id_autor
      }
    });
    return await autorSerched;
  },

  load_authors: (quantity) => {
    let autores = [];

    for (let i = 1 ; i < quantity-1; i++) {
      autores.push({
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        email: faker.internet.email()
       
      });
    }
    Author.bulkCreate(autores);
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
    //proximo
  },
};
