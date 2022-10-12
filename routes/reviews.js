const express = require('express')
const router = express.Router()

const reviewsCtrl = require('../controllers/reviews')

/* Define the Route */
router.post('/products/:id/reviews', reviewsCtrl.create)
router.delete('/reviews/:id', reviewsCtrl.delete)

module.exports = router