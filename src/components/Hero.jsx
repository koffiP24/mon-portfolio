import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Disponible pour de nouvelles opportunités
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-gray-300">Je suis </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Koffi Philippe
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Assidjo
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Développeur Web passionné par la création d'expériences numériques{" "}
            <span className="text-cyan-400">élégantes</span> et{" "}
            <span className="text-purple-400">performantes</span>
          </p>

          {/* Description */}
          <p
            className="text-gray-500 mb-10 max-w-xl mx-auto animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            Spécialisé dans le développement d'applications web modernes avec
            React, Node.js et les dernières technologies. Je transforme vos
            idées en solutions numériques innovantes.
          </p>

          {/* Social Links */}
          <div
            className="flex justify-center gap-6 mb-10 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
              style={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0)" }}
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:assidjo1@gmail.com"
              className="p-3 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Voir mes projets
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 cursor-pointer"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Link
            to="about"
            smooth
            duration={500}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span className="text-sm uppercase tracking-widest">Découvrir</span>
            <div className="animate-bounce">
              <FaArrowDown size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
