// ************ Require's ************
const express = require('express');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + '../../../public/images/products');
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create);
router.post('/create/', upload.single('image'), productsController.store);

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); // /produtos/21/edit
                                                  //  recurso / item / acao
router.put('/:id', productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);

module.exports = router;
