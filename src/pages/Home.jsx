import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-overlay">
          <h1 className="home-title">Premium Detailing in Liverpool</h1>
          <p className="home-subtitle">Luxury • Precision • Perfection — ESA Detailing</p>

          <div className="home-buttons">
            <Link to="/booking" className="btn-primary">
              Book Now
            </Link>
            <Link to="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
