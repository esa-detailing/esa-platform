import React from 'react'

const Button = ({ text, onClick, type = 'button', disabled }) => {
  return (
    <button className="btn" type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
