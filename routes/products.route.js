const router = require('express').Router();
const products = require ('../controllers/products.controller');

	router.get('/', products.listProducts);
	router.post('/', products.addProduct);
	router.put('/:id', products.updateProduct);
	router.delete('/:id', products.deleteProduct);

module.exports = router;