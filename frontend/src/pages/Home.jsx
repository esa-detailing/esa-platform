import React from 'react'
import PageTitle from '../components/PageTitle'
import ServiceCard from '../components/ServiceCard'
import Divider from '../components/Divider'

const Home = () => {
  const services = [
    { title: 'Mini Valet', description: 'Quick clean inside & out', price: 40 },
    { title: 'Full Valet', description: 'Deep clean interior & exterior', price: 80 },
    { title: 'Detailing', description: 'Premium full detail service', price: 150 }
  ]

  return (
    <div className="home-page">
      <PageTitle text="Welcome to ESA Detailing" />
      <Divider />

      <div className="services-list">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            title={s.title}
            description={s.description}
            price={s.price}
            onClick={() => console.log('Selected:', s.title)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
