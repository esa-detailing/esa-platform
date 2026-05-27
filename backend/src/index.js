const app = require('./app')

app.use('/api/bookings', require('./routes/bookingRoutes'))
app.use('/api/stripe', require('./routes/stripeRoutes'))

module.exports = app
