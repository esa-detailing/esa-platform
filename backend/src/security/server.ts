import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { logger } from './middleware/logger'
import { errorHandler } from './middleware/errorHandler'
import { limiter } from './middleware/rateLimit'

import { helmetConfig } from './security/helmetConfig'
import { sanitiseBody } from './security/sanitise'

import lookupRoutes from './routes/lookupRoutes'
import bookingRoutes from './routes/bookingRoutes'
import servicesRoutes from './routes/servicesRoutes'
import paymentRoutes from './routes/paymentRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger)
app.use(limiter)
app.use(helmetConfig)
app.use(sanitiseBody)

// ROUTES
app.use('/lookup', lookupRoutes)
app.use('/booking', bookingRoutes)
app.use('/services', servicesRoutes)
app.use('/payment', paymentRoutes)

// ERROR HANDLER
app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
