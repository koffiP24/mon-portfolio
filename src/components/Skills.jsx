import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 size={50} className="text-orange-600" /> },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt size={50} className="text-blue-600" /> },
    { id: 3, name: 'JavaScript', icon: <FaJs size={50} className="text-yellow-500" /> },
    { id: 4, name: 'React', icon: <FaReact size={50} className="text-blue-400" /> },
    { id: 5, name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-600" /> },
    { id: 6, name: 'Tailwind', icon: <SiTailwindcss size={50} className="text-cyan-500" /> },
    { id: 7, name: 'MongoDB', icon: <SiMongodb size={50} className="text-green-500" /> },
    { id: 8, name: 'Git', icon: <FaGit size={50} className="text-orange-600" /> },
  ];

  return (
    <section id="skills" className="w-full py-20 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;