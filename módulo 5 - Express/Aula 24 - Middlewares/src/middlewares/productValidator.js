const { check } = require('express-validator');

const validator = [
  check('name').notEmpty().withMessage('Campo nome é obrigatório!'),
  check('price').notEmpty().withMessage('Campo preço é obrigatório!'),
  check('file').notEmpty().withMessage('É necessário fazer upload de uma imagem!'),
]

module.exports = validator;