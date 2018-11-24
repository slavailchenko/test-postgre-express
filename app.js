const express = require ('express');
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const log = require('./services/log.service');
const ServerError = require('./lib/errors');
const clientsRouter = require('./routes/clients.route');

const app = express ();

app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(bodyParser.json());

app.use('/clients', clientsRouter);

app.use(ServerError.handle404Error);
app.use(ServerError.errorLogger);
app.use(ServerError.errorHandler);

app.listen(config.port_server, config.host, err => {
	if (err) {
		console.log('Server creation error: ' + err);
		return;
	}
	console.log('Server started');
});