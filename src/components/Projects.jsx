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
        'MPupil is a pupillary-reflex tracking device that uses pupil + iris diameter, ratio, and pupillary constriction rate to assist physicians in diagnosing neurological conditions ranging from concussions to Multiple Sclerosis.',
      skills: ['Python', 'OpenCV', 'Computer Vision'],
    },
    {
      title: 'HourlyCriticalityAnalyzer',
      description:
        'HourlyCriticalityAnalyzer is a data processing pipeline for the analysis of criticality in neural networks. The HourlyCriticalityAnalyzer workflow succeeded in extracting hourly neural criticality metrics from rat electrophysiological recordings, revealing a circadian rhythmicity behind neural criticality in the rat hippocampus, which will be presented as an abstract in the Society for Neurosciences upcoming annual conference in Washington DC.',
      skills: ['Python', 'Data Analysis', 'Electrophysiology'],
    },
    {
      title: 'Michigan Brain Bee',
      description:
        'The Brain Bee is an international neuroscience competition for high school students. Since competing at the National Brain Bee back when I was a freshman in high school is what inspired me to go into neuroscience, I decided to establish the University of Michigan\'s first Brain Bee chapter to give local students the opportunity to compete in the Brain Bee that I had. As founder and president of the Michigan Brain Bee Committee, I led five subcommittees totaling ~40 undergraduate/graduate students in hosting the first and second annual Michigan Brain Bees in 2022 and 2023, respectively, pulling over 250 total attendees and managing ~$10K in funding.',
      skills: ['Leadership', 'Communication', 'Project Management'],
      website: 'https://sites.google.com/umich.edu/brainbee',
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
    Leadership: 'bg-gradient-to-r from-orange-500 to-red-500',
    Communication: 'bg-gradient-to-r from-teal-500 to-green-500',
    'Project Management': 'bg-gradient-to-r from-blue-500 to-purple-500',
  };

  return (
    <div name="projects" className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto">
        <h1 className="text-4xl font-bold text-center py-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-500 mb-2 text-white">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4 text-white">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 mb-2 mr-2 rounded-full text-sm ${skillColors[skill]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {project.website && (
                  <div className="text-center mt-4 text-xl">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Click here to learn more!
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


