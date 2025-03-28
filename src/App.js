import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CodeWindow from './components/CodeWindow.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Check for saved theme preference or use system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  };

  return (
    <div className="font-sans bg-white text-dark-800 dark:bg-dark-900 dark:text-dark-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-16">
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div data-aos="fade-up">
          <CodeWindow />
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <About />
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <Skills />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Projects />
        </div>
        <div data-aos="fade-up" data-aos-delay="250">
          <Experience />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <Testimonials />
        </div>
        <div data-aos="fade-up" data-aos-delay="350">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;