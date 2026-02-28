import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, link: 'home', text: 'Accueil' },
    { id: 2, link: 'about', text: 'À propos' },
    { id: 3, link: 'skills', text: 'Compétences' },
    { id: 4, link: 'projects', text: 'Projets' },
    { id: 5, link: 'contact', text: 'Contact' },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-gray-900 fixed'>
      <div>
        <h1 className='text-3xl font-signature ml-2'>Koffi Philippe Assidjo</h1>
      </div>

      {/* Menu desktop */}
      <ul className='hidden md:flex'>
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-white duration-200'
          >
            <Link to={link} smooth duration={500}>
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Menu mobile */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-gray-300'>
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              <Link onClick={handleClick} to={link} smooth duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;