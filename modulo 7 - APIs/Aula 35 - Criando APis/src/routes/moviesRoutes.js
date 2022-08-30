const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/', moviesController.list);
//router.get('/new', moviesController.new);
//router.get('/recommended', moviesController.recomended);
router.get('/detail/:id', moviesController.detail);


module.exports = router;