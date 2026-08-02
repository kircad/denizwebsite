'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, ChevronDown, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const YouTubeFacade = ({ videoId, title, poster }) => {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef(null);

  // Hand keyboard focus to the player once it replaces the poster button.
  useEffect(() => {
    if (playing) iframeRef.current?.focus();
  }, [playing]);

  if (playing) {
    return (
      <iframe
        ref={iframeRef}
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={`${title} demo`}
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title} demo video`}
      className="absolute inset-0 w-full h-full group cursor-pointer"
    >
      <img
        src={poster}
        width={1280}
        height={720}
        loading="lazy"
        alt={`${title} demo preview`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-700 shadow-xl">
          <Play size={28} className="text-white ml-1" fill="currentColor" aria-hidden="true" />
        </span>
      </motion.div>
      <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
        Watch the demo
      </span>
    </button>
  );
};

const projects = [
  {
    title: 'LeapCode',
    description:
      'A technical interview platform where the candidate works through a real engineering problem together with an AI agent, instead of writing algorithms from memory on a whiteboard. Candidate and agent code runs in a Docker sandbox with no network access, dropped capabilities, and resource limits. The agent loop streams over SSE so the interviewer can see every tool call and how many tokens the candidate is using. Each problem has its own container image with pinned dependencies, and sessions are synced through server-side state with scoped JWTs.',
    skills: ['AI Agents', 'Docker', 'Sandboxing', 'SSE', 'Security'],
    video: 'epQ5_hgnAc8',
    poster: '/leapcode-poster.jpg',
  },
  {
    title: 'NeoSearch',
    description:
      'A distributed web search engine scaling past 100,000 pages. A Hadoop MapReduce pipeline computes TF-IDF across the crawl, combined with PageRank for result relevance, resolving queries in under a second. Deployed on AWS EC2 clusters with a React front end.',
    skills: ['Distributed Systems', 'MapReduce', 'AWS'],
  },
  {
    title: 'SideKick',
    description:
      'A Chrome extension that takes notes during meetings using the Gemini API — winner of the Google Spotlight Award for Workplace Integration at the Google x MHacks hackathon (2024). It can follow up to five participants at once and keeps track of who is engaged and who is contributing what.',
    skills: ['LLM APIs', 'Chrome Extension', 'Prompt Engineering'],
  },
  {
    title: 'NeuroZIP',
    description:
      'A Python package I wrote in my research lab for spike-sorting multiday electrophysiology recordings, which are usually too big to sort in a reasonable amount of time. It subsamples the recording using PCA/UMAP and k-means++/DBSCAN before sorting, so existing sorters run substantially faster without hurting accuracy. I presented it at the Society for Neuroscience conference in 2024.',
    skills: ['Python', 'Clustering', 'Big Data'],
  },
  {
    title: 'University of Michigan Brain Bee',
    description:
      'I started the UM Brain Bee, a neuroscience competition for Michigan high schoolers, and ran the first two of them. About 40 students helped organize and we drew over 250 attendees. The event is still held every year. I got into neuroscience because of a Brain Bee I competed in as a high school freshman, so this one matters to me.',
    skills: ['Community', 'Neuroscience'],
    website: 'https://sites.google.com/umich.edu/brainbee',
  },
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-display text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                project.video ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            >
              {project.video && (
                <div className="relative aspect-video md:aspect-auto md:h-full md:min-h-[16rem]">
                  <YouTubeFacade
                    videoId={project.video}
                    title={project.title}
                    poster={project.poster}
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p
                  className={`text-gray-600 mb-4 ${
                    project.video || expandedProject === index ? '' : 'line-clamp-3'
                  }`}
                >
                  {project.description}
                </p>
                {!project.video && (
                  <button
                    onClick={() =>
                      setExpandedProject(expandedProject === index ? null : index)
                    }
                    className="text-cyan-700 hover:text-cyan-900 transition-colors duration-200 flex items-center mb-4"
                  >
                    {expandedProject === index ? 'Read less' : 'Read more'}
                    <ChevronDown
                      className={`ml-1 transform transition-transform duration-200 ${
                        expandedProject === index ? 'rotate-180' : ''
                      }`}
                      size={16}
                      aria-hidden="true"
                    />
                  </button>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200"
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
                      className="text-cyan-700 hover:text-cyan-900 transition-colors duration-200 flex items-center"
                    >
                      <Github size={20} className="mr-2" aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:text-cyan-900 transition-colors duration-200 flex items-center"
                    >
                      <ExternalLink size={20} className="mr-2" aria-hidden="true" />
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
