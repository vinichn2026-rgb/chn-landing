import { Link } from 'react-router-dom';
import { MdTimer, MdSecurity, MdTrendingUp, MdSavings, MdTrackChanges, MdHandshake } from 'react-icons/md';
import CTA from './CTA';

export default function TemporaryStaffing() {
  return (
    <div className="temp-staffing">
      <section className="ts-hero" style={{ background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--blue-dark) 100%)', color: '#fff', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ts-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.8', marginBottom: '20px', color: '#93c5fd' }}>Workforce Solutions</div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.15' }}>Dynamic Temporary Staffing Solutions</h1>
            <p style={{ fontSize: '20px', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>Scale your workforce instantly with pre-screened, compliant, and highly skilled professionals ready to deploy within 48 hours.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Hire Now</Link>
              <Link to="/#services" className="btn-outline">Explore Other Services</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 1 }}></div>
      </section>

      <section className="ts-benefits" style={{ padding: '100px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-tag">Core Benefits</span>
            <h2 className="section-title">Why Choose CHN for Temporary Staffing?</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>We handle everything from sourcing to compliance, giving you the ultimate flexibility to grow without overhead.</p>
          </div>
          
          <div className="ts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: <MdTimer color="#1a6fd4" />, title: 'Rapid Deployment', desc: 'Get qualified candidates integrated into your team within 24-48 hours.' },
              { icon: <MdSecurity color="#1a6fd4" />, title: '100% Compliant', desc: 'We handle all statutory compliance, PF, ESI, and HR administration.' },
              { icon: <MdTrendingUp color="#1a6fd4" />, title: 'Unmatched Flexibility', desc: 'Easily scale your workforce up or down based on seasonal demands.' },
              { icon: <MdSavings color="#1a6fd4" />, title: 'Cost Optimization', desc: 'Reduce hiring costs and eliminate permanent payroll burdens.' },
              { icon: <MdTrackChanges color="#1a6fd4" />, title: 'Quality Talent', desc: 'Access to a vast pool of pre-screened and highly skilled professionals.' },
              { icon: <MdHandshake color="#1a6fd4" />, title: 'Dedicated Support', desc: '24/7 account management to ensure seamless operations.' }
            ].map((benefit, i) => (
              <div key={i} className="service-card" style={{ padding: '40px' }}>
                <div className="service-icon" style={{ fontSize: '32px', marginBottom: '24px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '16px', color: 'var(--gray-500)', lineHeight: '1.6' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Industries</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Sectors We Empower</h2>
              <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '32px' }}>
                Our temporary staffing solutions are designed to cater to a diverse range of industries. Whether you need warehouse associates, IT support, or administrative staff, we have the right talent for you.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Manufacturing & Engineering', 'IT & Technology', 'Logistics & Supply Chain', 'E-commerce & Retail', 'Healthcare & Pharma'].map((industry, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    <span style={{ color: 'var(--blue-mid)' }}>✔</span> {industry}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(10,60,130,0.08)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Ready to Scale?</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-500)', marginBottom: '32px', lineHeight: '1.7' }}>
                Partner with CHN Workforce Solutions today and experience the power of a truly flexible, compliant, and highly skilled contingent workforce.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Talk to an Expert</Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
