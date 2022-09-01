module.exports = (sequelize, DataType) => {
  const Livro = sequelize.define(
    "Livro",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: DataType.STRING,
        allowNull: false,
      },
      quantidade_paginas: {
        allowNull: false,
        type: DataType.INTEGER,
      },
      autor: {
        type: DataType.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        allowNull: false,
        type: DataType.INTEGER,
      },
      estoque: {
        allowNull: false,
        type: DataType.INTEGER,
      },
    },
    {
      tableName: "livros",
      timestamps: false
    }
  );

  return Livro;
};
