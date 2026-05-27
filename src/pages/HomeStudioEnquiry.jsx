import React, { useState } from 'react'
import './HomeStudioEnquiry.css'

export default function HomeStudioEnquiry() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    const enquiry = {
      name,
      phone,
      service,
      message,
      mode: 'home_studio_enquiry'
    }

    console.log('Enquiry sent:', enquiry)
    alert('Your enquiry has been sent. ESA will contact you shortly.')
  }

  return (
    <div className="enquiry-container">
      <h1 className="enquiry-title">ESA Home Studio Enquiry</h1>
      <p className="enquiry-subtitle">Drop-off available on request only</p>

      <input
        className="enquiry-input"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="enquiry-input"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="enquiry-input"
        placeholder="Service Required"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <textarea
        className="enquiry-textarea"
        placeholder="Additional Info"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="enquiry-button" onClick={handleSubmit}>
        Send Enquiry
      </button>
    </div>
  )
}
