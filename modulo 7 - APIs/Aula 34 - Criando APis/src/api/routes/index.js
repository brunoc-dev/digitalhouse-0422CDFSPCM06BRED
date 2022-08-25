const express = require('express');
const router = express.Router();
const apiMoviesRoutes = require('./apiMoviesRoutes');

router.use('/movies', apiMoviesRoutes);

module.exports = router;