import React from 'react'
import './JobSummary.css'

export default function JobSummary({ job = {} }) {
  const {
    customerName = 'Customer',
    vehicle = 'Vehicle',
    package: pkg = 'Service Package',
    date = 'Date',
    photos = []
  } = job

  return (
    <div className="job-summary-container">
      <h1>Job Summary</h1>

      <div className="job-summary-block">
        <p>
          <strong>Customer:</strong> {customerName}
        </p>
        <p>
          <strong>Vehicle:</strong> {vehicle}
        </p>
        <p>
          <strong>Package:</strong> {pkg}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
      </div>

      <h2>Photos</h2>
      <div className="job-summary-photos">
        {photos.map((p, i) => (
          <img key={i} src={p} alt="job" className="job-summary-thumb" />
        ))}
      </div>
    </div>
  )
}
