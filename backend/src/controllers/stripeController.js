const Stripe = require('stripe')
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = 'gbp', metadata = {} } = req.body

    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata
    })

    res.json({ clientSecret: intent.client_secret })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Stripe error' })
  }
}
