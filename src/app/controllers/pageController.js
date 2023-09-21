//import models
const Order = require('../models/Order');
const Product = require('../models/Products');
const Evl = require('../models/Evl');
const Mt = require('../models/Mt')
const Mutant = require('../models/Mutant');


class SiteController {

    //[POST] item to /cart
    async postCart(req, res) {

        const order = await Order.find({});
        let data;

        switch (req.query.col) {
            case 'equip':
                data = await Product.findOne({ et: req.query.et }).lean();
                break;
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

        const condition = (obj) => obj.et === data.et;
        const index = order.findIndex(condition);
        if (index > -1) {
            const obj = order.find(condition);
            obj.quantity += Number(req.query.quanti);
            await Order.updateOne({ et: obj.et }, { quantity: obj.quantity });
        }
        else {
            const order = new Order(data);
            order.quantity = req.query.quanti;
            order.save();
        }
    }

    //[DELETE] item in /cart
    async deleteCart(req, res) {
        await Order.deleteOne({ et: req.query.et });
    }


    //[UPDATE] item in /cart
    async updateCart(req, res) {
        const order = await Order.findOne({ et: req.query.et });
        order.quantity += Number(req.query.update);
        await Order.updateOne({ et: req.query.et }, { quantity: order.quantity })

        //if quantity reach 0:
        if (order.quantity === 0) {
            await Order.deleteOne({ et: req.query.et });
        }
    }

}

module.exports = new SiteController;