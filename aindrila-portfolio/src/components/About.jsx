import React from 'react';

export function About() {
  return (
    <section id='about' className="section">
      <h3>About</h3>
      <div className="about-card" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)', padding: '20px', borderRadius: '12px' }}>
        <p className="about-lead" style={{ color: 'var(--muted-text)' }}>
          Full Stack Software Engineer at JP Morgan Chase & Co. building secure, scalable IAM platforms
          using Java, Spring Boot, and React.
        </p>

        <div className="about-grid">
          <p className="about-text" style={{ color: 'var(--text-color)' }}>
            I work on enterprise systems used by thousands of internal business users,
            delivering end-to-end features across backend services and frontend UI.
            My focus areas include audit readiness, platform reliability, accessibility,
            and performance engineering.
          </p>

          <ul className="about-points" style={{ color: 'var(--text-color)' }}>
            <li>Built secure IAM features using Java, Spring Boot, and React</li>
            <li>Modernized UIs to meet WCAG accessibility standards</li>
            <li>Implemented runtime encryption using KMS</li>
            <li>Improved API performance via load and stress testing</li>
          </ul>
        </div>

        <p className="about-text" style={{ color: 'var(--text-color)' }}>
          I enjoy building systems that are boring in the best way — reliable, secure,
          and easy to maintain. I care deeply about clean architecture, developer
          experience, and shipping features that actually survive production.
        </p>

        <p className="about-text" style={{ color: 'var(--text-color)' }}>
          I also actively use modern AI tools and LLMs to accelerate development,
          automate repetitive workflows, and improve developer productivity —
          without compromising core system reliability.
        </p>
      </div>
    </section>
  );
}
