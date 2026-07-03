import { Link } from 'react-router-dom'
import { FcConferenceCall, FcBriefcase, FcMindMap, FcMoneyTransfer, FcDepartment, FcGraduationCap } from 'react-icons/fc'

const services = [
  {
    id: "temporary-staffing",
    title: "Temporary Staffing",
    description: "Flexible contract staffing solutions with PAN-India sourcing, fast deployment, payroll management, statutory compliance, and tech-enabled HR workflow — designed for seasonal demand and project-based hiring.",
    icon: <FcConferenceCall />
  },
  {
    id: "permanent-recruitment",
    title: "Permanent Recruitment",
    description: "Strategic talent acquisition through Search & Selection, Recruitment Process Outsourcing (RPO), and Vendor-on-Premise models — connecting you with candidates who drive measurable business impact.",
    icon: <FcBriefcase />
  },
  {
    id: "managed-services",
    title: "Managed Workforce Services",
    description: "SLA-driven, end-to-end workforce management that goes beyond deployment — covering training, execution, governance, and performance oversight for complete project confidence.",
    icon: <FcMindMap />
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    description: "Accurate, automated payroll processing with 100% statutory compliance — covering PF, ESI, TDS, and labour law adherence. Reduce administrative burden and eliminate payroll errors for your entire workforce.",
    icon: <FcMoneyTransfer />
  },
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Cost-effective facility management services including housekeeping, security, maintenance, energy management, pest control, and office space management — keeping your workplace safe and productive.",
    icon: <FcDepartment />
  },
  {
    id: "naps-apprenticeship",
    title: "Apprenticeship Programs (NAPS)",
    description: "Implement the National Apprenticeship Promotion Scheme (NAPS) to build a pipeline of entry-level talent — cost-efficient hiring with structured learning, government subsidies, and minimal compliance risk.",
    icon: <FcGraduationCap />
  }
];

function ServiceIcon({ icon }) {
  return (
    <div style={{ 
      fontSize: '42px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
      boxShadow: '8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff, inset 2px 2px 5px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.03)',
      width: '76px',
      height: '76px',
      borderRadius: '20px',
      marginBottom: '24px',
      transition: 'transform 0.3s ease'
    }} className="realistic-icon">
      {icon}
    </div>
  )
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="section-tag">What We Offer</p>
        <h2 className="section-title">Comprehensive Workforce Solutions<br />Tailored for Every Business</h2>
        <p className="section-sub">From flexible temp staffing to strategic permanent recruitment, CHN covers every aspect of your workforce needs with technology-driven precision and full statutory compliance.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div style={{ marginBottom: '10px' }}>
                <ServiceIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/${service.id}`} className="service-link">
                Learn more <span className="arrow">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
