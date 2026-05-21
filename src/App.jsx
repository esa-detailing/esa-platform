import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Logo from './Logo.jsx'
import Services from './pages/Services.jsx'
import Booking from './pages/Booking.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import './global.css'

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.6',
        position: 'relative'
      }}
    >
      <Navbar />

      <div style={{ flex: 1 }} className="fade-in">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447841410122"
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappButton}
      >
        💬
      </a>
    </div>
  )
}

function Home() {
  return (
    <div
      style={{
        padding: '100px 20px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '20px',
        boxShadow: '0 0 40px rgba(255, 215, 0, 0.15)'
      }}
    >
      <div
        style={{
          backdropFilter: 'blur(6px)',
          background: 'rgba(0, 0, 0, 0.55)',
          padding: '60px 20px',
          borderRadius: '20px'
        }}
      >
        <Logo />

        <h1
          style={{
            fontSize: '56px',
            marginBottom: '25px',
            color: 'gold',
            letterSpacing: '1px'
          }}
        >
          Premium Detailing in Liverpool
        </h1>

        <p
          style={{
            fontSize: '22px',
            color: '#ddd',
            maxWidth: '650px',
            margin: '0 auto 60px'
          }}
        >
          Mobile & Unit‑Based Detailing • Paint Enhancement • Deep Interior Cleans • Ceramic
          Protection
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            maxWidth: '350px',
            margin: '0 auto'
          }}
        >
          <Link to="/booking">
            <button style={buttonPrimary}>Book Now</button>
          </Link>
          <Link to="/services">
            <button style={buttonSecondary}>View Services</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const buttonPrimary = {
  padding: '20px',
  fontSize: '20px',
  background: 'gold',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#000'
}

const buttonSecondary = {
  padding: '20px',
  fontSize: '20px',
  background: 'transparent',
  border: '2px solid gold',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: 'gold'
}

const whatsappButton = {
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  background: 'gold',
  color: '#000',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  fontWeight: 'bold',
  textDecoration: 'none',
  boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)',
  zIndex: 999,
  transition: '0.2s ease'
}
