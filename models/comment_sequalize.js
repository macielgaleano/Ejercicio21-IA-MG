const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Comment extends Model {}
Comment.init(
  {
    comentario: DataTypes.STRING(100),
    id_articulo: DataTypes.INTEGER,
    autor_comentario: DataTypes.STRING(100),
    fecha_comentario: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "comentario",
    timestamps: false,
  }
);

module.exports = Comment;
