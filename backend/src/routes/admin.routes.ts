import { Router, Request, Response } from 'express'

const router = Router()

// Example admin dashboard check
router.get('/dashboard', (req: Request, res: Response) => {
  res.json({
    message: 'Admin dashboard route working',
    status: 'ok'
  })
})

// Example admin list bookings
router.get('/bookings', (req: Request, res: Response) => {
  res.json({
    message: 'Admin bookings route working',
    bookings: []
  })
})

// Example admin delete booking
router.delete('/booking/:id', (req: Request, res: Response) => {
  const { id } = req.params

  res.json({
    message: 'Booking deleted (placeholder)',
    id
  })
})

export default router
