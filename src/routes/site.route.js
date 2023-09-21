const express = require('express');
const router = express.Router();

//REFERENCE
const siteController = require('../app/controllers/pageController');
const homeController = require('../app/controllers/homeController');
const equipmentController = require('../app/controllers/equipmentController');
const supplementController = require('../app/controllers/supplementController');
const contactController = require('../app/controllers/contactController');
const cartController = require('../app/controllers/cartController');
const orderController = require('../app/controllers/orderController');
//

//POST ORDER (placeOrder)
router.post('/Order', orderController.placeOrder);


//shop methods
router.post('/cart', siteController.postCart);
router.delete('/cart', siteController.deleteCart);
router.put('/cart', siteController.updateCart);
 

//GET METHOD
router.get('/cart', cartController.render);
router.get('/contact', contactController.render);
router.get('/supplement/view', supplementController.view);
router.get('/supplement', supplementController.render);
router.get('/equipment', equipmentController.render);
router.get('/', homeController.render);



module.exports = router;