import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          ESA Detailing
        </Link>

        <div className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking" className="nav-book">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
