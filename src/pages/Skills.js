import React, { useState, useEffect } from 'react';
import {
  SiJavascript, SiPython, SiC, SiHtml5, SiReact, SiTailwindcss, SiGithub, SiNodedotjs,
  SiAdobephotoshop, SiFigma, SiVisualstudio,
  SiCanva, SiGooglechrome,
  SiSqlite,
} from 'react-icons/si';
import { FaLaptopCode, FaUsers, FaComments, FaClock, FaLightbulb, FaProjectDiagram, FaCode, FaTerminal, FaBug, FaList, FaTh, FaExternalLinkAlt } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming & Development",
    emoji: "👨‍💻",
    description: "Core programming languages and development frameworks",
    skills: [
      {
        name: "C",
        icon: <SiC />,
        color: '#A8B9CC',
        level: 'Advanced',
        progress: 85,
        description: "Proficient in system programming, data structures, and algorithm implementation using C.",
        experience: "3+ years",
        projects: ["Memory Management System", "Custom Data Structures Library"]
      },
      {
        name: "Python",
        icon: <SiPython />,
        color: '#3776AB',
        level: 'Advanced',
        progress: 90,
        description: "Experienced in web development, data analysis, machine learning, and automation.",
        experience: "4+ years",
        projects: ["AI Chatbot", "Data Analytics Dashboard", "Web Scraper"]
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: '#F7DF1E',
        level: 'Advanced',
        progress: 88,
        description: "Expert in modern ES6+, async programming, and full-stack development.",
        experience: "3+ years",
        projects: ["E-commerce Platform", "Real-time Chat App", "Task Management Tool"]
      },
      {
        name: "React",
        icon: <SiReact />,
        color: '#61DAFB',
        level: 'Advanced',
        progress: 85,
        description: "Building responsive UIs with hooks, context API, and modern React patterns.",
        experience: "2+ years",
        projects: ["Portfolio Website", "Social Media Dashboard", "Learning Management System"]
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        color: '#339933',
        level: 'Intermediate',
        progress: 75,
        description: "Backend development with Express.js, APIs, and database integration.",
        experience: "2+ years",
        projects: ["REST API Server", "Authentication System", "File Upload Service"]
      },
      {
        name: "HTML & CSS",
        icon: <SiHtml5 />,
        color: '#E34F26',
        level: 'Expert',
        progress: 95,
        description: "Semantic HTML5, CSS3, animations, and responsive design principles.",
        experience: "5+ years",
        projects: ["Corporate Website", "Landing Pages", "CSS Animation Library"]
      },
      {
        name: "Git & GitHub",
        icon: <SiGithub />,
        color: '#181717',
        level: 'Advanced',
        progress: 82,
        description: "Version control, collaboration workflows, and CI/CD pipelines.",
        experience: "3+ years",
        projects: ["Open Source Contributions", "Team Collaboration Projects"]
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: '#06B6D4',
        level: 'Advanced',
        progress: 88,
        description: "Utility-first CSS framework for rapid UI development.",
        experience: "2+ years",
        projects: ["Modern Web Apps", "Component Libraries", "Responsive Designs"]
      },
      {
        name: "SQL",
        icon: <SiSqlite />,
        color: '#003B57',
        level: 'Intermediate',
        progress: 70,
        description: "Database design, complex queries, and performance optimization.",
        experience: "2+ years",
        projects: ["Database Management System", "Analytics Queries", "Data Migration Scripts"]
      },
      {
        name: "Data Structures & Algorithms",
        icon: <FaLaptopCode />,
        color: '#4A90E2',
        level: 'Advanced',
        progress: 80,
        description: "Problem-solving with efficient algorithms and optimal data structures.",
        experience: "3+ years",
        projects: ["Algorithm Visualizer", "Competitive Programming Solutions"]
      },
      {
        name: "Object-Oriented Programming (OOP)",
        icon: <FaProjectDiagram />,
        color: '#50E3C2',
        level: 'Advanced',
        progress: 85,
        description: "Design patterns, inheritance, polymorphism, and clean code practices.",
        experience: "3+ years",
        projects: ["Class Library Design", "Software Architecture Projects"]
      },
      {
        name: "Debugging & Testing",
        icon: <FaBug />,
        color: '#C21325',
        level: 'Intermediate',
        progress: 72,
        description: "Unit testing, integration testing, and debugging complex applications.",
        experience: "2+ years",
        projects: ["Test Suite Implementation", "Bug Tracking System"]
      },
      {
        name: "Responsive Web Development",
        icon: <FaCode />,
        color: '#FF6B6B',
        level: 'Advanced',
        progress: 90,
        description: "Mobile-first design, cross-browser compatibility, and performance optimization.",
        experience: "3+ years",
        projects: ["Mobile-First Websites", "Progressive Web Apps"]
      },
    ]
  },
  {
    title: "UI/UX & Design",
    emoji: "🎨",
    description: "Creative design tools and user experience principles",
    skills: [
      {
        name: "Adobe Photoshop",
        icon: <SiAdobephotoshop />,
        color: '#31A8FF',
        level: 'Advanced',
        progress: 85,
        description: "Photo editing, digital artwork, and graphic design for web and print.",
        experience: "4+ years",
        projects: ["Brand Identity Design", "Social Media Graphics", "Web Assets"]
      },
      {
        name: "Figma",
        icon: <SiFigma />,
        color: '#F24E1E',
        level: 'Advanced',
        progress: 82,
        description: "UI/UX design, prototyping, and collaborative design workflows.",
        experience: "2+ years",
        projects: ["Mobile App Mockups", "Design Systems", "Interactive Prototypes"]
      },
      {
        name: "UI/UX Design",
        icon: <FaLightbulb />,
        color: '#FFD93D',
        level: 'Intermediate',
        progress: 75,
        description: "User research, wireframing, and creating intuitive user experiences.",
        experience: "2+ years",
        projects: ["User Experience Audit", "Interface Redesign", "Usability Testing"]
      },
      {
        name: "Design Thinking",
        icon: <FaComments />,
        color: '#9013FE',
        level: 'Intermediate',
        progress: 70,
        description: "Human-centered design approach and creative problem-solving methodology.",
        experience: "1+ years",
        projects: ["Design Workshop Facilitation", "User Journey Mapping"]
      },
      {
        name: "Color Theory",
        icon: <FaLightbulb />,
        color: '#FF4081',
        level: 'Beginner',
        progress: 60,
        description: "Understanding color psychology and creating harmonious color palettes.",
        experience: "1+ years",
        projects: ["Brand Color Schemes", "Accessibility Color Testing"]
      },
    ]
  },
  {
    title: "Tools & Platforms",
    emoji: "⚙️",
    description: "Development tools and productivity platforms",
    skills: [
      {
        name: "VS Code",
        icon: (
          <img
            src="/assets/vs.png"
            alt="VS Code icon"
            style={{
              width: '48px',
              height: '48px',
            }}
          />
        ),
        color: '#007ACC',
        level: 'Advanced',
        progress: 88,
        description: "Quick graphic design for social media, presentations, and marketing materials.",
        experience: "3+ years",
        projects: ["Social Media Campaigns", "Presentation Templates", "Marketing Materials"]
      },
      {
        name: "Canva",
        icon: <SiCanva />,
        color: '#00C4CC',
        level: 'Advanced',
        progress: 88,
        description: "Quick graphic design for social media, presentations, and marketing materials.",
        experience: "3+ years",
        projects: ["Social Media Campaigns", "Presentation Templates", "Marketing Materials"]
      },
      {
        name: "GitHub",
        icon: <SiGithub />,
        color: '#181717',
        level: 'Advanced',
        progress: 85,
        description: "Code collaboration, project management, and open-source contributions.",
        experience: "3+ years",
        projects: ["Open Source Contributions", "Team Repository Management"]
      },
      {
        name: "Command Line (CLI)",
        icon: <FaTerminal />,
        color: '#4EAA25',
        level: 'Intermediate',
        progress: 75,
        description: "Terminal navigation, script automation, and system administration.",
        experience: "2+ years",
        projects: ["Build Scripts", "Deployment Automation", "System Configuration"]
      },
      {
        name: "Chrome DevTools",
        icon: <SiGooglechrome />,
        color: '#4285F4',
        level: 'Advanced',
        progress: 80,
        description: "Debugging, performance analysis, and web development optimization.",
        experience: "3+ years",
        projects: ["Performance Optimization", "Responsive Design Testing", "JavaScript Debugging"]
      },
    ]
  },
  {
    title: "Soft Skills",
    emoji: "🧩",
    description: "Professional and interpersonal capabilities",
    skills: [
      {
        name: "Problem Solving",
        icon: <FaLightbulb />,
        color: '#FFD700',
        level: 'Expert',
        progress: 95,
        description: "Analytical thinking and creative solutions to complex technical challenges.",
        experience: "5+ years",
        projects: ["Algorithm Optimization", "System Architecture Design", "Bug Resolution"]
      },
      {
        name: "Leadership",
        icon: <FaUsers />,
        color: '#3F51B5',
        level: 'Advanced',
        progress: 82,
        description: "Team guidance, project coordination, and mentoring junior developers.",
        experience: "2+ years",
        projects: ["Team Lead Experience", "Mentorship Programs", "Project Management"]
      },
      {
        name: "Team Collaboration",
        icon: <FaUsers />,
        color: '#00BCD4',
        level: 'Expert',
        progress: 92,
        description: "Effective communication and seamless cooperation in diverse team environments.",
        experience: "4+ years",
        projects: ["Cross-functional Teams", "Remote Collaboration", "Agile Development"]
      },
      {
        name: "Communication",
        icon: <FaComments />,
        color: '#9C27B0',
        level: 'Advanced',
        progress: 85,
        description: "Clear technical communication and presentation of complex ideas.",
        experience: "3+ years",
        projects: ["Technical Presentations", "Documentation Writing", "Client Communication"]
      },
      {
        name: "Adaptability",
        icon: <FaClock />,
        color: '#FF9800',
        level: 'Expert',
        progress: 90,
        description: "Quick learning of new technologies and adaptation to changing requirements.",
        experience: "4+ years",
        projects: ["Technology Migration", "Process Improvement", "Rapid Prototyping"]
      },
      {
        name: "Critical Thinking",
        icon: <FaLightbulb />,
        color: '#8BC34A',
        level: 'Advanced',
        progress: 88,
        description: "Analytical evaluation and systematic approach to problem-solving.",
        experience: "3+ years",
        projects: ["System Analysis", "Requirements Gathering", "Solution Architecture"]
      },
      {
        name: "Time Management",
        icon: <FaClock />,
        color: '#F44336',
        level: 'Advanced',
        progress: 85,
        description: "Efficient task prioritization and deadline management in fast-paced environments.",
        experience: "3+ years",
        projects: ["Sprint Planning", "Multi-project Coordination", "Deadline Management"]
      },
      {
        name: "Project Planning",
        icon: <FaProjectDiagram />,
        color: '#4CAF50',
        level: 'Advanced',
        progress: 80,
        description: "Strategic planning, resource allocation, and milestone tracking.",
        experience: "2+ years",
        projects: ["Project Roadmaps", "Resource Planning", "Risk Assessment"]
      },
      {
        name: "Creativity",
        icon: <FaLightbulb />,
        color: '#E91E63',
        level: 'Expert',
        progress: 90,
        description: "Innovative thinking and creative approaches to design and development challenges.",
        experience: "4+ years",
        projects: ["Creative Solutions", "Innovation Projects", "Design Concepts"]
      },
      {
        name: "Attention to Detail",
        icon: <FaLightbulb />,
        color: '#FF5722',
        level: 'Advanced',
        progress: 88,
        description: "Meticulous code review and quality assurance in all deliverables.",
        experience: "3+ years",
        projects: ["Code Reviews", "Quality Assurance", "Documentation Standards"]
      },
    ]
  }
];

