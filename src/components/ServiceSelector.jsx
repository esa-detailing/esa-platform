import React from 'react'
import './ServiceSelector.css'

export default function ServiceSelector({ selected, onSelect }) {
  const services = [
    { id: 'mini', name: 'Mini Valet' },
    { id: 'interior', name: 'Interior Deep Clean' },
    { id: 'exterior', name: 'Exterior Clean' },
    { id: 'full', name: 'Full Valet' },
    { id: 'premium', name: 'Premium Detail' }
  ]

  return (
    <div className="service-selector">
      {services.map((s) => (
        <div
          key={s.id}
          className={`service-card ${selected === s.id ? 'active' : ''}`}
          onClick={() => onSelect(s.id)}
        >
          {s.name}
        </div>
      ))}
    </div>
  )
}
