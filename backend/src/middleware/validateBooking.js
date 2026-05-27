module.exports = (req, res, next) => {
  const { fullName, email, phone, vehicleReg, serviceType, date, timeSlot } = req.body
  if (!fullName || !email || !phone || !vehicleReg || !serviceType || !date || !timeSlot) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  next()
}
