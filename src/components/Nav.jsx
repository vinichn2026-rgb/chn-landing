import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
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
          <div className="nav-item-dropdown">
            <a href="/#services" style={{ cursor: 'pointer' }}>
              Our Services <ChevronDown size={16} style={{ marginTop: '2px' }} />
            </a>
            <div className="dropdown-menu">
              <Link to="/temporary-staffing" onClick={closeMenu}>Temporary Staffing</Link>
              <Link to="/permanent-recruitment" onClick={closeMenu}>Permanent Recruitment</Link>
              <Link to="/managed-services" onClick={closeMenu}>Managed Workforce Services</Link>
              <Link to="/payroll-management" onClick={closeMenu}>Payroll Management</Link>
              <Link to="/facility-management" onClick={closeMenu}>Facility Management</Link>
              <Link to="/naps-apprenticeship" onClick={closeMenu}>Apprenticeship Programs (NAPS)</Link>
            </div>
          </div>
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
          <div className="mobile-services-group">
            <span style={{ fontSize: '16px', fontWeight: '700', color: 'var(--gray-700)', padding: '8px 0', display: 'block' }}>Our Services</span>
            <div className="mobile-dropdown-menu" style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '16px', borderLeft: '2px solid var(--gray-100)', marginTop: '4px', marginBottom: '8px' }}>
              <Link to="/temporary-staffing" onClick={closeMenu} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-500)', padding: '4px 0' }}>Temporary Staffing</Link>
              <Link to="/permanent-recruitment" onClick={closeMenu} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-500)', padding: '4px 0' }}>Permanent Recruitment</Link>
              <Link to="/managed-services" onClick={closeMenu} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-500)', padding: '4px 0' }}>Managed Workforce Services</Link>
              <Link to="/payroll-management" onClick={closeMenu} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-500)', padding: '4px 0' }}>Payroll Management</Link>
              <Link to="/facility-management" onClick={closeMenu} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-500)', padding: '4px 0' }}>Facility Management</Link>
              <Link to="/naps-apprenticeship" onClick={closeMenu} style={{ fontSize: '14px', fontWeight: '500', color: 'var(--gray-500)', padding: '4px 0' }}>Apprenticeship Programs (NAPS)</Link>
            </div>
          </div>
          <a href="/#industries" onClick={closeMenu}>Industries</a>
          <a href="/#why" onClick={closeMenu}>Why CHN</a>
          <Link to="/contact" className="nav-cta-mobile" onClick={closeMenu}>Request Talent</Link>
        </div>
      )}
    </nav>
  );
}
