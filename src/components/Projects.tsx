import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: 'https://github.com',
    live: 'https://project.com'
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization.',
    image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?auto=format&fit=crop&q=80&w=800',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com',
    live: 'https://project.com'
  },
  {
    title: 'Cloud Infrastructure Dashboard',
    description: 'Real-time monitoring dashboard for cloud resources.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    technologies: ['AWS', 'Vue.js', 'GraphQL', 'Docker'],
    github: 'https://github.com',
    live: 'https://project.com'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}