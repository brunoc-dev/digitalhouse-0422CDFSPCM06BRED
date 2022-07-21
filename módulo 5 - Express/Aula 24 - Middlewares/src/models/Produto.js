const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const Produto = {
  findAll () {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
  },

  findOne (id) {
    return this.findAll().find(item => item.id == id);
  },

  findAllWithDiscount (products) {
    return products.filter(produto => produto.discount !== 0).slice(0, 4);
  },

  findAllLastAccess (products) {
    return products.filter(produto => produto.category == 'visited');
  },

  save (products) {
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
  },

  update (receivedId, receivedProduct) {
    const products = this.findAll();
    const productBeingUpdated = products.find(item => item.id == receivedId);

    productBeingUpdated.name = receivedProduct.name;
		productBeingUpdated.description = receivedProduct.description;
		productBeingUpdated.price = receivedProduct.price;
		productBeingUpdated.category = receivedProduct.category;
		productBeingUpdated.discount = receivedProduct.discount;

    // Mesmo processo, porém com Object.assign
    // Object.assign(productBeingUpdated, receivedProduct)

    // Mesmo processo, com spread operator
    // const newProduct = { ...productBeingUpdated, ...receivedProduct } -> Cria um objeto novo! Cuidado!
    
    this.save(products);
  },

  destroy (receivedId) {
    const products = this.findAll();
    const reducedProducts = products.filter(item => item.id != receivedId);
    this.save(reducedProducts);
  }
}

module.exports = Produto;
