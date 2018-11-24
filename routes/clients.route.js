const router = require('express').Router();
const clients = require ('../controllers/clients.controller');

	router.get('/', clients.list);
	router.get('/:id', clients.getById);
	router.post('/', clients.add);
	router.put('/:id', clients.update);
	router.delete('/:id', clients.delete);

module.exports = router;