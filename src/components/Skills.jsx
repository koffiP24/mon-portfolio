import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFigma, SiFirebase } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      level: 95,
    },
    {
      id: 2,
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      level: 90,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      level: 85,
    },
    {
      id: 4,
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      level: 90,
    },
    {
      id: 5,
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-600",
      bg: "bg-green-600/10",
      level: 80,
    },
    {
      id: 6,
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      level: 92,
    },
    {
      id: 7,
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
      bg: "bg-green-500/10",
      level: 75,
    },
    {
      id: 8,
      name: "Git",
      icon: FaGit,
      color: "text-orange-600",
      bg: "bg-orange-600/10",
      level: 88,
    },
    {
      id: 9,
      name: "Figma",
      icon: SiFigma,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      level: 70,
    },
    {
      id: 10,
      name: "Firebase",
      icon: SiFirebase,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      level: 72,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-24 bg-slate-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Compétences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Technologies & Outils
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Les technologies que j'utilise pour créer des expériences web
            modernes et performantes
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)" }}
            >
              {/* Background icon */}
              <div
                className={`absolute -bottom-4 -right-4 text-8xl opacity-5 ${skill.color} transition-transform group-hover:scale-110`}
              >
                <skill.icon />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl ${skill.bg} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <skill.icon size={32} className={skill.color} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                  <div
                    className={`h-full rounded-full ${skill.bg.replace("/10", "")}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <span className="text-xs text-gray-500">{skill.level}%</span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Je suis également ouvert à l'apprentissage de nouvelles
            technologies.
            <span className="text-cyan-400 ml-2">always learning 🚀</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
