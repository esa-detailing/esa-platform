import React, { useState, useEffect } from 'react'
import './TechnicianJobTimer.css'

export default function TechnicianJobTimer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="timer-container">
      <h1>Job Timer</h1>
      <p>
        Time on job: {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
      </p>
    </div>
  )
}
