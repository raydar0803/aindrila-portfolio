import { useEffect, useState } from 'react';

export function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = ['about', 'experience', 'skills', 'contact'];

    const handleScroll = () => {
      let current = 'top';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const topOffset = rect.top + window.scrollY;
          const bottomOffset = topOffset + el.offsetHeight;
          const scrollPosition = window.scrollY + 150; // Adjusted offset for better accuracy

          if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a id='name-link' href="#top" className="nav-name">
          Aindrila Ray
        </a>
      </div>

      <div className="nav-center">
        <a
          href="#about"
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          About
        </a>
        <a
          href="#experience"
          className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
        >
          Experience
        </a>
        <a
          href="#skills"
          className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
        >
          Skills
        </a>

        <a
          href="#contact"
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </a>
        
      </div>

      <div className="nav-right">
        <button
          onClick={toggleTheme}
          className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`}
          aria-label="Toggle theme"
        >
          <span className="switch-thumb">
            {theme === 'light' ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
    </nav>
  );
}
