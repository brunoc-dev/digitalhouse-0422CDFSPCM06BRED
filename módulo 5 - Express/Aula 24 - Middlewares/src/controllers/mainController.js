const Produto = require('../models/Produto');
const toThousand = require('../helpers/toThousand');

const controller = {
	index: (req, res) => {
		const produtos = Produto.findAll();

		res.render('index', {
			produtosComDesconto: Produto.findAllWithDiscount(produtos),
			produtosUltimoAcesso: Produto.findAllLastAccess(produtos),
			toThousand
		});
	},

	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
