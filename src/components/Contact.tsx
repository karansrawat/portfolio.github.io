import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <Mail className="mr-3" size={24} />
                your@email.com
              </a>
              <div className="flex space-x-6">
                <a
                  href="https://github.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}