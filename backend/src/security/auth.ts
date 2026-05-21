import { Request, Response, NextFunction } from 'express'
import { loadPinData, savePinData } from './pinStore'
import { verifyHash } from './hash'

const MAX_ATTEMPTS = 3
const LOCK_MINUTES = 24 * 60 // 24 hours

declare module 'express-serve-static-core' {
  interface Request {
    isAdmin?: boolean
  }
}

export const verifyAdminPin = (req: Request, res: Response) => {
  const { pin } = req.body

  if (!pin) {
    return res.status(400).json({
      status: 400,
      message: 'PIN is required'
    })
  }

  const data = loadPinData()
  const now = Date.now()

  if (data.lockUntil && now < data.lockUntil) {
    const minutesLeft = Math.ceil((data.lockUntil - now) / 60000)
    return res.status(423).json({
      status: 423,
      message: `Admin access locked. Try again in ${minutesLeft} minute(s).`
    })
  }

  if (!data.hashedPin) {
    return res.status(500).json({
      status: 500,
      message: 'Admin PIN not configured'
    })
  }

  const isValid = verifyHash(pin, data.hashedPin)

  if (!isValid) {
    data.wrongAttempts += 1

    if (data.wrongAttempts >= MAX_ATTEMPTS) {
      data.lockUntil = now + LOCK_MINUTES * 60 * 1000
    }

    savePinData(data)

    return res.status(401).json({
      status: 401,
      message:
        data.lockUntil && now < data.lockUntil
          ? 'Too many wrong attempts. Admin access locked.'
          : 'Invalid PIN'
    })
  }

  // success: reset attempts
  data.wrongAttempts = 0
  data.lockUntil = 0
  savePinData(data)

  // mark admin session (simple header-based for now)
  return res.json({
    status: 200,
    message: 'Admin PIN verified'
  })
}

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  const adminHeader = req.headers['x-esa-admin']

  if (adminHeader !== process.env.ADMIN_SESSION_KEY) {
    return res.status(401).json({
      status: 401,
      message: 'Admin access denied'
    })
  }

  req.isAdmin = true
  next()
}
