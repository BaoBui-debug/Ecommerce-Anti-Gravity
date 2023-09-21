//import models
const Order = require('../models/Order');
const Evl = require('../models/Evl');
const Mt = require('../models/Mt')
const Mutant = require('../models/Mutant');
//import utilities
const { MongooseToObject } = require('../util/utils');
const { GetTotal } = require('../util/utils');
const { CartCount } = require('../util/utils');

class supplementController {

    //[GET] /supplement
    async render(req, res) {
        const orderItem = await Order.find({});
        const Evls = await Evl.find({});
        const Mts = await Mt.find({});
        const Mutants = await Mutant.find({});

        res.render('supplement', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem), Evls: MongooseToObject(Evls), Mts: MongooseToObject(Mts), Mutants: MongooseToObject(Mutants) });
    }

    async view(req, res) {
        var data;
        const orderItem = await Order.find({});

        switch (req.query.col) {
            case 'Evl':
                data = await Evl.findOne({ et: req.query.et }).lean();
                break;
            case 'MT':
                data = await Mt.findOne({ et: req.query.et }).lean();
                break;
            case 'Mtnt':
                data = await Mutant.findOne({ et: req.query.et }).lean();
                break;
        }
        res.render('viewMore', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem), information: data, orderCollection: req.query.col });
    }
}

module.exports = new supplementController;