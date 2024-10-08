import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [projects] = useState([
    {
      title: 'NeuroZIP',
      description: "NeuroZIP is an innovative Python package designed to address the critical challenge of spike-sorting in large-scale, multiday electrophysiology datasets. NeuroZIP significantly enhances the efficiency of contemporary spike-sorting algorithms, achieving up to a 40% increase in processing speed while maintaining high accuracy. This performance increase is accomplished through a combination of dimensionality reduction techniques (PCA and UMAP) and unsupervised machine learning algorithms (k-means++ and DBSCAN) to dynamically subsample electrophysiology recordings. The package's effectiveness has been rigorously validated using a custom-built Python testing suite, which evaluates performance across various dataset sizes and complexities. I will be presenting NeuroZIP's capabilities and its potential to accelerate neuroscience research at the 2024 Society for Neuroscience conference in Chicago this October.",
      skills: ['MATLAB', 'Python', 'Agile Development', 'Clustering', 'Big Data'],
      github: 'https://github.com/kircad/NeuroZIP',
    },
    {
      title: 'SideKick',
      description: 'SideKick is a Chrome extension utilizing the Gemini 1.5 API for real-time sentiment analysis. SideKick can track emotional states, engagement, and knowledge transfer of up to five meeting participants. Winner of the Google Spotlight Award for Workplace Integration at MHacks x Google 2024',
      skills: ['Python', 'API', 'Prompt Engineering'],
      github: 'https://github.com/kircad/SideKick',
    },
    {
      title: 'MPupil',
      description: 'MPupil is a tool for physicians to help diagnose neurological conditions ranging from concussions to Multiple Sclerosis. I leveraged computer vision tools from the OpenCV library to create a pupil tracker that can detect pupil-to-iris ratio with an accuracy of 95%.',
      skills: ['Python', 'OpenCV', 'Computer Vision'],
    },
    {
      title: 'University of Michigan Brain Bee',
      description: 'As the founding president of the Michigan Brain Bee Committee, I spearheaded the organization of the inaugural and second annual Michigan Brain Bees in 2022 and 2023, pulling over 250 attendees. Leading a team of 40 students across five subcommittees, I managed a $5,000 annual budget, coordinated with university officials, and oversaw all aspects of event planning and execution. My role involved strategic outreach, including drafting communications to hundreds of high school teachers and personally presenting to science classrooms across Michigan. These efforts culminated in events attracting over 250 attendees, providing valuable neuroscience education and engagement opportunities for local high school students. This initiative was particularly meaningful to me, as participating in a Brain Bee as a high school freshman in 2016 inspired my own pursuit of neuroscience.',
      skills: ['Leadership', 'Communication', 'Project Management'],
      website: 'https://sites.google.com/umich.edu/brainbee',
    },
    {
      title: 'HourlyCriticalityAnalyzer',
      description:
        'I built a data processing pipeline in Python and MATLAB to extract novel hourly neural criticality metrics from electrophysiology recordings of rat hippocampus, revealing circadian rhythmicity underlying critical dynamics in rat hippocampus. I presented the data from my work at the 2023 Society for Neuroscience annual conference in Washington DC.',
      skills: ['Python', 'Data Analysis', 'Electrophysiology'],
    },
    // Add more projects here...
  ]);

  const [expandedProject, setExpandedProject] = useState(null);

  const skillColors = {
    MATLAB: 'bg-blue-100 text-blue-800',
    'Big Data': 'bg-green-100 text-green-800',
    Clustering: 'bg-yellow-100 text-yellow-800',
    Python: 'bg-purple-100 text-purple-800',
    OpenCV: 'bg-red-100 text-red-800',
    'Computer Vision': 'bg-indigo-100 text-indigo-800',
    'Data Analysis': 'bg-pink-100 text-pink-800',
    Electrophysiology: 'bg-teal-100 text-teal-800',
    Leadership: 'bg-orange-100 text-orange-800',
    Communication: 'bg-cyan-100 text-cyan-800',
    'Project Management': 'bg-lime-100 text-lime-800',
    'Agile Development': 'bg-amber-100 text-amber-800',
    'Prompt Engineering': 'bg-violet-100 text-violet-800',
    API: 'bg-fuchsia-100 text-fuchsia-800'
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
        <motion.p
          className="text-xl text-center mb-16 text-gray-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Project demos coming soon!
        </motion.p>
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
