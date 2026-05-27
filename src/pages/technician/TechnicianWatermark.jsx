import React, { useState } from 'react'
import './TechnicianWatermark.css'

export default function TechnicianWatermark({ photos, onDone }) {
  const [processed, setProcessed] = useState([])

  const applyWatermark = () => {
    // Placeholder watermark logic
    setProcessed(photos)
  }

  return (
    <div className="watermark-container">
      <h1>Apply Watermark</h1>

      <button className="wm-btn" onClick={applyWatermark}>
        Apply ESA Watermark
      </button>

      <div className="wm-preview">
        {processed.map((p, i) => (
          <img key={i} src={p} alt="wm" className="wm-thumb" />
        ))}
      </div>

      {processed.length > 0 && (
        <button className="wm-next-btn" onClick={onDone}>
          Finish Job
        </button>
      )}
    </div>
  )
}
