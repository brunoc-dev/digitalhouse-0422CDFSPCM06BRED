const express = require ('express');
const router = express.Router();
const { Livro } = require('../../models');
const LivrosController = require('../controllers/LivrosController');

// GET
router.get('/', LivrosController.index )
router.get('/:id', LivrosController.getOne)

// POST
router.post('/', LivrosController.create)

// PUT
router.put('/:id', LivrosController.update)

// DELETE
router.delete('/:id', LivrosController.destroy)

module.exports = router;