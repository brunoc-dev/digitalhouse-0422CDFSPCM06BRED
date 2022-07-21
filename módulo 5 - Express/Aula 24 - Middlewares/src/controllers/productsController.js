const Produto = require('../models/Produto');
const toThousand = require('../helpers/toThousand');
const { validationResult } = require('express-validator');

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = Produto.findAll();
		res.render('products', { products, toThousand });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;
		const product = Produto.findOne(id);

		res.render('detail', { product, toThousand });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form', { errors: [] });
	},

	// Create -  Method to store
	store: (req, res) => {
		const { errors } = validationResult(req);

		if (errors.length) {
			const formattedErrors = {}
			errors.forEach(error => {
				formattedErrors[error.param] = error.msg;
			});
			return res.render('product-create-form', { errors: formattedErrors });
		}

		const products = Produto.findAll();
		const receivedProduct = req.body;
		receivedProduct.image = req.file.filename; // req.file -> propriedade adicionada pelo multer, na rota!
		receivedProduct.id = products.length + 1; // gerar o próximo ID do array, tamanho do array + 1!
		// Com spread operator:
		// product.push({...product, id: product.length + 1, image})

		products.push(receivedProduct);
		Produto.save(products);

		res.redirect('/products/detail/' + receivedProduct.id);
	},

	// Update - Form to edit
	edit: (req, res) => {
		const { id } = req.params;
		const product = Produto.findOne(id);

		res.render('product-edit-form', { product });
	},

	// Update - Method to update
	update: (req, res) => {
		const { id } = req.params;
		Produto.update(id, req.body);

		res.redirect('/products/detail/' + id);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const { id } = req.params;
		Produto.destroy(id);

		res.redirect('/products');
	}
};

module.exports = controller;