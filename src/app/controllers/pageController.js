//import models
const Order = require('../models/Order');
const Product = require('../models/Product');
const Fact = require('../models/Fun-facts');
const Evl = require('../models/Evl');
const Mt = require('../models/Mt');
const Mutant = require('../models/Mutant');

//import utilities
const { MongooseToObject } = require('../util/utils');
const { QueryToObject } = require('../util/utils');
const { GetTotal } = require('../util/utils');
const { CartCount } = require('../util/utils');
//const { query } = require('express');

class SiteController {

    //[POST] item to /cart
    async postCart(req, res) {

        const queryItem = await Product.findOne({ et: req.query.et });
        const order = new Order(QueryToObject(queryItem));
        order.save();
    }

    //[DELETE] item in /cart
    async deleteCart(req, res) {
        await Order.deleteOne({ et: req.query.et });
    }



    //[GET] /home
    async home(req, res) {

        const orderItem = await Order.find({});

        res.render('home', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });

    }

    //[GET] /equipment
    async shop(req, res) {

        // find and render onsale product
        const rawProduct = await Product.find({});
        const rawFact = await Fact.find({});
        const orderItem = await Order.find({});
        res.render('equipment', { products: MongooseToObject(rawProduct), facts: MongooseToObject(rawFact), cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });
    }

    //[GET] /supplement
    async supplement(req, res) {
        const orderItem = await Order.find({});

        const Evls = await Evl.find({});
        const Mts = await Mt.find({});
        const Mutants = await Mutant.find({});
        res.render('supplement', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem), Evls: MongooseToObject(Evls), Mts: MongooseToObject(Mts), Mutants: MongooseToObject(Mutants) });
    }

    //[GET] /contact
    contact(req, res) {
        res.send('THIS IS THE CONTACT PAGE');
    }


    //[GET] /cart
    async cart(req, res) {
        const orderItem = await Order.find({});

        res.render('cart', { cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });
    }

    async view(req, res) {
        const orderItem = await Order.find({});
        
        const collection = req.query.col;
        var data;

        switch (collection) {
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

        res.render('viewMore', { information: data, cart: MongooseToObject(orderItem), subTotal: GetTotal(orderItem), numberOfItem: CartCount(orderItem) });
    }

}

module.exports = new SiteController;