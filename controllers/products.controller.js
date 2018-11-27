const ServerError = require('../lib/errors');
const products = require('../models').products;
const availability = require('../models').availability;
const brand = require('../models').brand;
const subcategory = require('../models').subcategory;
const supplier = require('../models').supplier;
const warranty = require('../models').warranty;
const Op = require('sequelize').Op;

module.exports = {

	listProducts (req, res, next) {
		let query = {};
		query.title = req.query.title || '';
		query.article = req.query.article || '';
		return products.findAll({
			attributes: ['id', 'title', 'article', 'description', 'price', 'url'],
			include: [{ model: availability, as: 'availabilities', attributes: ['status']},
			  		  { model: brand, as: 'brands', attributes: ['brand_name']},
			  		  { model: subcategory, as: 'subcategories', attributes: ['name_sub_category']},
			  		  { model: warranty, as: 'warranties', attributes: ['days']},
			  		  { model: supplier, as: 'suppliers', attributes: ['company', 'manager', 'email', 'adress', 'phone']}
					  ],
			where: {
				[Op.and]: [
				{title: { [Op.iLike]: `%${query.title}%`}},
				{article: { [Op.iLike]: `%${query.article}%`}},
				]},
				order: [
				['id', 'ASC'],
				['title', 'ASC'],
				],
			})
		.then((products) => {
			if (!products.length) throw new ServerError(404, 'Products not founded');
			res.json(products);
		})
		.catch(next);
	},

	addProduct (req, res, next) {
		return products.create(req.body)
		.then((productSaved) => res.json({product: productSaved}))
		.catch(next);
	},

	updateProduct(req, res, next) {
		return products.findById(req.params.id)
		.then(product => {
			if (!product) throw new ServerError(404, 'Product not founded');
			return product
			.update(req.body)
			.then(() => res.json(`Product with id=${req.params.id} updated`))
			.catch(next);
		})
		.catch(next);
	},

	deleteProduct (req, res, next) {
		return products.findById(req.params.id)
		.then(product => {
			if (!product) throw new ServerError(404, 'Product not founded');
			return product
			.destroy()
			.then(() => res.json(`Product with id=${req.params.id} deleted`))
			.catch(next);
		})
		.catch(next);
	}

}