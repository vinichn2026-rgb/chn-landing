import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@chnindia.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New inquiry from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      alert('Thank you for your inquiry. We will contact you soon!')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Sorry, your message could not be sent right now. Please try again later or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" style={{ 
        background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 100%)', 
        color: '#fff', 
        padding: '100px 24px', 
        textAlign: 'center' 
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>Contact CHN</h1>
          <p style={{ fontSize: '18px', opacity: '0.9', lineHeight: '1.7' }}>
            Get in touch for staffing, recruitment solutions, and consulting services to build high-performing teams and scale your business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-50)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="contact-grid">
            
            {/* Left: Contact Form */}
            <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px', color: 'var(--blue-dark)' }}>Get In Touch</h2>
              <p style={{ color: 'var(--gray-500)', marginBottom: '30px', fontSize: '15px' }}>Fill out the form below and our team will get back to you promptly.</p>
              
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '8px' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                      placeholder="e.g., Arun Kumar"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '8px' }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                      placeholder="e.g., arun.kumar@company.com"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '8px' }}>Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '8px' }}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '6px', fontSize: '14px', outline: 'none' }}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '8px' }}>Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '6px', fontSize: '14px', outline: 'none', background: '#fff' }}
                  >
                    <option value="">Select a service</option>
                    <option value="temporary-staffing">Temporary Staffing</option>
                    <option value="permanent-recruitment">Permanent Recruitment</option>
                    <option value="managed-workforce">Managed Workforce Services</option>
                    <option value="payroll-management">Payroll Management</option>
                    <option value="facility-management">Facility Management</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--gray-700)', marginBottom: '8px' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-300)', borderRadius: '6px', fontSize: '14px', resize: 'vertical', outline: 'none' }}
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '16px', fontSize: '16px', textAlign: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>

            {/* Right: Office Locations */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px', color: 'var(--gray-900)' }}>Office Locations</h2>
              
              {/* Chennai Office */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', marginBottom: '24px', borderLeft: '4px solid var(--blue-mid)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: 'var(--blue-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🏢 Chennai (Head Office)
                </h3>
                
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <p style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: '1.6', margin: 0 }}>
                    New No. 70, Old No. 28, 4th Main Road, <br/>
                    CIT Nagar, Nandanam Extension, <br/>
                    Chennai, Tamil Nadu 600035
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>📞</span>
                  <p style={{ fontSize: '15px', color: 'var(--gray-700)', margin: 0 }}>
                    +91 93612 30063 / +91 63641 00829
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>✉️</span>
                  <a href="mailto:info@chnindia.com" style={{ fontSize: '15px', color: 'var(--blue-mid)', margin: 0, textDecoration: 'none' }}>
                    info@chnindia.com
                  </a>
                </div>
              </div>

              {/* Coimbatore Office */}
              <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', borderLeft: '4px solid var(--blue-mid)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: 'var(--blue-dark)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🏢 Coimbatore Office
                </h3>
                
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px' }}>📍</span>
                  <p style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: '1.6', margin: 0 }}>
                    Door No. 1650, 2nd Floor, AAA Towers, <br/>
                    Avinashi Road, Near Hope College, <br/>
                    Coimbatore, Tamil Nadu 641004
                  </p>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>📞</span>
                  <p style={{ fontSize: '15px', color: 'var(--gray-700)', margin: 0 }}>
                    +91 93848 17327
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px' }}>✉️</span>
                  <a href="mailto:info@chnindia.com" style={{ fontSize: '15px', color: 'var(--blue-mid)', margin: 0, textDecoration: 'none' }}>
                    info@chnindia.com
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
