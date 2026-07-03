import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/CHN logo with BG.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav aria-label="Main navigation">
      <div className="nav-inner">
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="CHN Logo" />
          </Link>
        </div>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="/#services">Our Services</a>
          <a href="/#industries">Industries</a>
          <a href="/#why">Why CHN</a>
          <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none' }}>Request Talent</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="nav-mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="nav-mobile-dropdown">
          <a href="/#services" onClick={closeMenu}>Our Services</a>
          <a href="/#industries" onClick={closeMenu}>Industries</a>
          <a href="/#why" onClick={closeMenu}>Why CHN</a>
          <Link to="/contact" className="nav-cta-mobile" onClick={closeMenu}>Request Talent</Link>
        </div>
      )}
    </nav>
  );
}
