import { Request, Response } from 'express'

export const getDashboard = (req: Request, res: Response) => {
  res.json({
    message: 'Admin dashboard (controller placeholder)',
    status: 'ok'
  })
}

export const listBookings = (req: Request, res: Response) => {
  res.json({
    message: 'Admin booking list (controller placeholder)',
    bookings: []
  })
}

export const deleteBooking = (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    message: 'Admin booking deleted (controller placeholder)',
    id
  })
}
