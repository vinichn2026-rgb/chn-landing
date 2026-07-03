export default function SEO() {
  return (
    <section className="seo-block" aria-label="About CHN workforce solutions">
      <div className="container">
        <p className="section-tag">About CHN</p>
        <h2 className="section-title">India's Trusted Workforce Solutions Company</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '48px', alignItems: 'center' }}>
          {/* Left Column - Visual Stats */}
          <div>
            <div style={{ background: 'linear-gradient(135deg,var(--blue-dark) 0%,var(--blue-mid) 100%)', color: '#fff', borderRadius: '16px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ fontSize: '40px', fontWeight: '900', marginBottom: '8px' }}>10+</div>
                  <div style={{ fontSize: '16px', opacity: '0.9' }}>Years of Industry Leadership</div>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ fontSize: '40px', fontWeight: '900', marginBottom: '8px' }}>PAN India</div>
                  <div style={{ fontSize: '16px', opacity: '0.9' }}>Presence & Operations</div>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <div style={{ fontSize: '40px', fontWeight: '900', marginBottom: '8px' }}>15+</div>
                  <div style={{ fontSize: '16px', opacity: '0.9' }}>Industry Sectors Served</div>
                </div>
                <div>
                  <div style={{ fontSize: '40px', fontWeight: '900', marginBottom: '8px' }}>100%</div>
                  <div style={{ fontSize: '16px', opacity: '0.9' }}>Statutory Compliance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--gray-900)', marginBottom: '16px' }}>Staffing Solutions That Scale With Your Business</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '16px' }}>
                CHN is a comprehensive staffing and manpower solutions company serving businesses of all sizes across India. Our workforce solutions span contract staffing, temp-to-hire, permanent recruitment, payroll outsourcing, and managed services — delivering compliant, scalable teams wherever you operate.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--gray-500)', lineHeight: '1.8' }}>
                Whether you're a startup scaling rapidly or an enterprise managing a distributed workforce, our pan-India network ensures reliable talent sourcing from metros to Tier-2 and Tier-3 cities. We specialise in high-volume recruitment for manufacturing, BFSI, logistics, healthcare, and IT sectors.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '22px', fontWeight: '900', color: 'var(--gray-900)', marginBottom: '16px' }}>Technology-Driven HR Outsourcing</h3>
              <p style={{ fontSize: '15px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '16px' }}>
                Our technology-enabled HR workflow platform automates attendance tracking, payroll processing, compliance reporting, and employee lifecycle management — reducing administrative overhead and increasing workforce visibility for our clients.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--gray-500)', lineHeight: '1.8' }}>
                With dedicated compliance specialists and automated statutory filings, CHN ensures your workforce operations remain fully compliant with the latest labour laws, PF regulations, ESI norms, and contract worker legislation — across every state in India.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid var(--gray-100)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎯</div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '10px' }}>Our Mission</h4>
            <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>To empower businesses with access to skilled talent and streamlined workforce operations across India.</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid var(--gray-100)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>✨</div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '10px' }}>Our Vision</h4>
            <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>To be India's most trusted and innovative workforce solutions partner for sustainable business growth.</p>
          </div>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid var(--gray-100)', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🤝</div>
            <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '10px' }}>Our Values</h4>
            <p style={{ fontSize: '14px', color: 'var(--gray-500)', lineHeight: '1.6' }}>Integrity, Excellence, Innovation, and Compliance in every aspect of our service delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
