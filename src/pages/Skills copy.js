import React, { useState, useEffect } from 'react';
import {
  SiJavascript, SiPython, SiC, SiCplusplus, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiGithub, SiNodedotjs,
  SiAdobephotoshop, SiFigma, SiVisualstudio,
  SiCanva, SiGooglechrome,
  SiGit,
  SiSqlite,
} from 'react-icons/si';
import { FaLaptopCode, FaUsers, FaComments, FaClock, FaLightbulb, FaProjectDiagram, FaCode, FaTerminal, FaBug, FaFilter, FaSearch } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming & Development",
    emoji: "👨‍💻",
    description: "Core programming languages and development frameworks",
    skills: [
      { name: "C", icon: <SiC />, color: '#A8B9CC', level: 'Advanced' },
      { name: "Python", icon: <SiPython />, color: '#3776AB', level: 'Advanced' },
      { name: "C++", icon: <SiCplusplus />, color: '#00599C', level: 'Intermediate' },
      { name: "JavaScript", icon: <SiJavascript />, color: '#F7DF1E', level: 'Advanced' },
      { name: "React", icon: <SiReact />, color: '#61DAFB', level: 'Advanced' },
      { name: "Node.js", icon: <SiNodedotjs />, color: '#339933', level: 'Intermediate' },
      { name: "HTML & CSS", icon: <SiHtml5 />, color: '#E34F26', level: 'Expert' },
      { name: "Git & GitHub", icon: <SiGithub />, color: '#181717', level: 'Advanced' },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: '#06B6D4', level: 'Advanced' },
      { name: "SQL", icon: <SiSqlite />, color: '#003B57', level: 'Intermediate' },
      { name: "Data Structures & Algorithms", icon: <FaLaptopCode />, color: '#4A90E2', level: 'Advanced' },
      { name: "Object-Oriented Programming", icon: <FaProjectDiagram />, color: '#50E3C2', level: 'Advanced' },
      { name: "Debugging & Testing", icon: <FaBug />, color: '#C21325', level: 'Intermediate' },
      { name: "Responsive Web Development", icon: <FaCode />, color: '#FF6B6B', level: 'Advanced' },
    ]
  },
  {
    title: "UI/UX & Design",
    emoji: "🎨",
    description: "Creative design tools and user experience principles",
    skills: [
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, color: '#31A8FF', level: 'Advanced' },
      { name: "Figma", icon: <SiFigma />, color: '#F24E1E', level: 'Advanced' },
      { name: "UI/UX Design", icon: <FaLightbulb />, color: '#FFD93D', level: 'Intermediate' },
      { name: "Design Thinking", icon: <FaComments />, color: '#9013FE', level: 'Intermediate' },
      { name: "Color Theory", icon: <FaLightbulb />, color: '#FF4081', level: 'Intermediate' },
    ]
  },
  {
    title: "Tools & Platforms",
    emoji: "⚙️",
    description: "Development tools and productivity platforms",
    skills: [
      { name: "Canva", icon: <SiCanva />, color: '#00C4CC', level: 'Advanced' },
      { name: "GitHub", icon: <SiGithub />, color: '#181717', level: 'Advanced' },
      { name: "Command Line", icon: <FaTerminal />, color: '#4EAA25', level: 'Intermediate' },
      { name: "Chrome DevTools", icon: <SiGooglechrome />, color: '#4285F4', level: 'Advanced' },
    ]
  },
  {
    title: "Soft Skills",
    emoji: "🧩",
    description: "Professional and interpersonal capabilities",
    skills: [
      { name: "Problem Solving", icon: <FaLightbulb />, color: '#FFD700', level: 'Expert' },
      { name: "Leadership", icon: <FaUsers />, color: '#3F51B5', level: 'Advanced' },
      { name: "Team Collaboration", icon: <FaUsers />, color: '#00BCD4', level: 'Expert' },
      { name: "Communication", icon: <FaComments />, color: '#9C27B0', level: 'Advanced' },
      { name: "Adaptability", icon: <FaClock />, color: '#FF9800', level: 'Expert' },
      { name: "Critical Thinking", icon: <FaLightbulb />, color: '#8BC34A', level: 'Advanced' },
      { name: "Time Management", icon: <FaClock />, color: '#F44336', level: 'Advanced' },
      { name: "Project Planning", icon: <FaProjectDiagram />, color: '#4CAF50', level: 'Advanced' },
      { name: "Creativity", icon: <FaLightbulb />, color: '#E91E63', level: 'Expert' },
      { name: "Attention to Detail", icon: <FaLightbulb />, color: '#FF5722', level: 'Advanced' },
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
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
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = selectedLevel === 'All' || skill.level === selectedLevel;
      const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
      return matchesSearch && matchesLevel && matchesCategory;
    })
  })).filter(category => category.skills.length > 0);

  const totalSkills = allSkills.length;
  const uniqueLevels = [...new Set(allSkills.map(skill => skill.level))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            A comprehensive showcase of my technical expertise and professional capabilities
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400">{totalSkills}</div>
              <div className="text-sm text-gray-300">Total Skills</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-400">{skillCategories.length}</div>
              <div className="text-sm text-gray-300">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-2xl font-bold text-pink-400">{uniqueLevels.length}</div>
              <div className="text-sm text-gray-300">Skill Levels</div>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className={`max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="appearance-none bg-white/10 border border-white/20 rounded-2xl px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer transition-all duration-300"
                >
                  <option value="All" className="bg-gray-800">All Levels</option>
                  {uniqueLevels.map(level => (
                    <option key={level} value={level} className="bg-gray-800">{level}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white/10 border border-white/20 rounded-2xl px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer transition-all duration-300"
                >
                  <option value="All" className="bg-gray-800">All Categories</option>
                  {skillCategories.map(cat => (
                    <option key={cat.title} value={cat.title} className="bg-gray-800">{cat.title}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="max-w-7xl mx-auto space-y-20">
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className={`transition-all duration-1000 delay-${(categoryIndex + 1) * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="text-6xl">{category.emoji}</span>
                  <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  {category.skills.length} skill{category.skills.length !== 1 ? 's' : ''}
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative w-full max-w-[240px] h-[280px] perspective-1000"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {/* Card Container */}
                    <div className="skill-card relative w-full h-full transform-style-preserve-3d transition-all duration-700 hover:rotate-y-180">
                      {/* Front Side */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                        {/* Skill Icon */}
                        <div className="mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <div 
                            className="text-7xl transition-all duration-300 filter drop-shadow-lg"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {skill.name}
                        </h3>

                        {/* Level Badge */}
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                          style={{ backgroundColor: levelColors[skill.level] }}
                        >
                          {skill.level}
                        </div>

                        {/* Floating Particles */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`absolute w-2 h-2 rounded-full animate-float-${(i % 3) + 1}`}
                              style={{
                                backgroundColor: skill.color,
                                top: `${20 + Math.random() * 60}%`,
                                left: `${10 + Math.random() * 80}%`,
                                animationDelay: `${i * 200}ms`
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-white/20 p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                        <div className="text-4xl mb-4" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                          style={{ backgroundColor: levelColors[skill.level] }}
                        >
                          {skill.level}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Proficient in {skill.name} with {skill.level.toLowerCase()} level expertise
                        </p>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div 
                      className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-xl"
                      style={{ 
                        background: `linear-gradient(45deg, ${skill.color}40, transparent, ${skill.color}40)` 
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 shadow-2xl">
            <p className="text-xl font-medium text-gray-200 mb-2">
              Always learning, always growing 🚀
            </p>
            <p className="text-gray-400 text-sm">
              Committed to continuous improvement and innovation
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(-16px) translateX(0px); }
          75% { transform: translateY(-8px) translateX(-4px); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-12px) translateX(-6px); }
          66% { transform: translateY(-6px) translateX(6px); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-14px) translateX(-3px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 4s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 3.5s ease-in-out infinite;
        }

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

        .hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }

        .skill-card:hover {
          transform: rotateY(180deg);
        }

        /* Responsive grid adjustments */
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }

        @media (min-width: 640px) and (max-width: 768px) {
          .sm\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .md\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) and (max-width: 1280px) {
          .lg\\:grid-cols-4 {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .xl\\:grid-cols-5 {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}