import React from 'react'
import './BookingSummary.css'

export default function BookingSummary({ postcode, vehicle, service, date, time }) {
  return (
    <div className="summary-box">
      <h2>Booking Summary</h2>

      <p>
        <strong>Postcode:</strong> {postcode}
      </p>

      {vehicle && (
        <>
          <p>
            <strong>Vehicle:</strong> {vehicle.make} {vehicle.model}
          </p>
          <p>
            <strong>Colour:</strong> {vehicle.colour}
          </p>
        </>
      )}

      <p>
        <strong>Service:</strong> {service}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
    </div>
  )
}
