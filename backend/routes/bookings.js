const express = require('express')
const router = express.Router()
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Create payment intent for 50% deposit
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'gbp', metadata = {} } = req.body

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata
    })

    res.json({
      clientSecret: paymentIntent.client_secret
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Stripe error' })
  }
})

module.exports = router
