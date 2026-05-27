const router = require('express').Router()
const controller = require('../controllers/stripeController')

router.post('/create-payment-intent', controller.createPaymentIntent)

module.exports = router
