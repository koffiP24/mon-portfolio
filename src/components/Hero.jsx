import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-center mb-4">
            Je suis Koffi Philippe Assidjo
          </h2>
          <p className="text-gray-300 py-4 max-w-md text-center text-lg">
            Développeur Web passionné par la création d'expériences numériques
            élégantes et fonctionnelles.
          </p>

          <div className="flex space-x-4 my-6">
            <a
              href="https://github.com/koffiP24"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub size={30} />
            </a>
            <a href="mailto:assidjo1@gmail.com" className="hover:text-gray-300">
              <FaEnvelope size={30} />
            </a>
          </div>

          <Link
            to="projects"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
          >
            Voir mes projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
