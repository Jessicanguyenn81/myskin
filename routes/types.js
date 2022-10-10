const express = require('express');
const router = express.Router();
const typesCtrl = require('../controllers/types')

/* GET users listing. */
router.get('/new', typesCtrl.new)

module.exports = router;
