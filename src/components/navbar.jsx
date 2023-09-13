import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const email = 'kirca@umich.edu'; 

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'skills',
    },
    {
      id: 3,
      link: 'projects',
    },
  ];

  return (
    <div className="text-xl font-main flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature"> Deniz Kirca</h1>
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
            >
              <Link to = {link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${email}`} // Use the mailto scheme to open the default email client
          className="px-4 cursor-pointer capitalize bold-text text-gray-500 hover:scale-110 duration-200"
        >
          Contact Me
        </a>

      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray 500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
