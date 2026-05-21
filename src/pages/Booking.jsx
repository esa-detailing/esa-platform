import './Booking.css'
import { useState } from 'react'

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="booking">
      <h1 className="page-title">Book Your Detail</h1>

      {submitted ? (
        <div className="success-box">Booking submitted successfully!</div>
      ) : (
        <form
          className="booking-form"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Vehicle Registration" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Postcode" required />
          <textarea placeholder="Additional Notes"></textarea>

          <button type="submit" className="btn-primary">
            Submit Booking
          </button>
        </form>
      )}
    </div>
  )
}
