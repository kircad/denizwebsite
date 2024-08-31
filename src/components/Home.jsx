import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MdArrowRightAlt, MdCode, MdScience } from 'react-icons/md';
import me from '../assets/headshot.jpg';

export const Home = () => {
  const controls = useAnimation();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      controls.start('visible');
    }
  }, [imageLoaded, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-br from-cyan-50 to-blue-100 overflow-hidden">
      <motion.div
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center h-full px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="relative w-full max-w-md lg:w-1/2 mb-12 lg:mb-0"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.img
            src={me}
            alt="Deniz Kirca"
            className="rounded-full w-full h-full object-cover relative z-10 shadow-2xl"
            variants={itemVariants}
            onLoad={() => setImageLoaded(true)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center lg:text-left h-full lg:ml-12 relative z-10"
          variants={itemVariants}
        >
          <motion.h2
            className="text-6xl sm:text-7xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Deniz!</span>
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-600 font-main py-4 max-w-md"
            variants={itemVariants}
          >
            I'm a senior studying{' '}
            <motion.span
              className="font-semibold text-cyan-600 inline-flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <MdScience className="mr-1" /> neuroscience
            </motion.span>{' '}
            and{' '}
            <motion.span
              className="font-semibold text-blue-600 inline-flex items-center"
              whileHover={{ scale: 1.1 }}
            >
              <MdCode className="mr-1" /> computer science
            </motion.span>{' '}
            at the University of Michigan.
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.a
              href={process.env.PUBLIC_URL + '/resume.pdf'}
              download="Deniz_Kirca_Resume.pdf"
              className="group inline-flex items-center px-6 py-3 mt-8 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{
                  type: "spring",
                  stiffness: 700,
                  damping: 30,
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.5
                }}
              >
                <MdArrowRightAlt size={25} />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;