import { Request, Response, NextFunction } from 'express'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err)

  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Server error'
  })
}
