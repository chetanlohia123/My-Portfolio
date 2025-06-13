import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../logo3.png';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = (section) => `
    text-xs uppercase tracking-widest py-2 cursor-pointer 
    ${activeSection === section ? 'text-blue-400 font-bold' : 'text-gray-500'} 
    hover:text-blue-500 hover:scale-105 
    transition-all duration-300
  `;

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-16 text-white flex-col justify-between py-6 px-2 fixed h-full z-50 shadow-md" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="flex flex-col items-center">
          <a
            href="#home"
            className="mb-10"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img src={logo} alt="Logo" className="w-10 h-10 mx-auto cursor-pointer" />
          </a>

          <nav className="flex flex-col items-center space-y-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={linkStyle(section)}
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center space-y-4 mt-6">
          <a href="https://www.instagram.com/_chetanlohia_/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/chetan.lohia.73" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
            <FaFacebookF size={20} />
          </a>
          <a href="https://github.com/chetanlohia123" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/chetan-lohia-160949337/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden w-full fixed top-0 left-0 bg-black z-50 shadow-md px-4 py-3 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-8 h-8" onClick={() => scrollToSection('home')} />
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-40">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className="uppercase text-sm hover:text-blue-500"
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </>
  );
}