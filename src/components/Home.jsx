'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import me from '../assets/headshot.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <motion.div
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-16 gap-10 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full max-w-[16rem] sm:max-w-[22rem] shrink-0 lg:w-1/3" variants={itemVariants}>
          <img
            src={me.src}
            width={me.width}
            height={me.height}
            alt="Deniz Kirca"
            className="rounded-full w-full h-auto object-cover shadow-xl"
          />
        </motion.div>

        <motion.div className="flex flex-col justify-center max-w-2xl" variants={itemVariants}>
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
            variants={itemVariants}
          >
            I build{' '}
            <span className="text-cyan-700">LLM inference infrastructure</span>.
          </motion.h1>
          <motion.p className="text-xl text-gray-600 font-main mb-4" variants={itemVariants}>
            I&rsquo;m a software engineer at MathWorks, working on the LLM
            platform behind MATLAB, Simulink, and Polyspace Copilot.
          </motion.p>
          <motion.p className="text-base text-gray-600 font-main" variants={itemVariants}>
            Before MathWorks, I studied computer science and neuroscience at the
            University of Michigan and spent four years doing computational
            neuroscience research.
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-4 mt-8" variants={itemVariants}>
            <motion.a
              href="https://github.com/kircad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 font-semibold text-white bg-cyan-700 rounded-full shadow hover:bg-cyan-800 transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Github size={20} className="mr-2" aria-hidden="true" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/deniz-kirca-b000b9190/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white text-gray-700 shadow hover:text-cyan-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Linkedin size={22} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
