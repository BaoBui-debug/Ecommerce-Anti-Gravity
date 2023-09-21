//import models
const Order = require('../models/Order');

//import utilities
const { MongooseToObject } = require('../util/utils');
const { GetTotal } = require('../util/utils');
const { CartCount } = require('../util/utils');

class homeController {

    //[GET] /home
    async render(req, res) {
        const orderItem = await Order.find({});
        res.render('home', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });
    }
}

module.exports = new homeController;