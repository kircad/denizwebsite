import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [projects] = useState([
    {
      title: 'NeuroZIP',
      description: 'NeuroZIP is a user-friendly algorithm for neuroscientists to visualize and compress large amounts of electrophysiology data...',
      skills: ['MATLAB', 'Signal Processing', 'Clustering'],
      github: 'https://github.com/kircad/NeuroZIP',
    },
    {
      title: 'SideKick',
      description: 'SideKick is a project focused on... [Add your description here]',
      skills: ['MATLAB', 'Signal Processing', 'Clustering'],
      github: 'https://github.com/kircad/SideKick',
    },
    {
      title: 'MPupil',
      description: 'MPupil is a pupillary-reflex tracking device that uses pupil + iris diameter, ratio, and pupillary constriction rate to assist physicians in diagnosing neurological conditions...',
      skills: ['Python', 'OpenCV', 'Computer Vision'],
    },
    // Add more projects here...
  ]);

  const [expandedProject, setExpandedProject] = useState(null);

  const skillColors = {
    MATLAB: 'bg-blue-100 text-blue-800',
    'Signal Processing': 'bg-green-100 text-green-800',
    Clustering: 'bg-yellow-100 text-yellow-800',
    Python: 'bg-purple-100 text-purple-800',
    OpenCV: 'bg-red-100 text-red-800',
    'Computer Vision': 'bg-indigo-100 text-indigo-800',
    'Data Analysis': 'bg-pink-100 text-pink-800',
    Electrophysiology: 'bg-teal-100 text-teal-800',
    Leadership: 'bg-orange-100 text-orange-800',
    Communication: 'bg-cyan-100 text-cyan-800',
    'Project Management': 'bg-lime-100 text-lime-800',
  };

  return (
    <div name="projects" className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h2>
                <motion.div 
                  className={`text-gray-600 mb-4 ${expandedProject === index ? '' : 'line-clamp-3'}`}
                  initial={false}
                  animate={{ height: expandedProject === index ? 'auto' : '4.5em' }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.div>
                <button 
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center mb-4"
                >
                  {expandedProject === index ? 'Read less' : 'Read more'}
                  <ChevronDown className={`ml-1 transform transition-transform duration-200 ${expandedProject === index ? 'rotate-180' : ''}`} size={16} />
                </button>
                <div className="flex flex-wrap mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 mb-2 mr-2 rounded-full text-xs font-medium ${skillColors[skill]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start space-x-4 items-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                    >
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
