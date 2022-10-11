const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles')
const isLoggedIn = require('../config/auth');

/* All routes already start with /profiles */
router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/new', profilesCtrl.new)
router.post('/', profilesCtrl.create)
router.get('/:id/products/new', profilesCtrl.newProduct )
router.post('/:id/products', profilesCtrl.createProduct)

module.exports = router;
