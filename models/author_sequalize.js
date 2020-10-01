const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Author extends Model {}
Author.init(
  {
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(100), allowNull: true },
  },
  {
    sequelize,
    modelName: "Author",
    timestamps: false,
  }
);

module.exports = Author;
