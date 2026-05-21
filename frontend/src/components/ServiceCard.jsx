import React from 'react'

const ServiceCard = ({ title, description, price, onClick }) => {
  return (
    <div className="service-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">£{price}</span>
    </div>
  )
}

export default ServiceCard
