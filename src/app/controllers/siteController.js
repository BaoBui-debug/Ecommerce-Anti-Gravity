const order = require('../models/Order');
const Product = require('../models/Product');
const Fact = require('../models/Fun-facts');

class SiteController {

    //[GET] /home
    async home(req, res) {

        try{
            const rawData = await order.find({});
            const data = rawData.map(dt => dt.toObject());

            res.render('home', {cart: data});
        }catch(error) {
            res.status(400).json({error: err});
        }
    }

    //[Get] /shop
   async shop(req, res) {
  

        // //raw Json data
        // const data = await Product.find({});
        // const rawFact = await Fact.find({});


        // //proccess raw json data
        // const product = data.map(dt => dt.toObject());
        // const fact = rawFact.map(dt => dt.toObject());
 
        res.render('shop');    
        
    
    }
}

module.exports = new SiteController;