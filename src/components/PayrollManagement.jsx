import { Link } from 'react-router-dom';
import { MdPayments, MdFactCheck, MdReceipt, MdComputer, MdAnalytics, MdLock } from 'react-icons/md';
import CTA from './CTA';

export default function PayrollManagement() {
  return (
    <div className="payroll-management">
      <section className="pm-hero" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--gray-700) 100%)', color: '#fff', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="pm-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', opacity: '0.8', marginBottom: '20px', color: '#a7f3d0' }}>Compliance & Processing</div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.15' }}>Flawless Payroll Management</h1>
            <p style={{ fontSize: '20px', opacity: '0.9', marginBottom: '40px', lineHeight: '1.6' }}>Streamline your HR operations with 100% compliant, accurate, and automated payroll processing. We handle the complexity so you can focus on growth.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary">Automate Your Payroll</Link>
              <Link to="/#services" className="btn-outline">Explore Other Services</Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 1 }}></div>
      </section>

      <section className="pm-benefits" style={{ padding: '100px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <span className="section-tag">Key Features</span>
            <h2 className="section-title">End-to-End Payroll Solutions</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Eliminate errors and administrative burden with our comprehensive payroll management services.</p>
          </div>
          
          <div className="pm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              { icon: <MdPayments color="#1a6fd4" />, title: 'Accurate Processing', desc: 'Timely and error-free salary disbursement tailored to your organizational structure.' },
              { icon: <MdFactCheck color="#1a6fd4" />, title: '100% Compliance', desc: 'Expert handling of PF, ESI, PT, and LWF across multiple states and jurisdictions.' },
              { icon: <MdReceipt color="#1a6fd4" />, title: 'Tax Management', desc: 'Accurate TDS calculations, deductions, and timely filing of returns.' },
              { icon: <MdComputer color="#1a6fd4" />, title: 'Digital Payslips', desc: 'Secure, automated distribution of payslips and tax sheets to all employees.' },
              { icon: <MdAnalytics color="#1a6fd4" />, title: 'Advanced Reporting', desc: 'Customized MIS reports and analytics for better financial forecasting.' },
              { icon: <MdLock color="#1a6fd4" />, title: 'Data Security', desc: 'Bank-grade security protocols to protect sensitive employee and financial information.' }
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
              <span className="section-tag">Statutory Compliance</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Risk-Free Operations</h2>
              <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '32px' }}>
                Navigating Indian labour laws can be complex. Our dedicated compliance experts ensure your organization remains strictly compliant with all central and state regulations.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Provident Fund (PF) Management', 'Employee State Insurance (ESI)', 'Professional Tax (PT)', 'Labour Welfare Fund (LWF)', 'TDS & Year-End Tax Filings'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '18px', fontWeight: '600', color: 'var(--gray-900)' }}>
                    <span style={{ color: 'var(--blue-mid)' }}>✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(10,60,130,0.08)' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Simplify Your Payroll</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-500)', marginBottom: '32px', lineHeight: '1.7' }}>
                Reduce administrative overhead and eliminate compliance risks. Let CHN handle your payroll so you can focus on what matters most—your business.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>Get a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
}
