//import models
const customerData = require('../models/Customer-orders');
const Order = require('../models/Order');

class orderController {
    async placeOrder(req, res) {
        /*
        const product = await Order.find({});
        const orderData = new customerData(req.body);
        orderData.products.push( product )
        orderData.save();
        */
       console.log(req.body);


    }
}

module.exports = new orderController;