import React, { useEffect, useState, useRef } from 'react';

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

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const animationRef = useRef();
// Typewriter effect for name
  useEffect(() => {
    const typeSpeed = 100.5; // Typing speed
    const deleteSpeed = 100.5; // Deletion speed
    const pauseTime = 90; // Pause after typing
    const gapAfterCycle = 1000; // 1-second gap after full cycle

    let nameTimeout;

    const typeName = () => {
      const currentWord = nameWords[currentNameWord];
      if (nameIndex < currentWord.length) {
        setNameText(currentWord.substring(0, nameIndex + 1));
        setNameIndex(prev => prev + 1);
        nameTimeout = setTimeout(typeName, typeSpeed);
      } else {
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
        nameTimeout = setTimeout(typeName, gapAfterCycle); // 1-second gap after cycle
      }
    };

    nameTimeout = setTimeout(typeName, 180);

    return () => {
      clearTimeout(nameTimeout);
    };
  }, [nameIndex, currentNameWord, nameText,nameWords]); // Dependencies only for name typewriter
  
  // Typewriter effect for role
  useEffect(() => {
    const typeSpeed = 2.5; // 10x faster than original 25ms
    const deleteSpeed = 1.5; // 10x faster than original 15ms
    const pauseTime = 80; // 10x faster than original 800ms

    let roleTimeout;

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

    roleTimeout = setTimeout(typeRole, 120);

    return () => {
      clearTimeout(roleTimeout);
    };
  }, [roleIndex, currentRoleWord, roleText,roleWords]); // Dependencies only for role typewriter

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowNameCursor(prev => !prev);
      setShowRoleCursor(prev => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Mouse tracking and animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const animate = () => {
      setTime(prev => prev + 0.02);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-8 py-24 text-white overflow-hidden"
      style={{ 
        background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)',
      }}
    >
      {/* Left side content - Vertically Centered */}
      <div 
        className="z-20 flex-1 max-w-2xl flex flex-col justify-center"
        style={{ paddingLeft: '3rem' }}
      >
        {/* Name with fast typewriter */}
        <div className="relative mb-6">
          <p
            className="mb-4 font-medium tracking-widest text-gray-300"
            style={{ 
              fontSize: '2.3rem',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              paddingBottom: '13.5rem',
              
            }}
          >
            <span className="font-semibold text-white">
              {nameText}
              {showNameCursor && <span className="animate-pulse">|</span>}
            </span>
          </p>
        </div>

        {/* Main title with breathing effect */}
        <h1
          className="font-bold mb-8"
          style={{ 
            fontSize: '7rem', 
            lineHeight: '1.1',
            textShadow: `
              0 0 40px rgba(59, 130, 246, 0.9),
              15px 15px 30px rgba(0, 0, 0, 0.8),
              -8px -8px 20px rgba(59, 130, 246, 0.4)
            `,
            filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))',
            position: 'absolute',
          }}
        >
          <span 
            style={{ 
              color: '#3b82f6',
              textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
              transform: `scale(${1 + Math.sin(time * 1.8) * 0.05})`,
              display: 'inline-block',
            }}
          >
            Developer
          </span>
        </h1>

        {/* Role text */}
        <h2
          className="font-semibold"
          style={{ 
            fontSize: '3.8rem',
            textShadow: '0 0 25px rgba(96, 165, 250, 0.7)',
            position: 'absolute',
            marginTop: '15rem',
          }}
        >
          + <span style={{ color: '#60a5fa' }}>
              {roleText}
              {showRoleCursor && <span className="animate-pulse">|</span>}
            </span>
        </h2>
      </div>

      {/* Right side - Interactive 3D Floating Code Blocks */}
      <div className="flex-1 flex justify-center items-center z-10">
        <div 
          className="relative"
          style={{
            width: '500px',
            height: '600px',
            perspective: '1200px',
          }}
        >
          {/* Main Terminal Container */}
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transform: `
                rotateX(${mousePos.y * 30 + Math.sin(time * 0.8) * 3}deg) 
                rotateY(${mousePos.x * 30 + Math.cos(time * 0.6) * 5}deg)
                rotateZ(${Math.sin(time * 0.9) * 2}deg)
              `,
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Central Terminal */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '340px',
                height: '210px',
                transform: 'translate(-50%, -50%) translateZ(50px)',
                background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%)',
                border: '2px solid rgba(59, 130, 246, 0.8)',
                borderRadius: '12px',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 0 60px rgba(59, 130, 246, 0.6),
                  inset 0 0 30px rgba(59, 130, 246, 0.1)
                `,
                overflow: 'hidden',
              }}
            >
              {/* Terminal Header */}
              <div style={{
                background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.15) 100%)',
                padding: '8px 16px',
                borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28ca42' }}></div>
                <span style={{ marginLeft: '10px', fontSize: '12px', color: '#60a5fa', fontFamily: 'monospace' }}>
                  ~/portfolio/src
                </span>
              </div>
              
              {/* Terminal Content */}
              <div style={{ padding: '16px', fontFamily: 'monospace', fontSize: '13px', color: '#60a5fa' }}>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ color: '#10b981' }}>$</span> npm run start
                </div>
                <div style={{ marginBottom: '4px', color: '#fbbf24' }}>
                  ⚡ Vite dev server running
                </div>
                <div style={{ marginBottom: '4px', color: '#e5e7eb' }}>
                  Local: http://localhost:3000
                </div>
                <div style={{ color: '#10b981' }}>
                  ✓ Ready in {Math.floor(time * 100) % 1000}ms
                </div>
              </div>
            </div>

            {/* Floating Code Blocks */}
            {[
              { 
                code: 'const dev = {\n  name: "Chetan",\n  skills: ["React", "JS"]\n}',
                x: -160, y: -110, z: 0, delay: 0, color: '#10b981'
              },
              { 
                code: 'function solve(problem) {\n  return innovation +\n    creativity;\n}',
                x: 140, y: -80, z: -50, delay: 1, color: '#f59e0b'
              },
              { 
                code: 'export default {\n  passion: "coding",\n  goal: "impact"\n}',
                x: -140, y: 120, z: -30, delay: 2, color: '#ef4444'
              },
              { 
                code: 'while(learning) {\n  grow();\n  build();\n  repeat();\n}',
                x: 180, y: 140, z: -20, delay: 3, color: '#8b5cf6'
              },
            ].map((block, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '240px',
                  minHeight: '140px',
                  transform: `
                    translate(-50%, -50%) 
                    translateX(${block.x + Math.sin(time + block.delay) * 20}px)
                    translateY(${block.y + Math.cos(time + block.delay) * 15}px)
                    translateZ(${block.z + Math.sin(time * 0.7 + block.delay) * 30}px)
                    rotateY(${Math.sin(time * 0.5 + block.delay) * 10}deg)
                    rotateX(${Math.cos(time * 0.3 + block.delay) * 5}deg)
                  `,
                  background: 'linear-gradient(135deg, rgba(13, 13, 13, 0.9) 0%, rgba(26, 26, 26, 0.8) 100%)',
                  border: `1px solid ${block.color}40`,
                  borderRadius: '8px',
                  padding: '12px',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  color: block.color,
                  backdropFilter: 'blur(15px)',
                  boxShadow: `
                    0 0 30px ${block.color}40,
                    inset 0 0 20px rgba(0, 0, 0, 0.3)
                  `,
                  whiteSpace: 'pre-line',
                  opacity: 0.9,
                }}
              >
                {block.code}
              </div>
            ))}

            {/* Floating Syntax Symbols */}
            {['{', '}', '<', '>', '(', ')', '[', ']', '=', ';'].map((symbol, i) => (
              <div
                key={symbol + i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '60px',
                  height: '60px',
                  transform: `
                    translate(-50%, -50%)
                    translateX(${Math.cos(i * Math.PI / 5 + time * 0.8) * 220}px)
                    translateY(${Math.sin(i * Math.PI / 5 + time * 0.8) * 180}px)
                    translateZ(${Math.sin(time * 1.2 + i) * 60}px)
                    rotateZ(${time * 30 + i * 36}deg)
                  `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'monospace',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: `hsl(${200 + i * 20}, 70%, 60%)`,
                  textShadow: `0 0 15px hsl(${200 + i * 20}, 70%, 60%)`,
                  opacity: 0.8,
                }}
              >
                {symbol}
              </div>
            ))}

            {/* Binary Rain Effect */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`binary-${i}`}
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: `${20 + i * 15}%`,
                  width: '2.5px',
                  height: '89%',
                  background: `linear-gradient(to bottom, 
                    transparent 0%, 
                    rgba(59, 130, 246, 0.6) 20%, 
                    rgba(59, 130, 246, 0.2) 50%, 
                    transparent 100%
                  )`,
                  transform: `translateY(${Math.sin(time * 2 + i) * 20}px)`,
                  opacity: Math.sin(time * 3 + i) * 0.3 + 0.7,
                }}
              />
            ))}
          </div>

          {/* Massive Glow Effect */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '640px',
              height: '640px',
              background: `
                radial-gradient(circle, 
                  rgba(59, 130, 246, 0.4) 0%, 
                  rgba(96, 165, 250, 0.2) 30%,
                  rgba(59, 130, 246, 0.1) 60%,
                  transparent 100%
                )
              `,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(60px)',
              zIndex: -30,
            }}
          />

          {/* Secondary Glow Layers */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '420px',
              height: '420px',
              background: `
                radial-gradient(circle, 
                  rgba(16, 185, 129, 0.3) 0%, 
                  rgba(245, 158, 11, 0.2) 50%,
                  transparent 100%
                )
              `,
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)',
              zIndex: -2,
              animation: 'grandPulse 3s ease-in-out infinite alternate-reverse',
            }}
          />
        </div>
      </div>

      {/* Know Me button - At very bottom with down arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <a 
          href="#about"
          className="flex items-center gap-3 text-center cursor-pointer hover:opacity-80 transition-all duration-300 hover:transform hover:scale-105"
          style={{ textDecoration: 'none' }}
        >
          <p className="text-blue-400 text-lg font-medium">Know Me</p>
          <div 
            className="text-blue-400 text-2xl"
            style={{ animation: 'bounce 2s infinite' }}
          >
            ↓
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }
        @keyframes grandPulse {
          0% { 
            opacity: 0.4; 
            transform: translate(-50%, -50%) scale(0.9);
          }
          100% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        @keyframes slowRain {
          0% { 
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-5px);
          }
          70% {
            transform: translateY(-3px);
          }
          90% {
            transform: translateY(-1px);
          }
        }
      `}</style>
    </section>
  );
}