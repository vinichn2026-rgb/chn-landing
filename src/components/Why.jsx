export default function Why() {
  const whyItems = [
    {
      title: "Fast Time-to-Hire",
      description: "Our pre-screened candidate database and smart-matching technology reduce your hiring cycle by up to 60%, getting the right talent deployed faster."
    },
    {
      title: "Full Compliance Guarantee",
      description: "Every engagement is backed by expert statutory compliance management — PF, ESI, labour law, and contract worker regulations across all states."
    },
    {
      title: "Dedicated Account Management",
      description: "A single point of contact who understands your business goals, workforce challenges, and SLA commitments — ensuring seamless service delivery."
    },
    {
      title: "Scalable Workforce Models",
      description: "Whether you need 10 or 10,000 workers — temporary, permanent, or hybrid — CHN's flexible engagement models scale with your business demands."
    }
  ];

  const pillars = [
    { n: "PAN India", t: "Sourcing & Deployment Network" },
    { n: "15+", t: "Industry Sectors Covered" },
    { n: "100%", t: "Statutory Compliance" },
    { n: "Tech-driven", t: "HR Workflow Automation" }
  ];

  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why-inner">
          <div className="why-content">
            <p className="section-tag">Why Choose CHN</p>
            <h2 className="section-title">Your Strategic Partner in Workforce Excellence</h2>
            <p className="section-sub">We combine deep industry expertise, technology-driven processes, and a pan-India network to deliver workforce solutions that scale with your business — compliantly and efficiently.</p>
            <div className="pillar-grid">
              {pillars.map((pillar, index) => (
                <div key={index} className="pillar">
                  <div className="n">{pillar.n}</div>
                  <div className="t">{pillar.t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-visual">
            {whyItems.map((item, index) => (
              <div key={index} className="why-item">
                <div className="why-check">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
