import React, { useState } from 'react'
import './TechnicianPhotos.css'

export default function TechnicianPhotos({ onComplete }) {
  const [photos, setPhotos] = useState([])

  const handleAddPhoto = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setPhotos((prev) => [...prev, url])
  }

  const handleNext = () => {
    onComplete(photos)
  }

  return (
    <div className="photos-container">
      <h1>Job Photos</h1>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleAddPhoto}
        className="photo-input"
      />

      <div className="photo-preview">
        {photos.map((p, i) => (
          <img key={i} src={p} alt="job" className="photo-thumb" />
        ))}
      </div>

      <button className="photos-next-btn" onClick={handleNext}>
        Continue to Watermark
      </button>
    </div>
  )
}
