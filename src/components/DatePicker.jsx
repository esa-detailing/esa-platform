import React from 'react'
import './DatePicker.css'

export default function DatePicker({ value, onChange }) {
  return (
    <div className="date-picker-box">
      <input
        type="date"
        className="date-picker-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
