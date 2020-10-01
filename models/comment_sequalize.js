const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Comment extends Model {}
Comment.init(
  {
    comentario: { type: DataTypes.STRING(100), allowNull: false },
    id_articulo: { type: DataTypes.INTEGER, allowNull: false },
    autor_comentario: { type: DataTypes.STRING(100), allowNull: false },
    fecha_comentario: { type: DataTypes.DATE, allowNull: false },
  },
  {
    sequelize,
    modelName: "Comment",
    timestamps: false,
  }
);

module.exports = Comment;
