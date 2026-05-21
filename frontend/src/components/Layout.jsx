import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1>ESA Detailing</h1>
        <Navbar />
      </header>

      <main className="content">{children}</main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} ESA Detailing</p>
      </footer>
    </div>
  )
}

export default Layout
