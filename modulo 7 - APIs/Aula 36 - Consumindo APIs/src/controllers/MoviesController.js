const MoviesService = require('../services/MoviesService')

module.exports = {
  async moviesByRate (req, res) {
    const ratedMovies = await MoviesService.getMoviesByRate()
    // res.render('moviesByRate', { ratedMovies })
    res.render('moviesByRate', { ratedMovies })
  }
}