import { Link } from 'react-router-dom';
import { MdCleaningServices, MdSecurity, MdHandyman, MdPark, MdPestControl, MdCorporateFare } from 'react-icons/md';
import CTA from './CTA';

export default function FacilityManagement() {
  return (
    <div className="facility-management">
      <section className="fm-hero" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--gray-700) 100%)', color: '#fff', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="fm-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.8', marginBottom: '20px', color: '#6ee7b7' }}>Integrated Solutions</div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.15' }}>Premium Facility Management</h1>
            <p style={{ fontSize: '20px', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>Maintain a safe, clean, and productive environment. Our integrated facility services ensure your physical assets are protected and your workforce thrives.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Get a Facility Audit</Link>
              <Link to="/#services" className="btn-outline">Explore Other Services</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '15%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-15%', left: '-10%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 1 }}></div>
      </section>

      <section className="fm-services" style={{ padding: '100px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-tag">Comprehensive Care</span>
            <h2 className="section-title">Our Facility Services</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>From soft services to technical maintenance, we provide a single point of contact for all your facility needs.</p>
          </div>
          
          <div className="fm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: <MdCleaningServices color="#1a6fd4" />, title: 'Housekeeping & Janitorial', desc: 'Industry-standard cleaning, sanitation, and hygiene services tailored to your premises.' },
              { icon: <MdSecurity color="#1a6fd4" />, title: 'Security Services', desc: 'Trained personnel, access control, and 24/7 surveillance to keep your assets secure.' },
              { icon: <MdHandyman color="#1a6fd4" />, title: 'Technical Maintenance', desc: 'Preventative and reactive maintenance for HVAC, plumbing, and electrical systems.' },
              { icon: <MdPark color="#1a6fd4" />, title: 'Landscaping & Horticulture', desc: 'Professional groundskeeping to maintain the aesthetic appeal of your exterior spaces.' },
              { icon: <MdPestControl color="#1a6fd4" />, title: 'Pest Control', desc: 'Safe, compliant, and highly effective pest management programs for commercial spaces.' },
              { icon: <MdCorporateFare color="#1a6fd4" />, title: 'Space Management', desc: 'Optimizing workspace utilization, cafeteria management, and front desk operations.' }
            ].map((feature, i) => (
              <div key={i} className="service-card" style={{ padding: '40px' }}>
                <div className="service-icon" style={{ fontSize: '32px', marginBottom: '24px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px' }}>{feature.title}</h3>
                <p style={{ fontSize: '16px', color: 'var(--gray-500)', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Quality Standards</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Excellence in Execution</h2>
              <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '32px' }}>
                We adhere to strict international standards for safety, sustainability, and quality control. Our data-driven approach ensures continuous improvement across all your facilities.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['ISO Certified Processes', 'Eco-Friendly Cleaning Solutions', 'Digital Auditing & Reporting', 'Strict SLA Compliance', '24/7 Emergency Response'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    <span style={{ color: 'var(--blue-mid)' }}>✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(10,60,130,0.08)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Protect Your Investment</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-500)', marginBottom: '32px', lineHeight: '1.7' }}>
                A well-maintained facility increases asset longevity and boosts employee morale. Partner with CHN to elevate your workplace standards.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Contact Our Experts</Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
