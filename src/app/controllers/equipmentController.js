//import models
const Order = require('../models/Order');
const Product = require('../models/Products');
const Fact = require('../models/Fun-facts');
//import utilities
const { MongooseToObject } = require('../util/utils');
const { GetTotal } = require('../util/utils');
const { CartCount } = require('../util/utils');

class equipmentController {

    //[GET] /home
    async render(req, res) {
        // find and render onsale product
        const rawProduct = await Product.find({});
        const rawFact = await Fact.find({});
        const orderItem = await Order.find({});
        res.render('equipment', { products: MongooseToObject(rawProduct), facts: MongooseToObject(rawFact), cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });
    }
}

module.exports = new equipmentController;