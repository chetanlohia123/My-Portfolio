import React, { useEffect, useState, useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  // Fixed roles typing effect
  const [roleText] = useTypewriter({
    words: ['Designer', 'Programmer', 'Problem Solver', 'Tech Enthusiast'],
    loop: 0, // Infinite loop
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  // Fixed name typing effect
  const [nameText] = useTypewriter({
    words: ['Chetan Lohia', 'चेतन  लोहिया'],
    loop: 0, // Infinite loop
    typeSpeed: 90,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef();

  // Particle system for void effect
  useEffect(() => {
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let x, y;
      
      // Spawn particles from edges
      switch (side) {
        case 0: // Top
          x = Math.random() * window.innerWidth;
          y = -10;
          break;
        case 1: // Right
          x = window.innerWidth + 10;
          y = Math.random() * window.innerHeight;
          break;
        case 2: // Bottom
          x = Math.random() * window.innerWidth;
          y = window.innerHeight + 10;
          break;
        case 3: // Left
          x = -10;
          y = Math.random() * window.innerHeight;
          break;
      }

      return {
        id: Math.random(),
        x,
        y,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: 1,
        hue: Math.random() * 60 + 200, // Blue to purple range
      };
    };

    // Initialize particles
    const initialParticles = Array.from({ length: 150 }, createParticle);
    setParticles(initialParticles);

    const animate = () => {
      setTime(prev => prev + 0.02);
      
      setParticles(prevParticles => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        return prevParticles.map(particle => {
          // Calculate attraction to center (black hole effect)
          const dx = centerX - particle.x;
          const dy = centerY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Stronger attraction as particles get closer
          const attraction = Math.min(distance / 100, 10);
          const forceX = (dx / distance) * attraction * particle.speed;
          const forceY = (dy / distance) * attraction * particle.speed;
          
          // Add some spiral motion
          const angle = Math.atan2(dy, dx);
          const spiralForce = 0.5;
          const spiralX = Math.cos(angle + Math.PI / 2) * spiralForce;
          const spiralY = Math.sin(angle + Math.PI / 2) * spiralForce;
          
          const newX = particle.x + forceX + spiralX;
          const newY = particle.y + forceY + spiralY;
          
          // Fade out as particle approaches center
          const newLife = distance < 50 ? particle.life - 0.02 : particle.life;
          
          // Respawn particle if it's consumed or too old
          if (newLife <= 0 || distance < 20) {
            return createParticle();
          }
          
          return {
            ...particle,
            x: newX,
            y: newY,
            life: newLife,
            opacity: particle.opacity * newLife,
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init();

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-8 py-24 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)',
      }}
    >
      {/* Void particle system */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`,
              boxShadow: `0 0 ${particle.size * 3}px hsla(${particle.hue}, 70%, 60%, ${particle.opacity * 0.8})`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Central void effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            rgba(0,0,0,0.1) 20%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(0,0,0,0.6) 60%, 
            rgba(0,0,0,0.9) 80%, 
            #000000 100%
          )`,
          transform: `scale(${1 + Math.sin(time * 2) * 0.05})`,
        }}
      />

      {/* Enhanced glowing cursor */}
      <div
        style={{
          position: 'fixed',
          top: cursorPos.y,
          left: cursorPos.x,
          width: isHoveringText ? 60 : 30,
          height: isHoveringText ? 60 : 30,
          background: isHoveringText 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.2) 70%, transparent 100%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.3s ease-out',
          zIndex: 9999,
          filter: isHoveringText ? 'blur(8px)' : 'blur(12px)',
        }}
      />

      {/* Main content with breathing effect */}
      <div 
        className="z-20 text-center relative" 
        data-aos="fade-up" 
        style={{ 
          maxWidth: '800px',
          transform: `
            translateY(${scrollY * -0.3}px) 
            scale(${1 + Math.sin(time * 1.5) * 0.02})
          `,
        }}
        onMouseEnter={() => setIsHoveringText(true)}
        onMouseLeave={() => setIsHoveringText(false)}
      >
        {/* Name with enhanced styling */}
        <div className="relative mb-6">
          <p
            className="mb-4 font-medium tracking-widest text-gray-300 relative z-10"
            style={{ 
              fontSize: '2rem',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              transform: `scale(${1 + Math.sin(time * 2) * 0.03})`
            }}
          >
            <span className="font-semibold text-white relative">
              {nameText}
              <span 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                style={{
                  width: '100%',
                  opacity: Math.sin(time * 3) * 0.5 + 0.5,
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
                }}
              />
            </span>
            <Cursor cursorStyle="|" />
          </p>
        </div>

        {/* Main title with enhanced 3D and breathing effect */}
        <h1
          className="font-bold mb-8 relative"
          style={{ 
            fontSize: '7rem', 
            lineHeight: '1.1',
            transform: `
              perspective(1000px) 
              rotateX(${Math.sin(time * 0.7) * 8}deg) 
              rotateY(${Math.cos(time * 0.5) * 5}deg)
              translateZ(${Math.sin(time * 1.2) * 15}px)
              scale(${1 + Math.sin(time * 1.8) * 0.05})
            `,
            textShadow: `
              0 0 40px rgba(59, 130, 246, 0.9),
              15px 15px 30px rgba(0, 0, 0, 0.8),
              -8px -8px 20px rgba(59, 130, 246, 0.4)
            `,
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))'
          }}
        >
          <span 
            style={{ 
              color: '#3b82f6',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
            }}
          >
            Developer
          </span>
        </h1>

        {/* Role text with enhanced effects */}
        <h2
          className="font-semibold mb-12 relative"
          style={{ 
            fontSize: '3rem',
            transform: `translateY(${Math.sin(time * 2.2) * 8}px) scale(${1 + Math.sin(time * 1.6) * 0.03})`,
            textShadow: '0 0 25px rgba(96, 165, 250, 0.7)'
          }}
        >
          <span className="relative">
            + <span 
                style={{ 
                  color: '#60a5fa',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                {roleText}
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
                  style={{
                    transform: `translateX(${Math.sin(time * 4) * 100}%)`,
                    filter: 'blur(3px)'
                  }}
                />
              </span>
          </span>
          <Cursor cursorStyle="|" />
        </h2>

        {/* Floating accent elements around text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.cos(i * Math.PI / 3) * 250}px`,
                top: `${Math.sin(i * Math.PI / 3) * 180}px`,
                transform: `scale(${Math.sin(time * 2 + i) * 0.3 + 1})`,
                boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced "Know Me" button */}
      <a
        href="#about"
        className="group absolute bottom-8 left-1/2 transform -translate-x-1/2 inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 z-10"
        style={{
          fontSize: '1.1rem',
          fontWeight: '600',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0px)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
        }}
      >
        <span>Know Me</span>
        <span className="ml-2">→</span>
      </a>
    </section>
  );
}