const levelColors = {
  'Beginner': '#6B7280',
  'Intermediate': '#F59E0B',
  'Advanced': '#10B981',
  'Expert': '#8B5CF6'
};

export default function Skills() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const allSkills = skillCategories.flatMap(cat =>
    cat.skills.map(skill => ({ ...skill, category: cat.title }))
  );

  const filteredCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill => {
      const matchesLevel = selectedLevel === 'All' || skill.level === selectedLevel;
      const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
      return matchesLevel && matchesCategory;
    })
  })).filter(category => category.skills.length > 0);

  const totalSkills = allSkills.length;
  const uniqueLevels = [...new Set(allSkills.map(skill => skill.level))];

  const SkillCard = ({ skill, skillIndex }) => (
    <div
      className="group relative w-full max-w-[240px] h-[300px] mx-auto perspective-1000"
      style={{ animationDelay: `${skillIndex * 100}ms` }}
    >
      <div className="skill-card relative w-full h-full transform-style-preserve-3d transition-all duration-700 hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-blue-300/20 p-6 flex flex-col items-center justify-center text-center shadow-xl">
          <div className="mb-4 transform transition-all duration-500 group-hover:scale-110">
            <div
              className="text-6xl transition-all duration-300 filter drop-shadow-lg"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
          </div>
          <h3 className="text-lg font-bold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors duration-300">
            {skill.name}
          </h3>
          <div
            className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg mb-2"
            style={{ backgroundColor: levelColors[skill.level] }}
          >
            {skill.level}
          </div>
          <div className="text-sm text-gray-400">{skill.experience}</div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-blue-900/90 to-gray-900/90 backdrop-blur-md border border-blue-300/20 p-4 shadow-xl overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="text-center mb-3">
              <div className="text-3xl mb-2" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold text-blue-300 mb-1">{skill.name}</h3>
              <div
                className="px-2 py-1 rounded-full text-xs font-semibold text-white mx-auto inline-block"
                style={{ backgroundColor: levelColors[skill.level] }}
              >
                {skill.level}
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-blue-300 font-medium">Proficiency</span>
                  <span className="text-xs text-gray-400">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.progress}%`,
                      background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                    }}
                  />
                </div>
              </div>

              {skill.projects && skill.projects.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-blue-300 mb-1">Related Projects:</h4>
                  <div className="space-y-1">
                    {skill.projects.slice(0, 2).map((project, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <FaExternalLinkAlt className="text-gray-400 text-xs flex-shrink-0" />
                        <span className="text-xs text-gray-300 truncate">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const SkillListItem = ({ skill }) => (
    <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-blue-300/20 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="text-4xl" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-blue-300">{skill.name}</h3>
            <div
              className="px-2 py-1 rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: levelColors[skill.level] }}
            >
              {skill.level}
            </div>
            <span className="text-sm text-gray-400">{skill.experience}</span>
          </div>
          <p className="text-sm text-gray-300 mb-3">{skill.description}</p>

          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-blue-300 font-medium">Proficiency</span>
              <span className="text-xs text-gray-400">{skill.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${skill.progress}%`,
                  background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                }}
              />
            </div>
          </div>

          {skill.projects && skill.projects.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-blue-300 mb-1">Related Projects:</h4>
              <div className="flex flex-wrap gap-2">
                {skill.projects.map((project, idx) => (
                  <span key={idx} className="text-xs bg-blue-900/30 text-blue-200 px-2 py-1 rounded-md border border-blue-300/20">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="py-20 px-6 text-white min-h-screen"
      style={{ background: 'linear-gradient(to right, #0d0d0d, #1a2b5a)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-xl sm:text-6xl font-bold mb-6 text-blue-400" style={{ fontSize: '3.3rem' }}>
            Skills & Technologies
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            A comprehensive showcase of my technical expertise and professional capabilities
          </p>

          
        </div>

        {/* Controls Section */}
{/* Controls Section */}
<div className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-blue-300/20 shadow-xl">
    
    {/* Stats Section - Removed */}

    {/* Filters and View Toggle */}
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
      
      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 flex-1">
        
        {/* Level Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400 font-medium">Filter by Level</label>
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-gray-700/60 border border-blue-300/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-300 min-w-[140px]"
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400 font-medium">Filter by Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-700/60 border border-blue-300/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-300 min-w-[180px]"
          >
            <option value="All">All Categories</option>
            {skillCategories.map(cat => (
              <option key={cat.title} value={cat.title}>{cat.title}</option>
            ))}
          </select>
        </div>

        {/* Reset Filters Button */}
        {(selectedLevel !== 'All' || selectedCategory !== 'All') && (
          <div className="flex flex-col gap-1">
            <label className="text-xs text-transparent font-medium">Reset</label>
            <button
              onClick={() => {
                setSelectedLevel('All');
                setSelectedCategory('All');
              }}
              className="bg-red-600/20 hover:bg-red-600/40 border border-red-400/20 hover:border-red-400/40 rounded-xl px-4 py-2 text-red-300 hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer transition-all duration-300 text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Skill Count Display */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="bg-gray-700/40 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-300/20 text-center">
          <div className="text-lg font-bold text-blue-400">
            {(selectedLevel !== 'All' || selectedCategory !== 'All') 
              ? filteredCategories.reduce((total, cat) => total + cat.skills.length, 0)
              : totalSkills
            }
          </div>
          <div className="text-xs text-gray-300">
            {(selectedLevel !== 'All' || selectedCategory !== 'All') ? 'Filtered Skills' : 'Total Skills'}
          </div>
        </div>

        <div className="bg-gray-700/40 backdrop-blur-md rounded-xl px-4 py-2 border border-blue-300/20 text-center">
          <div className="text-lg font-bold text-blue-400">
            {(selectedLevel !== 'All' || selectedCategory !== 'All') 
              ? filteredCategories.length
              : skillCategories.length
            }
          </div>
          <div className="text-xs text-gray-300">
            {(selectedLevel !== 'All' || selectedCategory !== 'All') ? 'Active Categories' : 'Total Categories'}
          </div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 font-medium text-center">View Mode</label>
        <div className="flex items-center gap-1 bg-gray-700/60 rounded-xl p-1 border border-blue-300/20">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-gray-600/30'
            }`}
            title="Grid View"
          >
            <FaTh className="text-sm" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all duration-300 ${
              viewMode === 'list'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-gray-600/30'
            }`}
            title="List View"
          >
            <FaList className="text-sm" />
          </button>
        </div>
      </div>
    </div>

    {/* Active Filters Display */}
    {(selectedLevel !== 'All' || selectedCategory !== 'All') && (
      <div className="mt-4 pt-4 border-t border-gray-600/30">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Active filters:</span>
          {selectedLevel !== 'All' && (
            <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-md text-xs border border-blue-400/20">
              Level: {selectedLevel}
            </span>
          )}
          {selectedCategory !== 'All' && (
            <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded-md text-xs border border-green-400/20">
              Category: {selectedCategory}
            </span>
          )}
        </div>
      </div>
    )}
  </div>
</div>

        {/* Skills Display */}
        <div className="space-y-10">
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 delay-${(categoryIndex + 1) * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="text-5xl">{category.emoji}</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-400">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-2">
                  {category.description}
                </p>
                <div className="text-sm text-gray-400">
                  {category.skills.length} skill{category.skills.length !== 1 ? 's' : ''}
                </div>
              </div>

              {/* Skills Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skill.name} skill={skill} skillIndex={skillIndex} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4 max-w-4xl mx-auto">
                  {category.skills.map((skill) => (
                    <SkillListItem key={skill.name} skill={skill} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <br></br><br></br><br></br><hr></hr>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .skill-card:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}