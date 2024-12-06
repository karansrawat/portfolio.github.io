import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}