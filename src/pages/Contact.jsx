import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className="contact">
      <h1 className="page-title">Contact Us</h1>

      {sent ? (
        <div className="success-box">Message sent successfully!</div>
      ) : (
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea placeholder="How can we help?" required />
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
