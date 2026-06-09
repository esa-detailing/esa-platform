import React from 'react'
import BookingSummary from '../components/BookingSummary'
import BookingFooter from '../components/BookingFooter'
import './BookingReview.css'

export default function BookingReview() {
  return (
    <div className="review-container">
      <h1>Review Your Booking</h1>

      <BookingSummary />

      <BookingFooter />
    </div>
  )
}
