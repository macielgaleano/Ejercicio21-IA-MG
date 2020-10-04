const Article = (sequelize, DataTypes, Model) => {
  class Article extends Model {}
  Article.init(
    {
      titulo: DataTypes.STRING(100),
      contenido: DataTypes.STRING(2000),
      fecha_creacion: DataTypes.DATE,
      imagen: DataTypes.STRING(10000),
    },
    {
      sequelize,
      modelName: "Article",
      timestamps: false,
    }
  );

  return Article;
};

module.exports = Article;
