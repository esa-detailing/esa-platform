const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createBooking = async (req, res) => {
  try {
    const data = req.body

    const exists = await prisma.booking.findFirst({
      where: { date: new Date(data.date), timeSlot: data.timeSlot }
    })

    if (exists) return res.status(400).json({ error: 'Slot already booked' })

    const booking = await prisma.booking.create({ data })
    res.json(booking)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}

exports.getBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { date: 'asc' }
    })
    res.json(bookings)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
}
