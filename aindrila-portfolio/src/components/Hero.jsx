export function Hero({ theme, toggleTheme }) {
  return (
    <section id='top' className="hero" style={{ position: 'relative', padding: '50px', textAlign: 'center', 
      justifyContent: 'center', verticalAlign: 'middle', width: '100vw', height: '100vh'
     }}>
      {/* Theme toggle */}
      <h1>Aindrila Ray</h1>
      <h2>
        Full Stack Software Engineer | Java, React, Springboot | Gen AI Enthusiast | Secure Enterprise Systems | JP Morgan Chase
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
      <button
  onClick={handleDownload}
  className="hero-link primary"
>
  <span className="hero-link-text">Download Resume</span>
  <svg
    className="download-icon"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 3v12m0 0l4-4m-4 4l-4-4M4 17h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

      </div>
    </section>
  );
}

const handleDownload = async () => {
  try {
    const response = await fetch('./public/Aindrila_Ray_Resume.pdf'); // Adjusted path to point to the public folder
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aindrila_Ray_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Download failed:', err.message);
    alert('Failed to download the resume. Please try again later.');
  }
};