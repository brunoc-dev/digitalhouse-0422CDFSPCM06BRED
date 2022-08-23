const { Genre, Movie } = require('../models');

module.exports = {
  async list (req, res) {
    const genres = await Genre.findAll();

    res.render('genresList', { genres });
  },

  async detail (req, res) {
    const { id } = req.params;

    const genre = await Genre.findOne({
      include: [
        {
          model: Movie,
          as: 'movies',
          required: false
        }
      ],

      where: { id }
    });

    res.render('genresDetail', { genre });
  }
}