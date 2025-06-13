import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaFilm, FaUniversity, FaBolt, FaWater, FaUser, FaCogs, FaEye, FaEyeSlash, FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const mainProjects = [
  {
    name: 'LegalMind AI',
    description: 'An intelligent legal chatbot that acts as a virtual lawyer, providing legal advice and document analysis using advanced AI technologies.',
    tech: ['Python', 'Ollama', 'LangChain', 'OpenAI', 'PyTorch', 'PyPDF2'],
    github: '#',
    category: 'AI & Machine Learning',
    icon: <FaRobot className="text-2xl" />,
    gradient: 'from-purple-500 to-indigo-600',
    features: ['Legal document analysis', 'AI-powered legal advice', 'Natural language processing']
  },
  {
    name: 'CinemaHub Portal',
    description: 'A comprehensive movie ticket booking portal with advanced features like seat selection, payment integration, and user analytics.',
    tech: ['Python', 'MySQL', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib'],
    github: '#',
    category: 'Web Application',
    icon: <FaFilm className="text-2xl" />,
    gradient: 'from-red-500 to-pink-600',
    features: ['Seat selection system', 'Payment processing', 'Analytics dashboard']
  },
  {
    name: 'EduManage Pro',
    description: 'A complete university management system handling student records, course management, and administrative tasks.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: '#',
    category: 'Management System',
    icon: <FaUniversity className="text-2xl" />,
    gradient: 'from-blue-500 to-cyan-600',
    features: ['Student management', 'Course scheduling', 'Grade tracking']
  },
  {
    name: 'PowerBill Manager',
    description: 'An efficient electricity bill management system for utilities to track consumption, generate bills, and manage customer accounts.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: '#',
    category: 'Utility Management',
    icon: <FaBolt className="text-2xl" />,
    gradient: 'from-yellow-500 to-orange-600',
    features: ['Bill generation', 'Usage tracking', 'Customer portal']
  },
  {
    name: 'OceanGuard AI',
    description: 'Marine debris detection system using computer vision and AI to identify and track ocean pollution for environmental protection.',
    tech: ['Python', 'Flask', 'OpenCV', 'Ultralytics', 'PyTorch', 'NumPy'],
    github: '#',
    category: 'Computer Vision',
    icon: <FaWater className="text-2xl" />,
    gradient: 'from-teal-500 to-blue-600',
    features: ['Real-time detection', 'Marine debris classification', 'Environmental monitoring']
  },
  {
    name: 'Portfolio Showcase',
    description: 'A modern, responsive portfolio website built with React, showcasing projects and skills with interactive animations.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    link: 'https://chetanlohia.netlify.app/',
    github: '#',
    category: 'Web Development',
    icon: <FaUser className="text-2xl" />,
    gradient: 'from-green-500 to-emerald-600',
    features: ['Responsive design', 'Interactive animations', 'Modern UI/UX']
  },
  {
    name: 'SmartLift Controller',
    description: 'An intelligent lift management system using Arduino and IoT components for efficient elevator operations and monitoring.',
    tech: ['Arduino', 'C++', 'IoT Components', 'Sensors'],
    ieee: '#',
    category: 'IoT & Hardware',
    icon: <FaCogs className="text-2xl" />,
    gradient: 'from-gray-500 to-slate-600',
    features: ['Smart scheduling', 'Real-time monitoring', 'Energy optimization']
  }
];

const minorProjects = [
  {
    name: 'DrugBank System',
    description: 'A pharmaceutical database management system for tracking drug information and inventory.',
    tech: ['C'],
    github: '#',
    category: 'Database System',
    icon: <FaCogs className="text-xl" />,
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    name: 'SmartHome Controller',
    description: 'Home automation system for controlling lights, temperature, and security systems.',
    tech: ['Java', 'MySQL'],
    github: '#',
    category: 'Automation',
    icon: <FaCogs className="text-xl" />,
    gradient: 'from-orange-400 to-red-500'
  },
  {
    name: 'SplitWise Clone',
    description: 'A money splitting application for groups to manage shared expenses and settlements.',
    tech: ['Java'],
    github: '#',
    category: 'Utility App',
    icon: <FaCogs className="text-xl" />,
    gradient: 'from-blue-400 to-purple-500'
  },
  {
    name: 'ParkEase System',
    description: 'Parking management system for tracking vehicle entry/exit and space availability.',
    tech: ['C++'],
    github: '#',
    category: 'Management System',
    icon: <FaCogs className="text-xl" />,
    gradient: 'from-pink-400 to-rose-500'
  }
];


export default function Projects() {
  const [showMinorProjects, setShowMinorProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProjectExpansion = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 text-white"
      style={{ background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-blue-400">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative solutions I've built, ranging from AI-powered applications to management systems.
            <span className="hidden sm:inline"> Each project represents a unique challenge and learning experience.</span>
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} transform group-hover:scale-110 transition-transform`}>
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {project.category}
                    </span>
                    {/* Mobile expand button */}
                    <button
                      onClick={() => toggleProjectExpansion(index)}
                      className="lg:hidden p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors"
                    >
                      {expandedProjects[index] ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Features - Collapsible on mobile */}
                <div className={`mb-4 transition-all duration-300 ${
                  expandedProjects[index] ? 'block' : 'hidden lg:block'
                }`}>
                  <div className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack - Show fewer on mobile */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tech.slice(0, expandedProjects[index] ? project.tech.length : (window.innerWidth < 1024 ? 3 : 4)).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {!expandedProjects[index] && project.tech.length > (window.innerWidth < 1024 ? 3 : 4) && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                      +{project.tech.length - (window.innerWidth < 1024 ? 3 : 4)}
                    </span>
                  )}
                </div>

                {/* Action Buttons - Stack on mobile */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex-1 justify-center"
                    >
                      <FaExternalLinkAlt size={12} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-sm flex-1 justify-center"
                    >
                      <FaGithub size={12} /> Code
                    </a>
                  )}
                  {project.ieee && (
                    <a
                      href={project.ieee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm flex-1 justify-center"
                    >
                      <FaAward size={12} /> IEEE
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minor Projects Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowMinorProjects(!showMinorProjects)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700/50 transition-all duration-300 backdrop-blur-sm"
          >
            {showMinorProjects ? <FaEyeSlash /> : <FaEye />}
            {showMinorProjects ? 'Hide' : 'View'} Minor Projects
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
              {minorProjects.length}
            </span>
          </button>
        </div>

        {/* Minor Projects Section */}
        {showMinorProjects && (
          <div className="border-t border-gray-700/50 pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Additional Projects</h3>
              <p className="text-gray-400">Smaller projects and learning exercises</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {minorProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{project.name}</h4>
                      <span className="text-xs text-blue-300">{project.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition-colors text-xs"
                  >
                    <FaGithub size={10} /> Code
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div><br></br><br></br>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent " />
    </section>
  );
}