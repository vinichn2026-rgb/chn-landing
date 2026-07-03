import { useParams, useNavigate } from 'react-router-dom'

const serviceDetails = {
  "temporary-staffing": {
    title: "Temporary Staffing",
    description: "Flexible contract staffing solutions with PAN-India sourcing, fast deployment, payroll management, statutory compliance, and tech-enabled HR workflow — designed for seasonal demand and project-based hiring.",
    icon: "👥",
    fullDescription: "Our temporary staffing solutions provide businesses with flexible workforce management capabilities. Whether you need workers for a few weeks or several months, CHN delivers pre-screened, skilled professionals tailored to your industry and role requirements.",
    benefits: [
      "Quick deployment within 24-48 hours",
      "Pre-screened candidate database",
      "Full payroll and compliance management",
      "Flexible contract terms",
      "Pan-India sourcing capability",
      "24/7 support and replacement guarantee"
    ],
    industries: ["Manufacturing", "BFSI", "Logistics", "Retail", "Hospitality"]
  },
  "permanent-recruitment": {
    title: "Permanent Recruitment",
    description: "Strategic talent acquisition through Search & Selection, Recruitment Process Outsourcing (RPO), and Vendor-on-Premise models — connecting you with candidates who drive measurable business impact.",
    icon: "💼",
    fullDescription: "We specialize in identifying and placing top talent for permanent positions across all industries and experience levels. Our comprehensive recruitment process ensures cultural fit and long-term success.",
    benefits: [
      "Executive search services",
      "RPO (Recruitment Process Outsourcing)",
      "Vendor-on-Premise solutions",
      "Candidate assessment and screening",
      "Placement guarantee",
      "Post-placement support"
    ],
    industries: ["IT & Technology", "BFSI", "Healthcare", "Manufacturing", "E-commerce"]
  },
  "managed-workforce": {
    title: "Managed Workforce Services",
    description: "SLA-driven, end-to-end workforce management that goes beyond deployment — covering training, execution, governance, and performance oversight for complete project confidence.",
    icon: "📊",
    fullDescription: "Our managed workforce services provide complete oversight and management of your contingent workforce, ensuring performance, compliance, and cost optimization.",
    benefits: [
      "End-to-end workforce management",
      "SLA-driven service delivery",
      "Performance tracking and reporting",
      "Training and development programs",
      "Compliance governance",
      "Cost optimization strategies"
    ],
    industries: ["Manufacturing", "BFSI", "Logistics", "IT", "Healthcare"]
  },
  "payroll-management": {
    title: "Payroll Management",
    description: "Accurate, automated payroll processing with 100% statutory compliance — covering PF, ESI, TDS, and labour law adherence. Reduce administrative burden and eliminate payroll errors for your entire workforce.",
    icon: "💰",
    fullDescription: "Streamline your payroll operations with our comprehensive, compliant payroll management solution. We handle all statutory requirements and ensure timely, accurate payments.",
    benefits: [
      "Automated payroll processing",
      "100% statutory compliance",
      "PF and ESI management",
      "TDS calculation and filing",
      "Multi-state compliance",
      "Digital payslips and reports"
    ],
    industries: ["All Industries"]
  },
  "facility-management": {
    title: "Facility Management",
    description: "Cost-effective facility management services including housekeeping, security, maintenance, energy management, pest control, and office space management — keeping your workplace safe and productive.",
    icon: "🏢",
    fullDescription: "Our integrated facility management services ensure your workplace remains safe, clean, secure, and productive. We provide comprehensive solutions tailored to your facility's needs.",
    benefits: [
      "Housekeeping and sanitation",
      "Security services",
      "Maintenance and repairs",
      "Energy management",
      "Pest control",
      "24/7 emergency response"
    ],
    industries: ["Corporate", "Manufacturing", "Healthcare", "Retail", "Hospitality"]
  },
  "naps-apprenticeship": {
    title: "Apprenticeship Programs (NAPS)",
    description: "Implement the National Apprenticeship Promotion Scheme (NAPS) to build a pipeline of entry-level talent — cost-efficient hiring with structured learning, government subsidies, and minimal compliance risk.",
    icon: "🎓",
    fullDescription: "Develop future talent while receiving government subsidies. Our NAPS programs combine structured training with practical experience, creating a pipeline of skilled workers.",
    benefits: [
      "Government subsidies (75% cost coverage)",
      "Structured training programs",
      "Skill development framework",
      "Certificate upon completion",
      "Opportunity for permanent hire",
      "Compliance and documentation support"
    ],
    industries: ["Manufacturing", "IT", "Retail", "Logistics", "Construction"]
  }
}

export default function ServiceDetails() {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', minHeight: '100vh' }}>
        <h1>Service not found</h1>
        <button onClick={() => navigate('/')} className="btn-primary" style={{ marginTop: '20px' }}>
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg,var(--blue-dark) 0%,var(--blue-mid) 60%,var(--blue-light) 100%)', color: '#fff', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <button onClick={() => navigate('/')} style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', marginBottom: '30px', fontSize: '14px', fontWeight: '700' }}>
            ← Back to Services
          </button>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>{service.icon}</div>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px', lineHeight: '1.2' }}>{service.title}</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', opacity: '0.9', lineHeight: '1.7' }}>{service.description}</p>
        </div>
      </section>

      {/* Full Description */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '20px', color: 'var(--gray-900)' }}>About This Service</h2>
            <p style={{ fontSize: '18px', color: 'var(--gray-500)', lineHeight: '1.8', marginBottom: '40px' }}>{service.fullDescription}</p>

            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px', color: 'var(--gray-900)' }}>Key Benefits</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {service.benefits.map((benefit, index) => (
                <li key={index} style={{ fontSize: '16px', color: 'var(--gray-700)', marginBottom: '12px', paddingLeft: '30px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: 'var(--blue-mid)', fontWeight: '700' }}>✓</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '20px', color: 'var(--gray-900)' }}>Industries We Serve</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {service.industries.map((industry, index) => (
                <span key={index} style={{ background: 'var(--blue-pale)', color: 'var(--blue-dark)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '700' }}>
                  {industry}
                </span>
              ))}
            </div>

            <div style={{ background: 'var(--blue-pale)', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', color: 'var(--gray-700)', marginBottom: '20px' }}>Ready to explore this service for your business?</p>
              <a href="/#contact" className="btn-primary" style={{ display: 'inline-block' }}>Request More Information</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
