import { useEffect, useState } from 'react';

export function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  // Scroll-spy logic (CORRECT, SINGLE EFFECT)
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'skills', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,

        // Section becomes active when its top enters middle reading band
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#top" className="nav-name">
          Aindrila Ray
        </a>
      </div>

      {/* Desktop nav */}
      <div className="nav-center desktop-only">
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

      {/* Right side */}
      <div className="nav-right">
        {/* Theme toggle (desktop) */}
        <button
          onClick={toggleTheme}
          className={`theme-switch desktop-only ${theme === 'dark' ? 'dark' : ''}`}
          aria-label="Toggle theme"
        >
          <span className="switch-thumb">
            {theme === 'light' ? '🌙' : '☀️'}
          </span>
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger mobile-only"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" className="mobile-link" onClick={handleNavClick}>
            About
          </a>
          <a href="#experience" className="mobile-link" onClick={handleNavClick}>
            Experience
          </a>
          <a href="#skills" className="mobile-link" onClick={handleNavClick}>
            Skills
          </a>
          <a href="#contact" className="mobile-link" onClick={handleNavClick}>
            Contact
          </a>

          <div className="mobile-divider" />

          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="mobile-theme-toggle"
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      )}
    </nav>
  );
}
