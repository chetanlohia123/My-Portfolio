import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../logo3.png';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

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
    handleScroll(); // Run initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = (section) => `
    text-xs uppercase tracking-widest py-2 cursor-pointer 
    ${activeSection === section ? 'text-blue-400 font-bold' : 'text-gray-500'} 
    hover:text-blue-500 hover:scale-105 
    transition-all duration-300
  `;

  return (
<div className="w-16 text-white flex flex-col justify-between py-6 px-2 fixed h-full z-50 shadow-md" style={{ backgroundColor: '#0d0d0d' }}>
  {/* rest unchanged */}
        <div className="flex flex-col items-center">
        {/* Logo */}
        <a
          href="#home"
          className="mb-10"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 mx-auto cursor-pointer" />
        </a>

        {/* Rotated vertical nav links */}
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
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-4 mt-6">
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
          <FaInstagram size={18} />
        </a>
        <a href="https://www.facebook.com/chetan.lohia.73" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
          <FaFacebookF size={18} />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
          <FaGithub size={18} />
        </a>
        <a href="#" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
          <FaLinkedinIn size={18} />
        </a>
      </div>
    </div>
  );
}