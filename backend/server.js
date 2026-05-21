const express = require('express')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/bookings', require('./routes/bookings'))
app.use('/api/stripe', require('./routes/stripe'))

// Start server
const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
