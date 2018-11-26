const ServerError = require('../lib/errors');
const clients = require('../models').clients;
const registrationclient = require('../models').registrationclient;
const rateclient = require('../models').rateclient;
const Op = require('sequelize').Op;

// See dml_example.md

module.exports = {

  list (req, res, next) {
    let query = {};
    query.email = req.query.email || '';
    query.last_name = req.query.last_name || '';
  	return clients.findAll({
        attributes: ['id', 'first_name', 'last_name', 'phone', 'email', 'adress', 'date_regastration', 'exp_date_regastration'],
        include: [{
          model: registrationclient,
          as: 'registrationclients'
        },{
          model: rateclient,
          as: 'rateclients'
        }],
        where: {
          [Op.and]: [
          {email: { [Op.iLike]: `%${query.email}%`}},
          {last_name: { [Op.iLike]: `%${query.last_name}%`}},
        ]},
        order: [
          ['id', 'ASC'],
          ['date_regastration', 'DESC'],
          [{ model: registrationclient, as: 'registrationclients' }, 'id', 'DESC'],
        ],
      })
      .then((clients) => {
      	if (!clients.length) throw new ServerError(404, 'Clients not founded');
      	res.json(clients);
      })
      .catch(next);
  },

  getById(req, res, next) {
    return clients.findById(req.params.id, {
        include: [{
          model: registrationclient,
          as: 'registrationclients'
        },{
          model: rateclient,
          as: 'rateclients'
        }],
      })
      .then((client) => {
        if (!client) throw new ServerError(404, 'Client not founded');
    	res.json(client);
      })
      .catch(next);
  },

  add(req, res, next) {
    return clients.create({
        first_name: req.body.first_name,
      	last_name: req.body.last_name,
      	phone: req.body.phone,
      	email: req.body.email,
      	adress: req.body.adress,
      	id_rate: req.body.id_rate,
      	id_registration: req.body.id_registration,
      	date_regastration: req.body.date_regastration,
      	exp_date_regastration: req.body.exp_date_regastration
      })
      .then((clientSaved) => res.json({client: clientSaved}))
      .catch(next);
  },

  update(req, res, next) {
    return clients
      .findById(req.params.id, {
      	include: [{
          model: registrationclient,
          as: 'registrationclients'
        },{
          model: rateclient,
          as: 'rateclients'
        }],
      })
      .then(client => {
      	if (!client) throw new ServerError(404, 'Client not founded');
        return client
          .update({
          	first_name: req.body.first_name,
          	last_name: req.body.last_name,
          	phone: req.body.phone,
          	email: req.body.email,
          	adress: req.body.adress,
          	id_rate: req.body.id_rate,
          	id_registration: req.body.id_registration,
          	date_regastration: req.body.date_regastration,
          	exp_date_regastration: req.body.exp_date_regastration
          })
          .then(() => res.json(`Client with id=${req.params.id} updated`))
          .catch(next);
      })
      .catch(next);
  },

  delete(req, res, next) {
    return clients
      .findById(req.params.id)
      .then(client => {
      	if (!client) throw new ServerError(404, 'Client not founded');
        return client
          .destroy()
          .then(() => res.json(`Client with id=${req.params.id} deleted`))
          .catch(next);
      })
      .catch(next);
  }

}