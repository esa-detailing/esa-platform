import React from 'react'
import './CustomerJobStatus.css'

export default function CustomerJobStatus() {
  return (
    <div className="cust-status-container">
      <h1>Your Booking</h1>
      <p>Your technician will update you via WhatsApp.</p>
      <p>You will receive:</p>
      <ul>
        <li>Arrival message</li>
        <li>Delay updates</li>
        <li>Live location</li>
        <li>Completion message</li>
      </ul>
    </div>
  )
}
