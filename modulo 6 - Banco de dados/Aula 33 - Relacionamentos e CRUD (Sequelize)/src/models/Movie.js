module.exports = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: dataTypes.STRING
    },

    rating: {
      type: dataTypes.STRING
    },

    length: {
      type: dataTypes.INTEGER
    },

    awards: {
      type: dataTypes.INTEGER
    },

    release_date: {
      type: dataTypes.DATE
    },

    genre_id: {
      type: dataTypes.INTEGER
    }
  }

  const config = {
    tableName: 'movies',
    timestamps: false
  }

  const Movie = sequelize.define('Movie', cols, config);

  Movie.associate = (models) => {
    Movie.belongsTo(models.Genre, {
      as: 'genre', // movie.genre
      foreignKey: 'genre_id'
    });
  }

  return Movie
}