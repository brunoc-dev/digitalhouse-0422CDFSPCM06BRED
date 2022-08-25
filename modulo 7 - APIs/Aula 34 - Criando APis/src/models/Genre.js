module.exports = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: dataTypes.STRING
    },

    ranking: {
      type: dataTypes.INTEGER
    },

    active: {
      type: dataTypes.BOOLEAN
    }
  }

  const config = {
    tableName: 'genres',
    timestamps: false
  }

  const Genre = sequelize.define('Genre', cols, config);

  Genre.associate = (models) => {
    Genre.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'genre_id'
    });
  }

  return Genre
}