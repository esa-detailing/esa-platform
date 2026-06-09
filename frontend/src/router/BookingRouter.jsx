import React, { useState } from 'react'
import MobileBooking from '../pages/MobileBooking'
import BookingReview from '../pages/BookingReview'
import BookingLoader from '../components/BookingLoader'
import BookingSuccess from '../pages/BookingSuccess'
import BookingError from '../pages/BookingError'
import { handleFinalBooking } from '../utils/BookingSubmitHandler'

export default function BookingRouter() {
  const [step, setStep] = useState('form')
  const [formData, setFormData] = useState({})

  const handleFormComplete = (data) => {
    setFormData(data)
    setStep('review')
  }

  const handleSubmit = () => {
    setStep('loading')

    handleFinalBooking(
      formData,
      () => setStep('success'),
      () => setStep('error')
    )
  }

  return (
    <>
      {step === 'form' && <MobileBooking onComplete={handleFormComplete} />}
      {step === 'review' && <BookingReview data={formData} onSubmit={handleSubmit} />}
      {step === 'loading' && <BookingLoader />}
      {step === 'success' && <BookingSuccess />}
      {step === 'error' && <BookingError />}
    </>
  )
}
