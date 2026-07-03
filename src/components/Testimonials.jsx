export default function Testimonials() {
  const testimonials = [
    {
      quote: "CHN's temporary staffing solution helped us handle seasonal demand spikes without disrupting operations. Their compliance team ensured every associate was onboarded within regulatory norms — impressive turnaround.",
      author: "Rahul Mehta",
      role: "HR Manager, Manufacturing Sector",
      initials: "RM"
    },
    {
      quote: "We switched to CHN for payroll management across 3 states — the accuracy and statutory compliance has been flawless. Our finance team's workload dropped significantly, and employee satisfaction improved.",
      author: "Sunita Krishnan",
      role: "CFO, Logistics Company",
      initials: "SK"
    },
    {
      quote: "CHN filled 40 critical technology roles within three weeks through their permanent recruitment service. The candidates were highly skilled and culturally aligned. A true staffing partner, not just a vendor.",
      author: "Arun Pillai",
      role: "VP of Engineering, IT Firm",
      initials: "AP"
    }
  ];

  return (
    <section className="testi" aria-label="Client testimonials">
      <div className="container">
        <p className="section-tag" style={{ color: "#93c5fd" }}>Client Stories</p>
        <h2 className="section-title" style={{ color: "#fff" }}>Trusted by Businesses Across India</h2>
        <div className="testi-grid">
          {testimonials.map((testi, index) => (
            <div key={index} className="testi-card">
              <p className="testi-quote">"{testi.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{testi.initials}</div>
                <div>
                  <div className="testi-name">{testi.author}</div>
                  <div className="testi-role">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
