import { Request, Response } from 'express'

export const handleWebhook = (req: Request, res: Response) => {
  res.json({
    message: 'Webhook received (controller placeholder)',
    received: true
  })
}
