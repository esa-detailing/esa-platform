import React from 'react'
import './TechnicianHistory.css'

export default function TechnicianHistory() {
  const jobs = [
    { id: 1, customer: 'John Smith', date: '2026-05-20', status: 'Complete' },
    { id: 2, customer: 'Sarah Jones', date: '2026-05-21', status: 'Complete' }
  ]

  return (
    <div className="tech-history-container">
      <h1>Job History</h1>

      {jobs.map((job) => (
        <div key={job.id} className="tech-history-item">
          <p>
            <strong>{job.customer}</strong>
          </p>
          <p>{job.date}</p>
          <p>{job.status}</p>
        </div>
      ))}
    </div>
  )
}
