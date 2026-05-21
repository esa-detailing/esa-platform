import { Request, Response, NextFunction } from 'express'

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized: No token provided'
    })
  }

  // Placeholder token check
  const token = authHeader.replace('Bearer ', '')

  if (!token || token.length < 10) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized: Invalid token'
    })
  }

  next()
}
