import { Link } from 'react-router-dom';
import { MdManageSearch, MdTrackChanges, MdRocketLaunch, MdAnalytics, MdHandshake, MdVerifiedUser } from 'react-icons/md';
import CTA from './CTA';

export default function PermanentRecruitment() {
  return (
    <div className="permanent-recruitment">
      <section className="pr-hero" style={{ background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--blue-dark) 100%)', color: '#fff', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="pr-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.8', marginBottom: '20px', color: '#93c5fd' }}>Talent Acquisition</div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.15' }}>Strategic Permanent Recruitment</h1>
            <p style={{ fontSize: '20px', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>Build your core team with exceptional talent. Our targeted search and comprehensive vetting process ensures you hire the right cultural fit for long-term success.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Find Top Talent</Link>
              <Link to="/#services" className="btn-outline">Explore Other Services</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 1 }}></div>
      </section>

      <section className="pr-process" style={{ padding: '100px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">End-to-End Search & Selection</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>We go beyond standard job boards to proactively identify, engage, and secure high-impact professionals for your organization.</p>
          </div>
          
          <div className="pr-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: <MdManageSearch color="#1a6fd4" />, title: 'Executive Search', desc: 'Targeted headhunting for leadership and niche roles that drive strategic growth.' },
              { icon: <MdTrackChanges color="#1a6fd4" />, title: 'Cultural Alignment', desc: 'Rigorous assessment to ensure candidates align perfectly with your company values.' },
              { icon: <MdRocketLaunch color="#1a6fd4" />, title: 'RPO Solutions', desc: 'Outsource your entire recruitment process to our experts for maximum efficiency.' },
              { icon: <MdAnalytics color="#1a6fd4" />, title: 'Data-Driven Sourcing', desc: 'Utilizing advanced analytics and market intelligence to locate passive candidates.' },
              { icon: <MdHandshake color="#1a6fd4" />, title: 'Candidate Experience', desc: 'Ensuring a seamless, professional journey for candidates to protect your employer brand.' },
              { icon: <MdVerifiedUser color="#1a6fd4" />, title: 'Placement Guarantee', desc: 'Risk-free hiring with our standard replacement guarantees on all permanent placements.' }
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

      <section style={{ padding: '80px 24px', background: 'var(--blue-pale)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(10,60,130,0.08)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Secure Your Next Leader</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-500)', marginBottom: '32px', lineHeight: '1.7' }}>
                Stop waiting for the right candidates to apply. Partner with CHN to proactively build a high-performing team that accelerates your business objectives.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Consult an Expert</Link>
            </div>
            <div>
              <span className="section-tag">Expertise</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Roles We Specialize In</h2>
              <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '32px' }}>
                From mid-level management to C-suite executives, our recruiters have deep domain expertise across multiple functional areas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['C-Suite & Board', 'Technology & Engineering', 'Finance & Accounting'].map((role, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: '700', color: 'var(--gray-900)' }}>
                      <span style={{ color: 'var(--blue-mid)' }}>✔</span> {role}
                    </li>
                  ))}
                </ul>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {['Sales & Marketing', 'HR & Operations', 'Supply Chain Management'].map((role, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '16px', fontWeight: '700', color: 'var(--gray-900)' }}>
                      <span style={{ color: 'var(--blue-mid)' }}>✔</span> {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
