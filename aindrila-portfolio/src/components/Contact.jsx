export function Contact() {
    return (
      <section id="contact" className="section">
        <h3>Get in Touch</h3>
  
        <div className="contact-card">
          <p className="contact-lead">
            I’m always open to discussing software engineering roles,
            full-stack opportunities, or interesting technical problems.
          </p>
  
          <div className="contact-actions" style={{ justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
  <a
    href="mailto:aindrilaray0803@gmail.com"
    className="contact-link primary"
  >
    Email me →
  </a>

  <a
    href="https://www.linkedin.com/in/aindrila-ray-18841a1a8/"
    target="_blank"
    rel="noreferrer"
    className="contact-link"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/raydar0803"
    target="_blank"
    rel="noreferrer"
    className="contact-link"
  >
    GitHub
  </a>
</div>

        </div>
      </section>
    );
  }
  