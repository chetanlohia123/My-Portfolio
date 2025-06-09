import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaDownload } from 'react-icons/fa';

const certifications = [
  { src: '/assets/certs/1.jpeg', title: 'DBMS' },
  { src: '/assets/certs/2.jpeg', title: 'Full Stack Bootcamp' },
  { src: '/assets/certs/3.jpeg', title: 'Ideathon' },
  { src: '/assets/certs/4.jpeg', title: 'Makathon' },
  { src: '/assets/certs/5.jpeg', title: 'Python Programming' },
  { src: '/assets/certs/6.jpeg', title: 'Hackathon' },
  { src: '/assets/certs/7.jpeg', title: 'YouTube' }
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 text-white"
      style={{ background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-2/3" data-aos="fade-right">
            <h2 className="text-5xl font-bold mb-6 text-blue-400">Hi There</h2>
            <p className="text-xl mb-6 leading-relaxed">
              I’m Chetan, currently pursuing my B.Tech in Computer Science with a specialization in AI & ML.
              <br /><br />
              I’m passionate about technology, creative problem-solving, and designing intuitive digital experiences.
              I enjoy turning ideas into real, usable products and love collaborating with others to make things better.
              You can check out some of my work{' '}
              <a href="#projects" className="text-blue-300 underline hover:text-blue-500">here</a>, where I’ve shared a few projects I’m proud of.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
              Outside of tech, I like exploring art and design, playing around with creative tools like Photoshop,
              diving into new hobbies, and meeting interesting people, sketching and gaming.
              I’m always up for good conversations and exciting opportunities—{' '}
              <a href="#contact" className="text-blue-300 underline hover:text-blue-500">feel free to say hi!</a>
            </p>
          </div>
          <div className="md:w-1/3" data-aos="fade-left">
            <img
              src="/assets/profile.jpg"
              alt="Chetan Lohia"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
<hr></hr>
<br></br><br></br><br></br>
        {/* Certifications Section */}
        <div data-aos="fade-up" className="mb-24 relative">
          <h3 className="text-4xl font-bold mb-10 text-center text-blue-300">Things I’ve Earned</h3>
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-x space-x-6 w-max">
              {[...certifications, ...certifications].map((cert, idx) => (
                <img
                  key={idx}
                  src={cert.src}
                  alt={cert.title}
                  className="h-[380px] w-auto rounded-md border border-white shadow-md object-contain"
                />
              ))}
            </div>
          </div>
        </div>

<br></br><br></br><br></br>
        {/* Resume Section */}
        <div className="text-center" data-aos="zoom-in">
          <h3 className="text-4xl font-bold mb-6 text-blue-400">Want to Know More?</h3>
          <p className="text-lg mb-6 text-gray-300">
            Here’s my resume if you’d like a deeper look at my experience and skills.
          </p>
          <a
            href={process.env.PUBLIC_URL + '/assets/RESUME.pdf'}
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            <FaDownload className="mr-2" /> Check it Out
          </a>
        </div>
      </div><br></br><br></br><br></br>
<hr></hr>
      {/* Animation Style */}
      <style>
        {`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            animation: scroll-x 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}




