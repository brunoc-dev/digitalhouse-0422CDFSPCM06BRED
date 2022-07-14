const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', { products, toThousand });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const { id } = req.params;

		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const product = products.find(item => item.id == id);

		res.render('detail', { product, toThousand });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const product = req.body;
		product.image = req.file.filename; // req.file -> propriedade adicionada pelo multer, na rota!
		product.id = products.length + 1; // gerar o próximo ID do array, tamanho do array + 1!

		products.push(product);
		// Com spread operator:
		// product.push({...product, id: product.length + 1, image})
		fs.writeFileSync(
			path.resolve('src/data/productsDataBase.json'),
			JSON.stringify(products)
		);

		res.redirect('/products/detail/' + product.id);
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;