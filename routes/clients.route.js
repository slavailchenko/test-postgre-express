const router = require('express').Router();
const clients = require ('../controllers/clients.controller');

	router.get('/', clients.listClients);
	router.get('/:id', clients.getById);
	router.get('/:id/rate', clients.getByIdAndRate);
	router.get('/:id/registration', clients.getByIdAndRegistration);
	
	router.post('/', clients.add);
	router.post('/rate', clients.addRate);
	router.post('/registration', clients.addRegistration);

	router.put('/:id', clients.update);
	router.put('/rate/:rateId', clients.updateRate);
	router.put('/registration/:registrationId', clients.updateRegistration);
	
	router.delete('/:id', clients.delete);
	router.delete('/rate/:rateId', clients.deleteRate);
	router.delete('/registration/:registrationId', clients.deleteRegistration);

module.exports = router;