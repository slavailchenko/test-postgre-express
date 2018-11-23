const express = require ('express');
const bodyParser = require('body-parser');

const app = express ();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.listen(8001, '127.0.0.1', err => {
	if (err) {
		console.log('Server creation error: ' + err);
		return;
	}
	console.log('Server started');
});