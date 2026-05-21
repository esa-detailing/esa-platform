import './Services.css'

export default function Services() {
  return (
    <div className="services">
      <h1 className="page-title">Our Services</h1>

      <div className="service-grid">
        <div className="service-card">
          <h2>Exterior Detail</h2>
          <p>Deep clean, decontamination, gloss enhancement.</p>
        </div>

        <div className="service-card">
          <h2>Interior Detail</h2>
          <p>Deep vacuum, steam clean, fabric & leather care.</p>
        </div>

        <div className="service-card">
          <h2>Paint Enhancement</h2>
          <p>Machine polishing for clarity & shine.</p>
        </div>

        <div className="service-card">
          <h2>Ceramic Coating</h2>
          <p>Long‑term protection with hydrophobic finish.</p>
        </div>
      </div>
    </div>
  )
}
