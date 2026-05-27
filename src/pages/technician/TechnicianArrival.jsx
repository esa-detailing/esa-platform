import React from 'react'
import { waArrival } from '../../utils/whatsappTriggers'
import './TechnicianArrival.css'

export default function TechnicianArrival({ customerNumber, onArrive }) {
  const handleArrival = () => {
    window.open(waArrival(customerNumber), '_blank')
    onArrive()
  }

  return (
    <div className="arrival-container">
      <h1>Arrive at Job</h1>
      <p>Press the button when you reach the customer.</p>

      <button className="arrival-btn" onClick={handleArrival}>
        I’ve Arrived (WhatsApp)
      </button>
    </div>
  )
}
