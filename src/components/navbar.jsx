import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, ChevronRight } from 'lucide-react';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const email = 'kirca@umich.edu';

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'Skills', label: 'Skills' },
    { id: 3, link: 'projects', label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed w-full z-20 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-signature text-gray-800 hover:text-indigo-600 transition-colors duration-300">
              Deniz Kirca
            </h1>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ id, link, label }) => (
                <Link
                  key={id}
                  to={link}
                  smooth
                  duration={500}
                  className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ${
                    activeLink === link
                      ? 'text-indigo-600 bg-indigo-100'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                  onClick={() => setActiveLink(link)}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.span>
                </Link>
              ))}
              <motion.a
                href={`mailto:${email}`}
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </motion.a>
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {links.map(({ id, link, label }) => (
                <motion.div
                  key={id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, delay: id * 0.1 }}
                >
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors flex items-center justify-between"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveLink(link);
                    }}
                  >
                    {label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={`mailto:${email}`}
                className="text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors flex items-center justify-between"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, delay: links.length * 0.1 }}
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;