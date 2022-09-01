const express = require('express');
const router = express.Router();
const livrariaRouter = require('./livraria');

router.use('/livraria',livrariaRouter);

module.exports = router
