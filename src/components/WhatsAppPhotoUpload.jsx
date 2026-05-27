import React from 'react'
import './WhatsAppPhotoUpload.css'

export default function WhatsAppPhotoUpload() {
  return (
    <div className="wa-box">
      <h2>Send Photos</h2>
      <p>Tap below to send vehicle photos via WhatsApp.</p>

      <a
        href="https://wa.me/447841410122"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-button"
      >
        Send Photos on WhatsApp
      </a>
    </div>
  )
}
