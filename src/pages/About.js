import React, { useEffect, useState } from 'react';
import { FaDownload,FaArrowRight } from 'react-icons/fa';

const certifications = [
  { src: '/assets/certs/1.jpeg', title: 'DBMS', color: 'from-purple-500 to-pink-500' },
  { src: '/assets/certs/2.jpeg', title: 'Full Stack Bootcamp', color: 'from-blue-500 to-cyan-500' },
  { src: '/assets/certs/3.jpeg', title: 'Ideathon', color: 'from-green-500 to-teal-500' },
  { src: '/assets/certs/4.jpeg', title: 'Makathon', color: 'from-orange-500 to-red-500' },
  { src: '/assets/certs/5.jpeg', title: 'Python Programming', color: 'from-yellow-500 to-orange-500' },
  { src: '/assets/certs/6.jpeg', title: 'Hackathon', color: 'from-indigo-500 to-purple-500' },
  { src: '/assets/certs/7.jpeg', title: 'YouTube', color: 'from-red-500 to-pink-500' }
];

export default function About() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ 
        background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)',
      }}
    >


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div 
          id="hero-section"
          data-animate
          className={`flex flex-col lg:flex-row items-center gap-16 mb-32 transition-all duration-1000 ${
            isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="lg:w-3/5 space-y-8">
            <div className="relative">
              <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Hi There
              </h2>
            </div>
            
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                I'm <span className="text-blue-400 font-semibold">Chetan</span>, currently pursuing my B.Tech in Computer Science with a specialization in AI & ML.
              </p>
              
              <p>
                I'm passionate about technology, creative problem-solving, and designing intuitive digital experiences.
                I enjoy turning ideas into real, usable products and love collaborating with others to make things better.
                You can check out some of my work{' '}
                <a href="#projects" className="text-blue-300 underline hover:text-blue-500 transition-colors duration-300 inline-flex items-center gap-1">
                  here <FaArrowRight className="text-sm" />
                </a>, where I've shared a few projects I'm proud of.
              </p>
              
              <p>
                Outside of tech, I like exploring art and design, playing around with creative tools like Photoshop,
                diving into new hobbies, and meeting interesting people, sketching and gaming.
                I'm always up for good conversations and exciting opportunities—{' '}
                <a href="#contact" className="text-blue-300 underline hover:text-blue-500 transition-colors duration-300 inline-flex items-center gap-1">
                  feel free to say hi! <FaArrowRight className="text-sm" />
                </a>
              </p>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-lg" />
              <img
                src="/assets/profile.jpg"
                alt="Chetan Lohia"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-16" />

        {/* Certifications Section */}
        <div 
          id="certs-section"
          data-animate
          className={`mb-32 transition-all duration-1000 delay-400 ${
            isVisible['certs-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Things I've Earned
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="overflow-hidden relative rounded-2xl">
            <div className="flex animate-scroll-x space-x-8 w-max py-8">
              {[...certifications, ...certifications].map((cert, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${cert.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md`} />
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50 group-hover:border-gray-500/50 transition-all duration-300">
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="h-[400px] w-auto rounded-lg object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-16" />

        {/* Resume Section */}
        <div 
          id="resume-section"
          data-animate
          className={`text-center transition-all duration-1000 delay-600 ${
            isVisible['resume-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-4xl font-bold mb-6 text-blue-400">
            Want to Know More?
          </h3>
          <p className="text-lg mb-6 text-gray-300">
            Here's my resume if you'd like a deeper look at my experience and skills.
          </p>
          
          <a
            href={process.env.PUBLIC_URL + '/assets/RESUME.pdf'}
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            <FaDownload className="mr-2" /> 
            Check it Out
          </a>
        </div><br></br><br></br>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent " />

      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
        }
      `}</style>
    </section>
  );
}