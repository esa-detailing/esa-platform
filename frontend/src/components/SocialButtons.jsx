import React from 'react'
import { socialLinks } from '../config/socialLinks'
import './SocialButtons.css'

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
        <button className="social-btn fb">Facebook</button>
      </a>

      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
        <button className="social-btn ig">Instagram</button>
      </a>

      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <button className="social-btn wa">WhatsApp</button>
      </a>
    </div>
  )
}

export default SocialButtons
