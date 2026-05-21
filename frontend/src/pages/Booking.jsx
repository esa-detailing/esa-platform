import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import Input from '../components/Input'
import Button from '../components/Button'
import BookingSummary from '../components/BookingSummary'
import Divider from '../components/Divider'

const Booking = () => {
  const [vehicle, setVehicle] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = () => {
    console.log('Booking submitted')
  }

  return (
    <div className="booking-page">
      <PageTitle text="Book Your Service" />
      <Divider />

      <Input
        label="Vehicle"
        value={vehicle}
        onChange={setVehicle}
        placeholder="e.g. Range Rover Sport"
      />
      <Input label="Service" value={service} onChange={setService} placeholder="e.g. Full Valet" />
      <Input label="Date" type="date" value={date} onChange={setDate} />
      <Input label="Price (£)" type="number" value={price} onChange={setPrice} />

      <Button text="Confirm Booking" onClick={handleSubmit} />

      <Divider />

      <BookingSummary vehicle={vehicle} service={service} date={date} price={price} />
    </div>
  )
}

export default Booking
