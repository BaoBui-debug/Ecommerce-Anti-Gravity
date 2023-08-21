const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/pageController');

//POST METHOD(use to place order in shop)
router.post('/cart', siteController.postCart);

//DELETE METHOD
router.delete('/cart', siteController.deleteCart);



// TEST FOR VIEW
router.get('/supplement/view', siteController.view);
// 

//GET METHOD
router.get('/cart', siteController.cart);
router.get('/contact', siteController.contact);
router.get('/supplement', siteController.supplement);
router.get('/equipment', siteController.shop);
router.get('/', siteController.home);




module.exports = router;