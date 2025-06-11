import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  // Fast typewriter states
  const [nameText, setNameText] = useState('');
  const [roleText, setRoleText] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentNameWord, setCurrentNameWord] = useState(0);
  const [currentRoleWord, setCurrentRoleWord] = useState(0);
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showRoleCursor, setShowRoleCursor] = useState(true);

  const nameWords = ['Chetan Lohia', 'चेतन लोहिया'];
  const roleWords = ['Designer', 'Programmer', 'Problem Solver', 'Tech Enthusiast'];

  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef();

  // Independent fast typewriter effects
  useEffect(() => {
    const typeSpeed = 25; // Much faster
    const deleteSpeed = 15; // Much faster
    const pauseTime = 800; // Shorter pause

    let nameTimeout, roleTimeout;

    // Name typing logic
    const typeName = () => {
      const currentWord = nameWords[currentNameWord];
      if (nameIndex < currentWord.length) {
        setNameText(currentWord.substring(0, nameIndex + 1));
        setNameIndex(prev => prev + 1);
        nameTimeout = setTimeout(typeName, typeSpeed);
      } else {
        // Pause then delete
        nameTimeout = setTimeout(deleteName, pauseTime);
      }
    };

    const deleteName = () => {
      if (nameText.length > 0) {
        setNameText(nameText.substring(0, nameText.length - 1));
        nameTimeout = setTimeout(deleteName, deleteSpeed);
      } else {
        setNameIndex(0);
        setCurrentNameWord((prev) => (prev + 1) % nameWords.length);
        nameTimeout = setTimeout(typeName, typeSpeed);
      }
    };

    // Role typing logic
    const typeRole = () => {
      const currentWord = roleWords[currentRoleWord];
      if (roleIndex < currentWord.length) {
        setRoleText(currentWord.substring(0, roleIndex + 1));
        setRoleIndex(prev => prev + 1);
        roleTimeout = setTimeout(typeRole, typeSpeed);
      } else {
        roleTimeout = setTimeout(deleteRole, pauseTime);
      }
    };

    const deleteRole = () => {
      if (roleText.length > 0) {
        setRoleText(roleText.substring(0, roleText.length - 1));
        roleTimeout = setTimeout(deleteRole, deleteSpeed);
      } else {
        setRoleIndex(0);
        setCurrentRoleWord((prev) => (prev + 1) % roleWords.length);
        roleTimeout = setTimeout(typeRole, typeSpeed);
      }
    };

    // Start both independently with slight delay
    nameTimeout = setTimeout(typeName, 500);
    roleTimeout = setTimeout(typeRole, 1200);

    return () => {
      clearTimeout(nameTimeout);
      clearTimeout(roleTimeout);
    };
  }, [nameIndex, roleIndex, currentNameWord, currentRoleWord, nameText, roleText]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowNameCursor(prev => !prev);
      setShowRoleCursor(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  // Denser particle system
  useEffect(() => {
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y;
      
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
        default:
          x = Math.random() * window.innerWidth;
          y = -10;
      }

      return {
        id: Math.random(),
        x,
        y,
        size: Math.random() * 4 + 1, // Slightly bigger particles
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.9 + 0.3,
        life: 1,
        hue: Math.random() * 60 + 200,
      };
    };

    // More particles for denser effect
    const initialParticles = Array.from({ length: 250 }, createParticle);
    setParticles(initialParticles);

    const animate = () => {
      setTime(prev => prev + 0.02);
      
      setParticles(prevParticles => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        return prevParticles.map(particle => {
          const dx = centerX - particle.x;
          const dy = centerY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const attraction = Math.min(distance / 80, 12); // Stronger attraction
          const forceX = (dx / distance) * attraction * particle.speed;
          const forceY = (dy / distance) * attraction * particle.speed;
          
          const angle = Math.atan2(dy, dx);
          const spiralForce = 0.8; // Stronger spiral
          const spiralX = Math.cos(angle + Math.PI / 2) * spiralForce;
          const spiralY = Math.sin(angle + Math.PI / 2) * spiralForce;
          
          const newX = particle.x + forceX + spiralX;
          const newY = particle.y + forceY + spiralY;
          
          const newLife = distance < 60 ? particle.life - 0.015 : particle.life; // Wider void
          
          if (newLife <= 0 || distance < 30) {
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
        background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)', // Same as older version
      }}
    >
      {/* Denser void particle system */}
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
              boxShadow: `0 0 ${particle.size * 4}px hsla(${particle.hue}, 70%, 60%, ${particle.opacity * 0.9})`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Wider central void effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            rgba(0,0,0,0.05) 15%, 
            rgba(0,0,0,0.2) 30%, 
            rgba(0,0,0,0.4) 45%, 
            rgba(0,0,0,0.7) 65%, 
            rgba(13,13,13,0.95) 100%
          )`,
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

      {/* Main content */}
      <div 
        className="z-20 text-center relative" 
        data-aos="fade-up" 
        style={{ 
          maxWidth: '800px',
          transform: `translateY(${scrollY * -0.3}px)`,
        }}
        onMouseEnter={() => setIsHoveringText(true)}
        onMouseLeave={() => setIsHoveringText(false)}
      >
        {/* Name with fast typewriter */}
        <div className="relative mb-6">
          <p
            className="mb-4 font-medium tracking-widest text-gray-300 relative z-10"
            style={{ 
              fontSize: '2rem',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
          >
            <span className="font-semibold text-white relative">
              {nameText}
              {showNameCursor && <span className="animate-pulse">|</span>}
            </span>
          </p>
        </div>

        {/* Main title with breathing effect ONLY on DEVELOPER */}
        <h1
          className="font-bold mb-8 relative"
          style={{ 
            fontSize: '7rem', 
            lineHeight: '1.1',
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
              transform: `scale(${1 + Math.sin(time * 1.8) * 0.05})`, // Breathing effect only here
              display: 'inline-block',
            }}
          >
            Developer
          </span>
        </h1>

        {/* Role text with fast typewriter */}
        <h2
          className="font-semibold mb-12 relative"
          style={{ 
            fontSize: '3rem',
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
                {showRoleCursor && <span className="animate-pulse">|</span>}
              </span>
          </span>
        </h2>
      </div>

      {/* Know Me with down arrow */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10 cursor-pointer hover:opacity-80 transition-opacity duration-300"
        style={{ textDecoration: 'none' }}
      >
        <p className="text-blue-400 text-lg mb-2 font-medium">Know Me</p>
        <div 
          className="text-blue-400 text-2xl animate-bounce"
          style={{
            animation: 'bounce 2s infinite'
          }}
        >
          ↓
        </div>
      </a>
    </section>
  );
}