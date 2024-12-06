import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            DevPortfolio
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your@email.com" className="hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}