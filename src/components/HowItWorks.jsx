export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Share Your Requirement",
      description: "Tell us your hiring need — role, volume, timeline, location, and skills. We'll assign a dedicated account manager immediately."
    },
    {
      num: "02",
      title: "We Source & Screen",
      description: "Our pan-India talent network and AI-assisted screening filter qualified candidates who match your exact job criteria."
    },
    {
      num: "03",
      title: "Interview & Select",
      description: "You interview our shortlisted candidates — we coordinate schedules, feedback, and offer management to accelerate decisions."
    },
    {
      num: "04",
      title: "Onboard & Manage",
      description: "CHN handles all onboarding, payroll, compliance, and ongoing workforce management — so you can focus on business outcomes."
    }
  ];

  return (
    <section className="how" style={{ background: "var(--gray-50)" }}>
      <div className="container">
        <p className="section-tag" style={{ textAlign: "center" }}>Our Process</p>
        <h2 className="section-title" style={{ textAlign: "center" }}>From Requirement to Deployment<br />in 4 Simple Steps</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
