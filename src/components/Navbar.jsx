import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home", text: "Accueil" },
    { id: 2, link: "about", text: "À propos" },
    { id: 3, link: "skills", text: "Compétences" },
    { id: 4, link: "projects", text: "Projets" },
    { id: 5, link: "contact", text: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer group"
          >
            <h1 className="text-2xl font-bold cursor-pointer">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Koffi Philippe Assidjo
              </span>
            </h1>
            <p className="text-xs text-gray-500 mt-0.5 tracking-wider">
              Développeur Web
            </p>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ id, link, text }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  offset={-70}
                  className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium hover:bg-slate-800 rounded-lg transition-all duration-300 cursor-pointer"
                  activeClass="text-cyan-400 bg-slate-800"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:assidjo1@gmail.com"
              className="p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={handleClick}
            className="md:hidden p-2 text-white cursor-pointer hover:bg-slate-800 rounded-lg transition-all duration-300"
          >
            {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed right-0 top-0 w-full h-screen bg-slate-900/98 backdrop-blur-lg p-8 ease-in-out duration-300 z-40`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <div
              onClick={handleClick}
              className="p-3 text-white cursor-pointer hover:bg-slate-800 rounded-lg transition-all duration-300"
            >
              <FaTimes size={24} />
            </div>
          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-4">
            {links.map(({ id, link, text }) => (
              <li key={id}>
                <Link
                  onClick={handleClick}
                  to={link}
                  smooth
                  duration={500}
                  offset={-70}
                  className="block py-3 px-4 text-xl text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 cursor-pointer"
                  activeClass="text-cyan-400 bg-slate-800"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links (Mobile) */}
          <div className="mt-auto pt-8 border-t border-slate-800">
            <p className="text-gray-500 text-sm mb-4">Me suivre sur :</p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:assidjo1@gmail.com"
                className="p-3 bg-slate-800 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
