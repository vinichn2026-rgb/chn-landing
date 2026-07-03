export default function Industries() {
  const industries = [
    { icon: "🏭", name: "Manufacturing" },
    { icon: "🏦", name: "BFSI" },
    { icon: "💻", name: "Technology & IT" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "📦", name: "SCM & Logistics" },
    { icon: "🛒", name: "Ecommerce & Retail" },
    { icon: "📡", name: "Telecom" },
    { icon: "🏗️", name: "Infrastructure" },
    { icon: "🏫", name: "Education" },
    { icon: "🏢", name: "Construction" },
    { icon: "⚡", name: "Energy & Utilities" },
    { icon: "🌾", name: "Agriculture" }
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <p className="section-tag">Sector Expertise</p>
        <h2 className="section-title">Staffing Solutions Across Every Industry</h2>
        <p className="section-sub">CHN brings deep domain knowledge and pre-qualified talent pools across 15+ sectors — from manufacturing and BFSI to healthcare and technology.</p>
        <div className="ind-grid">
          {industries.map((industry, index) => (
            <div key={index} className="ind-card">
              <div className="ind-icon">{industry.icon}</div>
              {industry.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
