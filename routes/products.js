const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products')

router.get('/products/:id/edit', productsCtrl.edit)
router.put('/products/:id/edit', productsCtrl.update)

module.exports = router