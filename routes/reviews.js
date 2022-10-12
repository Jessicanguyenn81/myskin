const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

/* Define the Route */
router.post('/profiles/:id/reviews', reviewsCtrl.create)

module.export = router