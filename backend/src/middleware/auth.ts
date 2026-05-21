import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export interface AuthRequest extends Request {
  adminId?: number
}

export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header) return res.status(401).json({ error: 'Missing token' })

  const token = header.replace('Bearer ', '')
  try {
    const payload = verifyToken(token) as { adminId: number }
    req.adminId = payload.adminId
    next()
  } catch {
    return res.status(401).json({ error: 'Invalid token' })
  }
}
