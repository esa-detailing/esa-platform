import { Router } from 'express'
import { createBooking, getBooking } from '../controllers/bookingController'

const router = Router()

router.post('/', createBooking)
router.get('/:id', getBooking)

export default router
