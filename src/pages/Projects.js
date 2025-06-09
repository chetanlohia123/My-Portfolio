import React from 'react';

const projects = [
  {
    name: 'DevConnect',
    description: 'A social platform for developers to connect, share projects, and collaborate.',
    tech: 'React, Node.js, MongoDB, Express',
    link: '#'
  },
  {
    name: 'TaskFlow',
    description: 'Task and project management tool with real-time collaboration.',
    tech: 'Next.js, Firebase, Tailwind CSS',
    link: '#'
  },
  {
    name: 'Portfolio Generator',
    description: 'Create and customize developer portfolios with ease.',
    tech: 'React, Vite, Styled Components',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-24 bg-gray-50 text-gray-800">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">Tech: {project.tech}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
