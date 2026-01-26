import { useEffect, useState } from 'react';
import {Hero} from './components/Hero';
import {About} from './components/About';
import {Skills }from './components/Skills';
import {Experience} from './components/Experiences';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import { Navbar } from './components/Navbar';


export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;

    // 2️⃣ Fallback to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  // 3️⃣ Apply theme to <body> and persist
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
    <Navbar theme={theme} toggleTheme={toggleTheme} />  
      <Hero theme={theme} toggleTheme={toggleTheme} />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
