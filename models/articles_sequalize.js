const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Article extends Model {}
Article.init(
  {
    titulo: DataTypes.STRING(100),
    contenido: DataTypes.STRING(2000),
    fecha_creacion: DataTypes.DATE,
    imagen: DataTypes.STRING(10000),
    id_autor: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "articulo",
    timestamps: false,
  }
);

module.exports = Article;
