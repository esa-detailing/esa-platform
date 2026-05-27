import React from 'react'
import Link from 'next/link'
import './ServiceMode.css'

export default function ServiceMode() {
  return (
    <div className="service-mode-container">
      <h1>Select Service Type</h1>

      <Link href="/booking" className="service-btn">
        Mobile Detailing
      </Link>

      <Link href="/customer" className="service-btn secondary">
        Existing Booking
      </Link>
    </div>
  )
}
