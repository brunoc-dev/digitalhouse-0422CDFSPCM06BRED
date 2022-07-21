// ************ Require's ************
const express = require('express');
const upload = require('../middlewares/multer');
const productValidator = require('../middlewares/productValidator');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create/', productsController.create);
router.post('/create/', upload.single('image'), productValidator, productsController.store);

/*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); // /produtos/21/edit
                                                  //  recurso / item / acao
router.put('/edit/:id', productsController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);

module.exports = router;
