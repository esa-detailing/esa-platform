import React from 'react'
import { waOnTheWay } from '../../utils/whatsappTriggers'
import './TechnicianTravelStart.css'

export default function TechnicianTravelStart({ customerNumber, onStart }) {
  const handleStart = () => {
    window.open(waOnTheWay(customerNumber), '_blank')
    onStart()
  }

  return (
    <div className="travel-container">
      <h1>Start Travel</h1>
      <p>Send ETA and begin travelling.</p>

      <button className="travel-btn" onClick={handleStart}>
        Send ETA (WhatsApp)
      </button>
    </div>
  )
}
