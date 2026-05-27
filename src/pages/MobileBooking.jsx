import React, { useState } from 'react'
import './MobileBooking.css'

import PostcodeInput from '../components/PostcodeInput'
import DvlaLookup from '../components/DvlaLookup'
import ServiceSelector from '../components/ServiceSelector'

import { ESA_LOCATION, MAX_SERVICE_MILES } from '../utils/serviceArea'
import { calculateDistanceMiles } from '../utils/calcDistance'

export default function MobileBooking() {
  const [postcode, setPostcode] = useState('')
  const [postcodeResult, setPostcodeResult] = useState('')

  const [vehicle, setVehicle] = useState(null)
  const [service, setService] = useState('')

  const handlePostcodeCheck = async () => {
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${postcode}`)
      const data = await res.json()

      if (!data.result) {
        setPostcodeResult('Invalid postcode')
        return
      }

      const { latitude, longitude } = data.result

      const distance = calculateDistanceMiles(
        ESA_LOCATION.lat,
        ESA_LOCATION.lon,
        latitude,
        longitude
      )

      if (distance <= MAX_SERVICE_MILES) {
        setPostcodeResult(`✔️ In service area (${distance.toFixed(1)} miles away)`)
      } else {
        setPostcodeResult(`❌ Outside service area (${distance.toFixed(1)} miles away)`)
      }
    } catch (err) {
      setPostcodeResult('Error checking postcode')
    }
  }

  return (
    <div className="mobile-booking-container">
      <h1 className="mobile-booking-title">Mobile Detailing Booking</h1>

      <PostcodeInput value={postcode} onChange={setPostcode} onCheck={handlePostcodeCheck} />

      {postcodeResult && <p className="postcode-result">{postcodeResult}</p>}

      <h2 className="section-title">Vehicle Lookup</h2>

      <DvlaLookup onResult={setVehicle} />

      {vehicle && (
        <div className="vehicle-box">
          <p>
            <strong>Make:</strong> {vehicle.make}
          </p>
          <p>
            <strong>Model:</strong> {vehicle.model}
          </p>
          <p>
            <strong>Colour:</strong> {vehicle.colour}
          </p>
          <p>
            <strong>Fuel:</strong> {vehicle.fuelType}
          </p>
          <p>
            <strong>Year:</strong> {vehicle.yearOfManufacture}
          </p>
        </div>
      )}

      <h2 className="section-title">Select Your Service</h2>

      <ServiceSelector selected={service} onSelect={setService} />

      {service && (
        <p className="selected-service">
          Selected: <strong>{service}</strong>
        </p>
      )}
    </div>
  )
}
