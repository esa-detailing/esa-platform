import { Request, Response, NextFunction } from 'express'

const UK_PHONE = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/
const UK_POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i

export const validateBooking = (req: Request, res: Response, next: NextFunction) => {
  const { phone, postcode, reg } = req.body

  if (!UK_PHONE.test(phone)) {
    return res.status(400).json({ message: 'Invalid UK phone number' })
  }

  if (!UK_POSTCODE.test(postcode)) {
    return res.status(400).json({ message: 'Invalid UK postcode' })
  }

  if (!reg || reg.length < 5) {
    return res.status(400).json({ message: 'Invalid vehicle registration' })
  }

  next()
}
