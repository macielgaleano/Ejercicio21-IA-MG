const Comment = (sequelize, DataTypes, Model) => {
  class Comment extends Model {}
  Comment.init(
    {
      comentario: { type: DataTypes.STRING(200), allowNull: false },

      autor_comentario: { type: DataTypes.STRING(100), allowNull: false },
      fecha_comentario: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Comment",

      timestamps: false,
    }
  );
  return Comment;
};

module.exports = Comment;
