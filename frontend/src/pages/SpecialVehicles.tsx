import { useState } from 'react'
import axios from 'axios'

export default function SpecialVehicles() {
  const [form, setForm] = useState({
    type: '',
    name: '',
    phone: '',
    postcode: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitRequest = async () => {
    await axios.post('/api/special-vehicles', form)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="success">
        <h2>Request Sent</h2>
        <p>We’ll contact you shortly with a custom quote.</p>
      </div>
    )
  }

  return (
    <div className="special-vehicles-page">
      <h1>Special Vehicle Request</h1>

      <label>Vehicle Type</label>
      <select name="type" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Jet Ski">Jet Ski</option>
        <option value="Boat">Boat</option>
        <option value="ATV / Quad">ATV / Quad</option>
        <option value="Motorbike">Motorbike</option>
        <option value="Other">Other</option>
      </select>

      <label>Your Name</label>
      <input name="name" onChange={handleChange} />

      <label>Phone</label>
      <input name="phone" onChange={handleChange} />

      <label>Postcode</label>
      <input name="postcode" onChange={handleChange} />

      <label>Notes</label>
      <textarea name="notes" onChange={handleChange}></textarea>

      <a className="whatsapp-btn" href="https://wa.me/447841410122" target="_blank">
        Send Photos on WhatsApp
      </a>

      <button onClick={submitRequest}>Submit Request</button>
    </div>
  )
}
