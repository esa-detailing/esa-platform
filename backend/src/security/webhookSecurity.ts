import { Request, Response, NextFunction } from 'express'

export const rawBody = (req: Request, res: Response, buf: Buffer) => {
  ;(req as any).rawBody = buf.toString('utf8')
}

export const verifyWebhook = (req: Request, res: Response, next: NextFunction) => {
  const signature = req.headers['stripe-signature']

  if (!signature) {
    return res.status(400).json({ message: 'Missing webhook signature' })
  }

  // Placeholder for Stripe signature verification
  next()
}
