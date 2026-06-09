import React from 'react'
import './TechnicianShareLocation.css'

export default function TechnicianShareLocation({ customerNumber, onNext }) {
  return (
    <div className="shareloc-container">
      <h1>Share Live Location</h1>
      <p>WhatsApp will open. Tap:</p>
      <p>
        <strong>Attach → Location → Share Live Location</strong>
      </p>

      <button
        className="shareloc-btn"
        onClick={() => {
          window.open(`https://wa.me/${customerNumber}`, '_blank')
          onNext()
        }}
      >
        Open WhatsApp
      </button>
    </div>
  )
}
