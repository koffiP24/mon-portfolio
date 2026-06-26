import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDatabase,
  FaServer,
  FaPalette,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiFigma,
  SiPython,
  SiDjango,
  SiPhp,
  SiMysql,
  SiSqlite,
  SiLaravel,
  SiFlutter,
  SiVuedotjs,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", level: 85 },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 80 },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: 70 },
    { name: "React", icon: FaReact, color: "text-cyan-400", level: 70 },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      level: 50,
    },
    { name: "VueJs", icon: SiVuedotjs, color: "text-green-500", level: 60 },
    { name: "Flutter", icon: SiFlutter, color: "text-cyan-400", level: 50 },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600", level: 75 },
    { name: "Python", icon: SiPython, color: "text-blue-500", level: 70 },
    { name: "Django", icon: SiDjango, color: "text-green-600", level: 65 },
    { name: "PHP", icon: SiPhp, color: "text-indigo-500", level: 45 },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500", level: 50 },
  ],
  Databases: [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: 60 },
    { name: "MySQL", icon: SiMysql, color: "text-orange-500", level: 70 },
    { name: "SQLite", icon: SiSqlite, color: "text-blue-400", level: 70 },
  ],
  Tools: [
    { name: "Git", icon: FaGit, color: "text-orange-600", level: 70 },
    { name: "Figma", icon: SiFigma, color: "text-purple-500", level: 45 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -10,
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const Skills = () => {
  const categoryIcons = {
    Frontend: FaPalette,
    Backend: FaServer,
    Databases: FaDatabase,
    Tools: FaGit,
  };

  const colorToBg = {
    "text-orange-500": "bg-orange-500",
    "text-blue-500": "bg-blue-500",
    "text-yellow-500": "bg-yellow-500",
    "text-cyan-400": "bg-cyan-400",
    "text-cyan-500": "bg-cyan-500",
    "text-green-500": "bg-green-500",
    "text-green-600": "bg-green-600",
    "text-indigo-500": "bg-indigo-500",
    "text-red-500": "bg-red-500",
    "text-blue-400": "bg-blue-400",
    "text-orange-600": "bg-orange-600",
    "text-purple-500": "bg-purple-500",
    "text-gray-300": "bg-gray-300",
  };

  const categoryColors = {
    Frontend: "from-cyan-500 to-blue-500",
    Backend: "from-green-500 to-emerald-500",
    Databases: "from-purple-500 to-violet-500",
    Tools: "from-orange-500 to-amber-500",
  };

  return (
    <section
      id="skills"
      className="w-full py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-slate-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30 mb-4 backdrop-blur-sm">
            Compétences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Technologies & Outils
          </h2>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            Les technologies que j'utilise pour créer des expériences web
            modernes et performantes
          </p>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills], catIndex) => {
          const CategoryIcon = categoryIcons[category];
          const gradientColors = categoryColors[category];

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${gradientColors} bg-opacity-20`}
                >
                  <CategoryIcon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-slate-700/50 group-hover:scale-110 transition-transform">
                          <skill.icon size={28} className={skill.color} />
                        </div>
                        <span className="text-xs font-semibold text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-3">
                        {skill.name}
                      </h4>

                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`${colorToBg[skill.color] || "bg-cyan-500"} h-full rounded-full`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Je suis également ouvert à l'apprentissage de nouvelles
            technologies.
            <span className="text-cyan-400 ml-2 font-semibold">
              toujours en train d'apprendre 🚀
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
