'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

const email = 'kircad20@gmail.com';
const mailto = `mailto:${email}?subject=${encodeURIComponent('Hello from denizkirca.com')}`;

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is in view so the active pill follows scroll.
  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveLink(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape or on a click outside the nav.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, [isOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed w-full z-20 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-cyan-700 transition-colors duration-300"
          >
            Deniz Kirca
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeLink === id
                      ? 'text-cyan-700 bg-cyan-50'
                      : 'text-gray-600 hover:text-cyan-700 hover:bg-cyan-50'
                  }`}
                  onClick={() => setActiveLink(id)}
                >
                  {label}
                </a>
              ))}
              <a
                href={mailto}
                className="text-gray-600 hover:text-cyan-700 px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-cyan-700 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-gray-600 hover:text-cyan-700 hover:bg-cyan-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveLink(id);
                  }}
                >
                  {label}
                </a>
              ))}
              <a
                href={mailto}
                className="text-gray-600 hover:text-cyan-700 hover:bg-cyan-50 px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between"
              >
                Contact Me
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
