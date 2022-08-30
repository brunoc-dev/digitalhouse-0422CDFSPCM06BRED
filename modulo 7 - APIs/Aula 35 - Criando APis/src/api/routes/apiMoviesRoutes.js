const express = require('express');
const apiMoviesController = require('../controllers/apiMoviesController');
const router = express.Router();

// Read - Getting movies
router.get('/', apiMoviesController.index);
router.get('/:id', apiMoviesController.findOne);

// Create - Adding movies
router.post('/', apiMoviesController.create);

// Update - Changing movie properties
router.put('/:id', apiMoviesController.update);

module.exports = router;