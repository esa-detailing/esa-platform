import { Request, Response, NextFunction } from 'express'
import { validateAdminSession } from './adminSession'
import { recordAttempt, isSuspicious } from './intrusion'
import { writeLog } from './accessLog'

export const adminGuard = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-esa-admin'] as string
  const ip = req.ip

  if (!token) {
    recordAttempt(ip)
    return res.status(401).json({ message: 'Missing admin token' })
  }

  if (!validateAdminSession(token, ip)) {
    recordAttempt(ip)

    if (isSuspicious(ip)) {
      writeLog({
        timestamp: Date.now(),
        ip,
        event: 'ADMIN_SESSION_TAMPER'
      })
    }

    return res.status(401).json({ message: 'Invalid admin session' })
  }

  next()
}
