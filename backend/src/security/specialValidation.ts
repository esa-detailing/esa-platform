import { Request, Response, NextFunction } from 'express'

export const validateSpecial = (req: Request, res: Response, next: NextFunction) => {
  const { type, name, phone, postcode } = req.body

  if (!type) return res.status(400).json({ message: 'Vehicle type required' })
  if (!name) return res.status(400).json({ message: 'Name required' })
  if (!phone) return res.status(400).json({ message: 'Phone required' })
  if (!postcode) return res.status(400).json({ message: 'Postcode required' })

  next()
}
