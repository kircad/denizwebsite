import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const email = 'kircad20@gmail.com';

export const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© 2026 Deniz Kirca</p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${email}?subject=${encodeURIComponent('Hello from denizkirca.com')}`}
            className="inline-flex items-center gap-2 hover:text-cyan-700 transition-colors"
          >
            <Mail size={16} aria-hidden="true" />
            {email}
          </a>
          <a
            href="https://github.com/kircad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-700 transition-colors"
          >
            <Github size={18} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/deniz-kirca-b000b9190/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-700 transition-colors"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
