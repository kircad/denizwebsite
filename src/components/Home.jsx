import React from 'react';
import me from '../assets/headshot.jpg';
import { MdArrowRightAlt } from 'react-icons/md';

export const Home = () => {

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <img src={me} alt="" className="rounded-2xl mx-auto my-8 md:my-0 w-full md:w-2/3" />

        <div className="flex flex-col justify-center text-center md:text-left h-full ml-4">
          <h2 className="text-6xl sm:text-7xl font-bold text-white mb-4">
            Hi, I'm Deniz!
          </h2>
          <p className="text-2xl text-gray-500 font-main py-4 max-w-md">
            I'm a senior studying <span className="font-main text-white">neuroscience</span> and{' '}
            <span className="font-main text-white">computer science</span> at the University of Michigan.
          </p>
          <div>
            <a
              href={process.env.PUBLIC_URL + '/resume.pdf'}
              download="Deniz_Kirca_Resume.pdf"
              className="group text-white inline-block px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-lg font-main flex items-center transition-transform hover:translate-x-2 duration-300"
            >
              Resume <MdArrowRightAlt size={25} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
