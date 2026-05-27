const router = require('express').Router()
const validate = require('../middleware/validateBooking')
const controller = require('../controllers/bookingController')

router.post('/', validate, controller.createBooking)
router.get('/', controller.getBookings)

module.exports = router
