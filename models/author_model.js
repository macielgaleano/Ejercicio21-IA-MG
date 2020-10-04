const Author = (sequelize, DataTypes, Model) => {
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
  return Author;
};

module.exports = Author;
