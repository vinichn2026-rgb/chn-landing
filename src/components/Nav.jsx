import { Link } from 'react-router-dom'
import logo from '../assets/CHN logo with BG.png'

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <div className="nav-inner">
       <div className="nav-logo">
  <Link to="/">
    <img src={logo} alt="CHN Logo" />
  </Link>
</div>
        <div className="nav-links">
          <a href="/#services">Our Services</a>
          <a href="/#industries">Industries</a>
          <a href="/#why">Why CHN</a>
          <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none' }}>Request Talent</Link>
        </div>
      </div>
    </nav>
  );
}
