import { Request, Response } from 'express'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export const createDepositSession = async (req: Request, res: Response) => {
  const { bookingId, amount } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Deposit for Booking #${bookingId}`
            },
            unit_amount: amount * 100
          },
          quantity: 1
        }
      ],
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel'
    })

    res.json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: 'Stripe error', details: err })
  }
}
