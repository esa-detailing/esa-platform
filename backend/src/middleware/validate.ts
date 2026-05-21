import { Request, Response, NextFunction } from 'express'

export const requireFields =
  (fields: string[]) => (req: Request, res: Response, next: NextFunction) => {
    const missing = fields.filter((f) => !req.body[f])

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        error: `Missing fields: ${missing.join(', ')}`
      })
    }

    next()
  }
