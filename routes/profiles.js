const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles')

/* All routes already start with /types */
router.get('/new', profilesCtrl.new)
router.post('/', profilesCtrl.create)
router.get('/', profilesCtrl.index)


module.exports = router;
