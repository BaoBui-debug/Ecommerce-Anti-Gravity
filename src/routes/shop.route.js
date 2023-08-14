const express = require('express');
const router = express.Router();

const shopController = require('../app/controllers/shopController');

//shopController.index

router.get('/detail', shopController.detail);
router.get('/', shopController.index);


module.exports = router;