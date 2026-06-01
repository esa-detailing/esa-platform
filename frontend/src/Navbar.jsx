import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>ESA Detailing</div>

      <div style={linksStyle}>
        <Link to="/" style={link}>
          Home
        </Link>
        <Link to="/services" style={link}>
          Services
        </Link>
        <Link to="/booking" style={link}>
          Booking
        </Link>
        <Link to="/gallery" style={link}>
          Gallery
        </Link>
        <Link to="/contact" style={link}>
          Contact
        </Link>
      </div>
    </nav>
  )
}

const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 999,
  background: 'rgba(0, 0, 0, 0.85)',
  backdropFilter: 'blur(6px)',
  padding: '18px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid gold',
  boxShadow: '0 0 20px rgba(255, 215, 0, 0.15)'
}

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'gold',
  letterSpacing: '1px'
}

const linksStyle = {
  display: 'flex',
  gap: '25px'
}

const link = {
  color: '#ccc',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold'
}
