import React from 'react'
import './PostcodeInput.css'

export default function PostcodeInput({ value, onChange, onCheck }) {
  return (
    <div className="postcode-box">
      <input
        className="postcode-input"
        placeholder="Enter your postcode"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="postcode-button" onClick={onCheck}>
        Check
      </button>
    </div>
  )
}
