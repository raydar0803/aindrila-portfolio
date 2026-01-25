export function Experience() {
  return (
    <section id='experience' className="section">
      <h3>Experience</h3>

      {/* Full-time Role */}
      <div className="card" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)', marginBottom: '32px' }}>
        <h4 style={{ color: 'var(--text-color)' }}>JP Morgan Chase & Co. — Software Development Engineer</h4>
        <p style={{ color: 'var(--muted-text)', marginBottom: '10px' }}>
          July 2024 – Present
        </p>

        <ul style={{ color: 'var(--text-color)' }}>
          <li>
            Built and maintained secure, end-to-end full-stack features using Java,
            Spring Boot, and React for a large-scale IAM certification platform.
          </li>
          <li>
            Delivered solutions supporting 23,500+ certification groups and 12,000+
            certifiers, improving audit readiness and operational hygiene across the
            organization.
          </li>
          <li>
            Implemented runtime encryption using HERA KMS, eliminating plaintext data
            exposure and strengthening security compliance for sensitive workflows.
          </li>
          <li>
            Modernized React-based UIs and improved accessibility to WCAG standards,
            boosting customer satisfaction (CSAT) from 75% to 93%.
          </li>
          <li>
            Resolved 4,000+ access violations per certification cycle and delivered
            critical UI and backend fixes to ensure platform stability during peak
            usage periods.
          </li>
          <li>
            Conducted load and stress testing using JMeter and BlazeMeter, improving
            API response times by ~30% and increasing system reliability under
            production traffic.
          </li>
        </ul>

        {/* Featured Work */}
        <div style={{ marginTop: '32px' }}>
          <h5>Featured Work</h5>

          <div className="featured-item">
            <p>
              <strong>IAM Certification Platform</strong>
            </p>
            <p className="about-text">
              Built and scaled a full-stack IAM certification platform used by 3,000+
              internal business users. Implemented runtime encryption using KMS,
              delivered WCAG accessibility improvements, and improved platform
              reliability and audit readiness during critical certification cycles.
            </p>
            <div className="tech-chips">
              {['Java', 'Spring Boot', 'React', 'KMS', 'REST APIs'].map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="featured-item">
            <p>
              <strong>Secure Data & Accessibility Modernization</strong>
            </p>
            <p className="about-text">
              Modernized a React-based UI to improve accessibility compliance and user
              experience. Conducted performance and load testing, improving API
              response times by ~30% and boosting CSAT from 75% to 93%.
            </p>
            <div className="tech-chips">
              {['React', 'Spring Boot', 'WCAG', 'JMeter', 'BlazeMeter'].map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="featured-item">
            <p>
              <strong>AI-Assisted Internal Tooling</strong>
            </p>
            <p className="about-text">
              Used LLMs and modern AI tools to accelerate internal tool development,
              automate repetitive workflows, and improve developer productivity
              without compromising core system reliability.
            </p>
            <div className="tech-chips">
              {['Java', 'React', 'LLMs', 'OpenHands'].map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Internship 1 */}
      <div className="card" style={{ marginBottom: '32px' }}>
        <h4>JP Morgan Chase & Co. — Software Development Engineer Intern</h4>
        <p style={{ color: 'var(--muted-text)', marginBottom: '10px' }}>
          January 2024 – June 2024
        </p>

        <ul>
          <li>
            Delivered enterprise features using Java, Spring Boot, React, and Node.js
            within Agile teams.
          </li>
          <li>
            Built and integrated backend APIs and frontend components for internal
            platforms.
          </li>
          <li>
            Collaborated with senior engineers to ship production-ready features and
            improve system reliability.
          </li>
        </ul>

        <div className="tech-chips" style={{ marginTop: '12px' }}>
          {['Java', 'Spring Boot', 'React', 'Node.js', 'Agile'].map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Internship 2 */}
      <div className="card">
        <h4>JP Morgan Chase & Co. — Software Development Engineer Intern</h4>
        <p style={{ color: 'var(--muted-text)', marginBottom: '10px' }}>
          June 2023 – July 2023
        </p>

        <ul>
          <li>
            Built reusable UI components using React and TypeScript for internal
            applications.
          </li>
          <li>
            Developed NLP-driven backend services using Python and Flask for automated
            data processing.
          </li>
          <li>
            Integrated REST APIs and supported end-to-end feature delivery.
          </li>
        </ul>

        <div className="tech-chips" style={{ marginTop: '12px' }}>
          {['React', 'TypeScript', 'Python', 'Flask', 'NLP', 'REST APIs'].map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
