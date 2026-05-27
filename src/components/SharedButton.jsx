import React from 'react'
import './SharedButton.css'

export default function SharedButton({ text, onClick, type = 'primary' }) {
  return (
    <button className={`shared-btn ${type}`} onClick={onClick}>
      {text}
    </button>
  )
}
