const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Author extends Model {}
Author.init(
  {
    nombre: DataTypes.STRING(100),
    apellido: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
  },
  {
    sequelize,
    modelName: "autor",
    timestamps: false,
  }
);

module.exports = Author;
