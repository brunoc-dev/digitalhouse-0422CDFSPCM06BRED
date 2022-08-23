const { Movie, Genre } = require('../models');

module.exports = {
  async list (req, res) {
    const movies = await Movie.findAll();

    return res.render('moviesList', { movies });
  },

  async detail (req, res) {
    const { id } = req.params;

    const movie = await Movie.findOne({
      include: [
        { model: Genre, as: 'genre', require: true }
      ],

      where: { id }
    })

    return res.render('moviesDetail', { movie });
  }
}