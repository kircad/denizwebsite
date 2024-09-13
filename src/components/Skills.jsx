import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import c from '../assets/c.png';
import reactImage from '../assets/react.png';
import cpp from '../assets/cpp.png';
import python from '../assets/python.png';
import git from '../assets/git.png';
import matlab from '../assets/matlab.png';
import conda from '../assets/conda.png';
import js from '../assets/js.png';
import css from '../assets/css.png';
import htmlImage from '../assets/html.png';
import linux from '../assets/linux.png';
import sql from '../assets/SQL.png';
import docker from '../assets/docker.png';
import cmake from '../assets/cmake.png';
import torch from '../assets/pytorch.png';
import pandas from '../assets/pandas.png';
import numPy from '../assets/numpy.png';
import opencv from '../assets/opencv.png';
import tensorflow from '../assets/tensorflow.png';
import flask from '../assets/flask.png';

const SkillCard = ({ skill, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(255,255,255)' }}
      className={`p-6 rounded-lg ${skill.style} bg-white dark:bg-gray-800 flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:rotate-3`}
    >
      <motion.img
        src={skill.src}
        alt={skill.title}
        className="w-16 h-16 object-contain"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.title}</p>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div name = "Skills">
      <motion.div name
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <motion.h3
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-white text-center"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  const languages = [
    { id: 1, src: python, title: 'Python', style: 'shadow-yellow-500' },
    { id: 2, src: cpp, title: 'C++', style: 'shadow-blue-600' },
    { id: 3, src: c, title: 'C', style: 'shadow-blue-600' },
    { id: 4, src: js, title: 'JavaScript', style: 'shadow-yellow-500' },
    { id: 5, src: matlab, title: 'MATLAB', style: 'shadow-orange-500' },
    { id: 6, src: sql, title: 'SQL', style: 'shadow-orange-500' },
    { id: 7, src: htmlImage, title: 'HTML', style: 'shadow-orange-500' },
    { id: 8, src: css, title: 'CSS', style: 'shadow-blue-500' },
  ];

  const toolsFrameworks = [
    { id: 9, src: reactImage, title: 'React', style: 'shadow-blue-600' },
    { id: 10, src: conda, title: 'Conda', style: 'shadow-green-500' },
    { id: 11, src: git, title: 'Git', style: 'shadow-orange-500' },
    { id: 12, src: linux, title: 'Linux', style: 'shadow-orange-500' },
    { id: 13, src: cmake, title: 'CMake', style: 'shadow-orange-500' },
    { id: 14, src: docker, title: 'Docker', style: 'shadow-blue-600' },
  ];

  const libraries = [
    { id: 15, src: numPy, title: 'NumPy', style: 'shadow-blue-600' },
    { id: 16, src: flask, title: 'Flask', style: 'shadow-green-500' },
    { id: 17, src: opencv, title: 'OpenCV', style: 'shadow-green-600' },
    { id: 18, src: torch, title: 'PyTorch', style: 'shadow-orange-500' },
    { id: 19, src: tensorflow, title: 'TensorFlow', style: 'shadow-orange-500' },
    { id: 20, src: pandas, title: 'Pandas', style: 'shadow-blue-500' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Tools & Frameworks" skills={toolsFrameworks} />
        <SkillSection title="Libraries" skills={libraries} />
      </div>
    </div>
  );
};

export default Skills;