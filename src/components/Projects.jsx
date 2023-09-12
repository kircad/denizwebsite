import React, { useState } from 'react';

export const Projects = () => {
  // Sample array of projects
  const [projects] = useState([
    {
      title: 'NeuroZIP',
      description:
        'NeuroZIP is a user-friendly algorithm for neuroscientists to visualize and compress large amounts of electrophysiology data, allowing electrophysiology recordings at timescales ranging from days to weeks to be successfully spikesorted, a major roadblock to studying how neurons interact in real-world environments. NeuroZIP is designed to work with most existing template-matching based spikesorting algorithms and uses a variety of clustering and dimensionality-reduction techniques to achieve up to ~20x compression of data up to 12 TB in size.',
      skills: ['MATLAB', 'Signal Processing', 'Clustering'],
    },
    {
      title: 'MPupil',
      description:
        'MPupil is a pupillary-reflex tracking device that uses pupil + iris diameter, ratio, and pupillary constriction rate to assist physicians in diagnosing neurological conditions ranging from concussions to Multiple Sclerosis. It leverages Computer Vision techniques.',
      skills: ['Python', 'OpenCV', 'Computer Vision'],
    },
    {
      title: 'HourlyCriticalityAnalyzer',
      description:
        'HourlyCriticalityAnalyzer is a data processing pipeline for the analysis of criticality in neural networks. The HourlyCriticalityAnalyzer workflow succeeded in extracting hourly neural criticality metrics from rat electrophysiological recordings, revealing a circadian rhythmicity behind neural criticality in the rat hippocampus, which will be presented as an abstract in the Society for Neurosciences upcoming annual conference in Washington DC. It involves Electrophysiology.',
      skills: ['Python', 'Data Analysis', 'Electrophysiology'],
    },
  ]);

  // Define a color mapping for skills
  const skillColors = {
    MATLAB: 'bg-gradient-to-r from-red-500 to-pink-500',
    'Signal Processing': 'bg-gradient-to-r from-cyan-500 to-blue-500',
    Clustering: 'bg-gradient-to-r from-green-500 to-lime-500',
    Python: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    OpenCV: 'bg-gradient-to-r from-yellow-500 to-amber-500',
    'Computer Vision': 'bg-gradient-to-r from-blue-500 to-cyan-500',
    'Data Analysis': 'bg-gradient-to-r from-pink-500 to-purple-500',
    Electrophysiology: 'bg-gradient-to-r from-lime-500 to-green-500',
  };

  return (
    <div name="projects" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 text-4xl font-bold inline border-b-4 border-gray-500">
          My Projects
        </div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg border border-gray-600 my-4 px-4"
          >
            <h2 className="text-2xl font-main text-blue-500 mb-2">
              {project.title}
            </h2>
            <p className="text-lg text-gray-300">{project.description}</p>
            <div className="mt-4">
              {project.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`inline-block text-black px-2 py-1 rounded-full text-sm mb-2 mr-2 ${skillColors[skill]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


