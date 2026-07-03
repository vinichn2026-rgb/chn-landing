export default function Hero() {
  return (
    <header className="hero" role="banner">
      <div className="hero-inner">
        <div>
          <p className="hero-eyebrow">Trusted Workforce Partner Across India</p>
          <h1>India's Leading <span>Staffing & Manpower</span> Solutions Provider</h1>
          <p>CHN delivers end-to-end workforce solutions — from contract staffing and permanent recruitment to payroll management and facility services — helping 500+ clients build scalable, compliant teams across 15+ industry sectors.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Request Talent</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </div>
        </div>
        <div>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="num">15+</div>
              <div className="lbl">Industry Sectors</div>
            </div>
            <div className="stat-card">
              <div className="num">10+</div>
              <div className="lbl">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="num">PAN</div>
              <div className="lbl">India Coverage</div>
            </div>
            <div className="stat-card">
              <div className="num">100%</div>
              <div className="lbl">Compliance Focus</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
