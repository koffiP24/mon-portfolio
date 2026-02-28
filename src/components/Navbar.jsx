import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  const links = [
    { id: 1, link: "home", text: "Accueil" },
    { id: 2, link: "about", text: "À propos" },
    { id: 3, link: "skills", text: "Compétences" },
    { id: 4, link: "projects", text: "Projets" },
    { id: 5, link: "contact", text: "Contact" },
  ];

  return (
    <div
      className={`fixed w-full h-20 z-50 transition-all duration-300 ${
        shadow ? "bg-gray-900 shadow-xl" : "bg-gray-900/80 backdrop-blur-sm"
      } text-white`}
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Koffi Philippe Assidjo
        </h1>
        <ul className="hidden md:flex">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="ml-10 text-sm uppercase hover:border-b-2 border-cyan-400 cursor-pointer"
            >
              <Link to={link} smooth duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={handleClick} className="md:hidden cursor-pointer">
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed right-0 top-0 w-[65%] sm:w-[45%] h-screen bg-gray-900/95 backdrop-blur-md p-10 ease-in duration-300`}
      >
        <div className="flex flex-col h-full justify-center items-center">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="list-none py-4 text-2xl hover:text-cyan-400 cursor-pointer"
            >
              <Link onClick={handleClick} to={link} smooth duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
