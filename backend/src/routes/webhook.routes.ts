import { Router, Request, Response } from 'express'

const router = Router()

// Stripe webhook placeholder
router.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'Webhook received (placeholder)',
    received: true
  })
})

export default router
