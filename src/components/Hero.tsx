import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Alex</span> 👋
              <br />
              Software Engineer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting elegant solutions to complex problems with clean, maintainable code.
              Specialized in full-stack development and cloud architecture.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}