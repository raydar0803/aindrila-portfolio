import { useEffect, useState } from 'react';
import {Hero} from './components/Hero';
import {About} from './components/About';
import {Skills} from './components/Skills';
import {Experience} from './components/Experiences';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app"
    style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'var(--background-color)', color: 'var(--text-color)', transition: 'background-color 0.3s, color 0.3s',
    gap: '1rem'}}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
