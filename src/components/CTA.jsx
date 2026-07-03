import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="cta-banner" id="contact">
      <div className="container">
        <h2>Ready to Build Your Dream Team?</h2>
        <p>Talk to a CHN workforce consultant today. Fast sourcing, full compliance, and dedicated support — from day one.</p>
        <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>Get in Touch with CHN</Link>
      </div>
    </section>
  );
}
