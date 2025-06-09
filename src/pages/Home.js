import React, { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

export default function Home() {
  // Roles typing effect - continuous loop
  const [roleText] = useTypewriter({
    words: ['Designer', 'Programmer', 'Problem Solver', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 1100,
  });

  // Name typing effect - continuous loop
  const [nameText] = useTypewriter({
    words: ['Chetan Lohia', 'चेतन  लोहिया'],
    loop: true,           // loop enabled
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 1100,
  });

  // Cursor position state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    AOS.init();

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-8 py-24 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)',
      }}
    >
      {/* Bigger glowing cursor */}
      <div
        style={{
          position: 'fixed',
          top: cursorPos.y,
          left: cursorPos.x,
          width: 30,
          height: 30,
          backgroundColor: 'rgba(59, 130, 246, 0.6)',
          borderRadius: '50%',
          filter: 'blur(12px)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'top 0.05s ease-out, left 0.05s ease-out',
          zIndex: 9999,
        }}
      />

      <div className="z-20 text-center" data-aos="fade-up" style={{ maxWidth: '700px' }}>
        {/* Name typing */}
        <p
          className="mb-4 font-medium tracking-widest text-gray-300"
          style={{ fontSize: '2rem' }}
        >
          <span className="font-semibold text-white">{nameText}</span>
          <Cursor cursorStyle="|" />
        </p>

        <h1
          className="font-bold mb-6"
          style={{ fontSize: '7rem', lineHeight: '1.1' }}
        >
          <span style={{ color: '#3b82f6' }}>Developer</span>
        </h1>

        <h2
          className="font-semibold mb-12"
          style={{ fontSize: '3rem' }}
        >
          + <span style={{ color: '#60a5fa' }}>{roleText}</span>
          <Cursor cursorStyle="|" />
        </h2>
      </div>

      {/* Know Me fixed bottom center */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#60a5fa',
          fontWeight: '600',
          fontSize: '1.2rem',
          cursor: 'pointer',
          transition: 'color 0.3s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#60a5fa')}
      >
        Know Me ↓
      </a>
    </section>
  );
}


