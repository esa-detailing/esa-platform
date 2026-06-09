import React, { useState } from 'react'
import './DvlaLookup.css'

export default function DvlaLookup({ onResult }) {
  const [reg, setReg] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const lookup = async () => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch(
        `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`,
        {
          method: 'POST',
          headers: {
            'x-api-key': import.meta.env.VITE_DVLA_API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ registrationNumber: reg })
        }
      )

      const data = await res.json()

      if (data.errors) {
        setError('Vehicle not found')
        setLoading(false)
        return
      }

      onResult(data)
    } catch (err) {
      setError('Lookup failed')
    }

    setLoading(false)
  }

  return (
    <div className="dvla-box">
      <input
        className="dvla-input"
        placeholder="Enter reg (e.g. K999 ESA)"
        value={reg}
        onChange={(e) => setReg(e.target.value.toUpperCase())}
      />

      <button className="dvla-button" onClick={lookup} disabled={loading}>
        {loading ? 'Checking...' : 'Lookup'}
      </button>

      {error && <p className="dvla-error">{error}</p>}
    </div>
  )
}
