const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/pageController');

//shop methods
router.post('/cart', siteController.postCart);
router.delete('/cart', siteController.deleteCart);
 

//GET METHOD
router.get('/supplement/view', siteController.view);
router.get('/cart', siteController.cart);
router.get('/contact', siteController.contact);
router.get('/supplement', siteController.supplement);
router.get('/equipment', siteController.shop);
router.get('/', siteController.home);



module.exports = router;