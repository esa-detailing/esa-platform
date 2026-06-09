import React from 'react'
import { waDelay, waJobComplete } from '../../utils/whatsappTriggers'
import './TechnicianActions.css'

export default function TechnicianActions({ customerNumber, onComplete }) {
  return (
    <div className="actions-container">
      <h1>Job Actions</h1>

      <button className="action-btn" onClick={() => window.open(waDelay(customerNumber), '_blank')}>
        Notify Delay (WhatsApp)
      </button>

      <button
        className="action-btn complete"
        onClick={() => {
          window.open(waJobComplete(customerNumber), '_blank')
          onComplete()
        }}
      >
        Mark Job Complete (WhatsApp)
      </button>
    </div>
  )
}
