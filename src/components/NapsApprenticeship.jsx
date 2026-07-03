import React from 'react';
import { Link } from 'react-router-dom';
import CTA from './CTA';

export default function NapsApprenticeship() {
  return (
    <div className="naps-apprenticeship">
      <section className="naps-hero" style={{ background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--blue-dark) 100%)', color: '#fff', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="naps-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.8', marginBottom: '20px', color: '#fef08a' }}>Skill India Initiative</div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.15' }}>NAPS Apprenticeship Programs</h1>
            <p style={{ fontSize: '20px', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>Build a future-ready workforce while benefiting from government subsidies. We simplify NAPS implementation, from registration to candidate certification.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Start a NAPS Program</Link>
              <Link to="/#services" className="btn-outline">Explore Other Services</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 1 }}></div>
      </section>

      <section className="naps-benefits" style={{ padding: '100px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-tag">Program Advantages</span>
            <h2 className="section-title">Why Adopt NAPS?</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Leverage the National Apprenticeship Promotion Scheme to develop talent tailored to your exact operational needs.</p>
          </div>
          
          <div className="naps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: '💰', title: 'Financial Subsidies', desc: 'Reimbursement of 25% of prescribed stipend up to ₹1500 per month per apprentice by the Government.' },
              { icon: '🎓', title: 'Skill Development', desc: 'Transform raw talent into highly productive employees trained specifically on your company equipment and culture.' },
              { icon: '📉', title: 'Reduced Hiring Costs', desc: 'Lower attrition rates and recruitment costs by building a dedicated, loyal pipeline of entry-level talent.' },
              { icon: '⚖️', title: 'Compliance Simplified', desc: 'Exemption from PF and ESI contributions for apprentices, reducing overall statutory burden.' },
              { icon: '🌱', title: 'CSR Contribution', desc: 'Fulfill corporate social responsibility by contributing to national skill development and youth employability.' },
              { icon: '🤝', title: 'End-to-End Support', desc: 'We handle portal registration, candidate sourcing, documentation, and claim processing.' }
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

      <section style={{ padding: '80px 24px', background: 'var(--blue-pale)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(10,60,130,0.08)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Let Us Handle the Complexity</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-500)', marginBottom: '32px', lineHeight: '1.7' }}>
                Implementing NAPS requires navigating government portals, stringent compliance, and administrative tracking. CHN manages the entire lifecycle so you can focus on training.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Consult a NAPS Expert</Link>
            </div>
            <div>
              <span className="section-tag">Implementation</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Our NAPS Process</h2>
              <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '32px' }}>
                We provide a turnkey solution for apprenticeship management, ensuring zero friction from day one.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Employer Registration on Apprenticeship Portal', 'Sourcing & Screening of Eligible Candidates', 'Contract Generation & Approval', 'Monthly Stipend Processing & Attendance', 'Subsidy Claim Filing & Certification'].map((step, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    <span style={{ color: 'var(--blue-mid)' }}>✔</span> {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
