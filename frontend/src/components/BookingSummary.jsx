import React from 'react'

const BookingSummary = ({ vehicle, service, date, price }) => {
  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>

      <p>
        <strong>Vehicle:</strong> {vehicle}
      </p>
      <p>
        <strong>Service:</strong> {service}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Total:</strong> £{price}
      </p>
    </div>
  )
}

export default BookingSummary
