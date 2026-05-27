import React from 'react'
import './BookingLoader.css'

export default function BookingLoader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Submitting your booking...</p>
    </div>
  )
}
