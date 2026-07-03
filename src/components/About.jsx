import React from 'react';
import { ShieldCheck, Monitor, Briefcase, Zap, CheckCircle2, ChevronRight } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content container">
          <span className="about-badge">ABOUT CHN TECHNOLOGIES</span>
          <h1 className="about-h1">
            Inspired and Passionate <br />
            <span>about Innovation</span>
          </h1>
          <p className="about-hero-p">
            End-to-end management of IT infrastructure, software solutions, digital analytics, and workforce consulting — all under one roof.
          </p>
        </div>
      </section>

      <section className="about-identity">
        <div className="container about-identity-grid">
          <div className="about-identity-text">
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Measurable Outcomes through Operational Excellence</h2>
            <p className="section-sub">
              Based in Chennai, India, and founded in 2021, CHN Technologies focuses on delivering robust business technology solutions across various industries to help organizations improve efficiency, optimize operations, and scale sustainably.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 className="about-feature-icon" />
                <div>
                  <h4>Integrated Approach</h4>
                  <p>Aligning systems, people, and processes seamlessly.</p>
                </div>
              </div>
              <div className="about-feature">
                <CheckCircle2 className="about-feature-icon" />
                <div>
                  <h4>Future-Ready Solutions</h4>
                  <p>Built for stability, security, and scalable growth.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-identity-visual">
            <div className="about-visual-card">
              <h3>2021</h3>
              <p>Founded</p>
            </div>
            <div className="about-visual-card highlight">
              <h3>100%</h3>
              <p>Commitment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-focus">
        <div className="container">
          <div className="about-focus-header">
            <span className="section-tag">Our Expertise</span>
            <h2 className="section-title">Core Service Pillars</h2>
          </div>
          <div className="about-focus-grid">
            <div className="about-focus-card">
              <div className="about-icon-wrapper blue">
                <Monitor size={32} />
              </div>
              <h3>IT Infrastructure</h3>
              <p>Network management, cyber security, and physical infrastructure for stable IT environments.</p>
            </div>
            <div className="about-focus-card purple">
              <div className="about-icon-wrapper purple">
                <Zap size={32} />
              </div>
              <h3>Software & Digital</h3>
              <p>Developing scalable web platforms, applications, and automated business process solutions.</p>
            </div>
            <div className="about-focus-card teal">
              <div className="about-icon-wrapper teal">
                <Briefcase size={32} />
              </div>
              <h3>Consulting & Advisory</h3>
              <p>Workforce management, payroll compliance, and structured operational governance.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-banner about-cta">
        <h2>Ready to Transform Your Business?</h2>
        <p>Partner with CHN Technologies for resilient IT and scalable growth.</p>
        <button className="btn-primary" onClick={() => window.location.href='/contact'}>Get in Touch</button>
      </section>
    </div>
  );
}
