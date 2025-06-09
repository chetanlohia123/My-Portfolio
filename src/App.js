import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      mirror: false,
    });
  }, []);

  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pl-16">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}