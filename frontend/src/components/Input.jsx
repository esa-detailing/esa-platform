import React from 'react'

const Input = ({ label, value, onChange, type = 'text', placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
