import './FAQ.css'

export default function FAQ() {
  return (
    <div className="faq">
      <h1 className="page-title">FAQ</h1>

      <div className="faq-list">
        <div className="faq-item">
          <h2>How do I book?</h2>
          <p>Use the booking page to send your details and we’ll confirm your slot.</p>
        </div>

        <div className="faq-item">
          <h2>Do you offer mobile detailing?</h2>
          <p>Yes, subject to access, weather and power availability.</p>
        </div>

        <div className="faq-item">
          <h2>Do you require a deposit?</h2>
          <p>Yes, a 50% deposit is required to secure your booking.</p>
        </div>
      </div>
    </div>
  )
}
