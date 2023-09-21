//import models
const Order = require('../models/Order');

//import utilities
const { MongooseToObject } = require('../util/utils');
const { GetTotal } = require('../util/utils');
const { CartCount } = require('../util/utils');

class cartController {
    //[GET] /cart
    async render(req, res) {
        const orderItem = await Order.find({});

        if (orderItem.length == 0) {
            res.render('emptyCart', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });

        } else {
            res.render('cart', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });
        }

    }
}

module.exports = new cartController;