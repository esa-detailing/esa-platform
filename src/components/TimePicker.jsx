import React from 'react'
import './TimePicker.css'

export default function TimePicker({ value, onChange }) {
  return (
    <div className="time-picker-box">
      <input
        type="time"
        className="time-picker-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
