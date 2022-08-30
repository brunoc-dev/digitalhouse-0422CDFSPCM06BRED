const MoviesController = require('../controllers/MoviesController')

const router = require('express').Router()

router.get('/moviesByRate', MoviesController.moviesByRate)

module.exports = router