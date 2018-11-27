const ServerError = require('../lib/errors');
const clients = require('../models').clients;
const registration_client = require('../models').registrationclient;
const rate_client = require('../models').rateclient;
const Op = require('sequelize').Op;

// See dml_example.md

module.exports = {

  listClients (req, res, next) {
    let query = {};
    query.email = req.query.email || '';
    query.last_name = req.query.last_name || '';
  	return clients.findAll({
        attributes: ['id', 'first_name', 'last_name', 'phone', 'email', 'adress', 'date_regastration', 'exp_date_regastration'],
        where: {
          [Op.and]: [
          {email: { [Op.iLike]: `%${query.email}%`}},
          {last_name: { [Op.iLike]: `%${query.last_name}%`}},
        ]},
        order: [
          ['id', 'ASC'],
          ['date_regastration', 'DESC'],
          ],
      })
      .then((clients) => {
      	if (!clients.length) throw new ServerError(404, 'Clients not founded');
      	res.json(clients);
      })
      .catch(next);
  },

  getById(req, res, next) {
    return clients.findById(req.params.id, {})
      .then((client) => {
        if (!client) throw new ServerError(404, 'Client not founded');
    	res.json(client);
      })
      .catch(next);
  },

  getByIdAndRate (req, res, next) {
    return clients.findById(req.params.id, {})
      .then((client) => {
        if (!client) throw new ServerError(404, 'Client not founded');
        return rate_client.find({
          attributes: ['status', 'discount'],
          where: {id: client.id_rate}
        });
      })
      .then ((rateClient) => {
        if (!rateClient) throw new ServerError(403, 'Not status for client');
        res.json (`Client with id = ${req.params.id} have status "${rateClient.status}" and discount ${rateClient.discount*100}% `);
      })
      .catch(next);
  },

  getByIdAndRegistration (req, res, next) {
    return clients.findById(req.params.id, {})
      .then((client) => {
        if (!client) throw new ServerError(404, 'Client not founded');
        return registration_client.find({
          attributes: ['status'],
          where: {id: client.id_registration}
        });
      })
      .then ((regClient) => {
        if (!regClient) throw new ServerError(403, 'Not status for client');
        res.json (`Client with id = ${req.params.id} have status registration "${regClient.status}" `);
      })
      .catch(next);
  },

  add(req, res, next) {
    return clients.create(req.body)
      .then((clientSaved) => res.json({client: clientSaved}))
      .catch(next);
  },

  addRate (req, res, next) {
    return rate_client.create(req.body)
      .then((rateSaved) => res.json({status: rateSaved}))
      .catch(next);
  },

  addRegistration (req, res, next) {
    return registration_client.create(req.body)
      .then((regSaved) => res.json({registration: regSaved}))
      .catch(next);
  },

  update(req, res, next) {
    return clients
      .findById(req.params.id, {
      	include: [{
          model: registration_client,
          as: 'registrationclients'
        },{
          model: rate_client,
          as: 'rateclients'
        }],
      })
      .then(client => {
      	if (!client) throw new ServerError(404, 'Client not founded');
        return client
          .update(req.body)
          .then(() => res.json(`Client with id=${req.params.id} updated`))
          .catch(next);
      })
      .catch(next);
  },

  updateRate(req, res, next) {
    return rate_client
      .findById(req.params.rateId, {})
      .then(rate => {
        if (!rate) throw new ServerError(404, 'Rate not founded');
        return rate
          .update(req.body)
          .then(() => res.json(`Rate with id=${req.params.rateId} updated`))
          .catch(next);
      })
      .catch(next);
  },

  updateRegistration(req, res, next) {
    return registration_client
      .findById(req.params.registrationId, {})
      .then(registration => {
        if (!registration) throw new ServerError(404, 'Registration not founded');
        return registration
          .update(req.body)
          .then(() => res.json(`Registration with id=${req.params.registrationId} updated`))
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
  },

  deleteRate (req, res, next) {
    return rate_client
      .findById(req.params.rateId)
      .then(rate => {
        if (!rate) throw new ServerError(404, 'Rate not founded');
        return rate
          .destroy()
          .then(() => res.json(`Rate with id=${req.params.rateId} deleted`))
          .catch(next);
      })
      .catch(next);
  },

  deleteRegistration (req, res, next) {
    return registration_client
      .findById(req.params.registrationId)
      .then(registration => {
        if (!registration) throw new ServerError(404, 'Registration not founded');
        return registration
          .destroy()
          .then(() => res.json(`Registration with id=${req.params.registrationId} deleted`))
          .catch(next);
      })
      .catch(next);
  }

}