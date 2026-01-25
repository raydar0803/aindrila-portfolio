export function Hero({ theme, toggleTheme }) {
    return (
      <section id='top' className="hero" style={{ position: 'relative', padding: '50px', textAlign: 'center', 
        justifyContent: 'center', verticalAlign: 'middle', width: '100vw', height: '100vh'
       }}>
        {/* Theme toggle */}
        <h1>Aindrila Ray</h1>
        <h2>
          Full Stack Software Engineer | Java, React, Springboot | Gen AI Enthusiast | Secure Enterprise Systems | JP Morgan Chase & Co.
        </h2>
        <p className="hero-micro"><strong>
Bengaluru, Karnataka, India </strong>
</p>
        <p>
        I work on large-scale IAM platforms used by thousands of business users, delivering
end-to-end features across backend APIs, frontend UI, security, and performance.
I also use modern AI tools to accelerate development and automation.
        </p>
        <div className="button-row">
          <a href="/public/Aindrila%20Ray%20Resume%20.pdf" className="hero-link primary" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

      </section>
    );
  }
