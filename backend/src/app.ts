import express from 'express'
import cors from 'cors'

import lookupRoutes from './routes/lookupRoutes'
import bookingRoutes from './routes/bookingRoutes'
import servicesRoutes from './routes/servicesRoutes'
import paymentRoutes from './routes/paymentRoutes'

const app = express()

app.use(cors())
app.use(express.json())

// ROUTES
app.use('/lookup', lookupRoutes)
app.use('/booking', bookingRoutes)
app.use('/services', servicesRoutes)
app.use('/payment', paymentRoutes)

export default app
