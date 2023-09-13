import React from 'react';
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

export const Skills = () => {
  const languages = [
    {
      id: 1,
      src: htmlImage,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: cpp,
      title: 'C++',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: c,
      title: 'C',
      style: 'shadow-blue-600',
    },
    {
      id: 6,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500',
    },
    {
      id: 7,
      src: matlab,
      title: 'MATLAB',
      style: 'shadow-orange-500',
    },
  ];

  const toolsFrameworks = [
    {
      id: 8,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 9,
      src: conda,
      title: 'Conda',
      style: 'shadow-green-500',
    },
    {
      id: 10,
      src: git,
      title: 'Git',
      style: 'shadow-orange-500',
    },
    {
      id: 11,
      src: linux,
      title: 'Linux',
      style: 'shadow-orange-500',
    },
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">Skills</p>
        </div>
        <div className="border-t-4 border-gray-500 py-1"></div> {/* Gray line */}
        <div>
          <p className="text-2xl font-main text-yellow-400 mb-2">Languages</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-4 px-4 sm:px-8">
          {languages.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-xl">{title}</p>
            </div>
          ))}
        </div>
        <br></br> <br></br>
        <div>
          <p className="text-2xl font-main text-blue-400 mb-2">Tools/Frameworks</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center py-4 px-4 sm:px-8">
          {toolsFrameworks.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
