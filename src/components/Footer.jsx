import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-name">CHN Technologies</div>
            <p>CHN Technologies is a leading provider of technology and consulting solutions, delivering IT, HR, and business services with innovation and trust. We align systems, people, and processes to help businesses remain resilient in a changing digital landscape.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/temporary-staffing">Temporary Staffing</Link>
            <Link to="/permanent-recruitment">Permanent Recruitment</Link>
            <Link to="/payroll-management">Payroll Management</Link>
            <Link to="/managed-services">Managed Services</Link>
            <Link to="/facility-management">Facility Management</Link>
            <Link to="/naps-apprenticeship">NAPS Apprenticeship</Link>
          </div>
          <div className="footer-col">
            <h4>Industries</h4>
            <a href="#industries">Manufacturing</a>
            <a href="#industries">BFSI / NBSI</a>
            <a href="#industries">Technology & IT</a>
            <a href="#industries">Healthcare</a>
            <a href="#industries">Logistics & SCM</a>
            <a href="#industries">Ecommerce</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About CHN</Link>
            <Link to="/why">Why Choose Us</Link>
            <Link to="/services">Our Process</Link>
            <Link to="/blogs">Blog & Resources</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 CHN Technologies. All rights reserved.</p>
          <p>Privacy Policy · Terms of Use</p>
        </div>
        {/* Updated footer content to trigger new commit */}
      </div>
    </footer>
  );
}
