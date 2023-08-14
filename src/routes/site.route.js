const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/pageController');


//GET METHOD
router.get('/cart', siteController.cart);
router.get('/contact', siteController.contact);
router.get('/shop', siteController.shop);
router.get('/', siteController.home);

//POST METHOD(use to place order in shop)
router.post('/cart', siteController.postCart);

//DELETE METHOD
router.delete('/cart', siteController.deleteCart);



module.exports = router;