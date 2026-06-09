import './Pricing.css'

export default function Pricing() {
  return (
    <div className="pricing">
      <h1 className="page-title">Pricing</h1>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h2>Maintenance Wash</h2>
          <p className="price">From £40</p>
        </div>

        <div className="pricing-card">
          <h2>Full Interior Detail</h2>
          <p className="price">From £120</p>
        </div>

        <div className="pricing-card">
          <h2>Paint Enhancement</h2>
          <p className="price">From £250</p>
        </div>

        <div className="pricing-card">
          <h2>Ceramic Package</h2>
          <p className="price">From £500</p>
        </div>
      </div>
    </div>
  )
}
