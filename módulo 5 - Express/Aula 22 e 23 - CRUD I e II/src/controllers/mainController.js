const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const produtosComDesconto = products.filter(produto => produto.discount !== 0).slice(0, 4);
		const produtosUltimoAcesso = products.slice(0, 4);
		res.render('index', { produtosComDesconto, produtosUltimoAcesso });
	},

	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
