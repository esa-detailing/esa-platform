import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'express'

import specialRoutes from './routes/special.routes'
import { validateSpecial } from './security/specialValidation'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/api/special-vehicles', validateSpecial, specialRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`ESA Backend running on port ${PORT}`)
})
import { sendBookingEmail } from './services/emails/sendBookingEmail'
import { sendSpecialVehicleEmail } from './services/emails/sendSpecialVehicleEmail'

// Inside your booking POST route:
await sendBookingEmail(bookingData)

// Inside your special vehicle POST route:
await sendSpecialVehicleEmail(requestData)
