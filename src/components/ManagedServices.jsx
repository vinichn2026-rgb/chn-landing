import { Link } from 'react-router-dom';
import { MdTrendingUp, MdSupervisorAccount, MdSchool, MdSecurity, MdTrendingDown, MdAnalytics } from 'react-icons/md';
import CTA from './CTA';

export default function ManagedServices() {
  return (
    <div className="managed-services">
      <section className="ms-hero" style={{ background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--blue-mid) 100%)', color: '#fff', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="ms-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.8', marginBottom: '20px', color: '#fcd34d' }}>End-to-End Governance</div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.15' }}>Managed Workforce Services</h1>
            <p style={{ fontSize: '20px', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>We don’t just deploy talent; we manage the outcome. Experience SLA-driven workforce management with complete operational oversight and guaranteed performance.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Optimize Operations</Link>
              <Link to="/#services" className="btn-outline">Explore Other Services</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-15%', right: '-5%', width: '450px', height: '450px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 1 }}></div>
      </section>

      <section className="ms-benefits" style={{ padding: '100px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-tag">Our Value Proposition</span>
            <h2 className="section-title">Beyond Standard Staffing</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>We take complete ownership of your contingent workforce, from recruitment to day-to-day productivity management.</p>
          </div>
          
          <div className="ms-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: <MdTrendingUp color="#1a6fd4" />, title: 'SLA-Driven Performance', desc: 'Guaranteed output and productivity metrics tied directly to service level agreements.' },
              { icon: <MdSupervisorAccount color="#1a6fd4" />, title: 'On-Site Management', desc: 'Dedicated supervisors and SPOCs deployed at your facility to manage daily operations.' },
              { icon: <MdSchool color="#1a6fd4" />, title: 'Training & Skilling', desc: 'Continuous on-the-job training to ensure the workforce meets your quality standards.' },
              { icon: <MdSecurity color="#1a6fd4" />, title: 'Risk Mitigation', desc: 'Complete transfer of compliance, safety, and operational risks to our expert team.' },
              { icon: <MdTrendingDown color="#1a6fd4" />, title: 'Cost Optimization', desc: 'Reduce your total cost of workforce ownership through efficiency and scale.' },
              { icon: <MdAnalytics color="#1a6fd4" />, title: 'Data Analytics', desc: 'Real-time dashboards providing full visibility into attendance, attrition, and output.' }
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
              <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Transform Your Operations</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-500)', marginBottom: '32px', lineHeight: '1.7' }}>
                Move from tactical hiring to strategic workforce management. Let our experts run your non-core operations so you can focus entirely on your core business.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Schedule a Discovery Call</Link>
            </div>
            <div>
              <span className="section-tag">Execution</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>How We Deliver</h2>
              <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '32px' }}>
                Our managed services model is built on a robust framework of governance, technology, and industry best practices.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Requirement Scoping & SLA Definition', 'Talent Sourcing & Deployment', 'On-Site Supervision & Governance', 'Performance & Productivity Tracking', 'Continuous Process Improvement'].map((step, i) => (
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
