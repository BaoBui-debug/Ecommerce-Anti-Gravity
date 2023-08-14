const Product = require('../models/Product');
const Fact = require('../models/Fun-facts');

class ShopController {

    //[GET] /Shop
    async index(req, res) {

       try {

        //raw Json data
        const data = await Product.find({});
        const rawFact = await Fact.find({});


        //proccess raw json data
        const product = data.map(dt => dt.toObject());
        const fact = rawFact.map(dt => dt.toObject());
 
        res.render('shop', {products: product, facts: fact });    
        
        

       } catch(err) {
           
           res.status(400).json({error: err});

    }
    
}
        
//[Get] /details
 detail(req, res) {
        res.send('hè hè')
        
        }

}

module.exports = new ShopController;