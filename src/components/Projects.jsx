import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Projet 1',
      description: 'Description du projet 1. Une application web réalisée avec React et Node.js.',
      image: 'https://via.placeholder.com/300x200',
      github: 'https://github.com/ton-compte/projet1',
      demo: 'https://projet1.demo.com',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Description du projet 2. Un site e-commerce développé avec React et Tailwind.',
      image: 'https://via.placeholder.com/300x200',
      github: 'https://github.com/ton-compte/projet2',
      demo: 'https://projet2.demo.com',
      technologies: ['React', 'Tailwind', 'Firebase'],
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Description du projet 3. Une application mobile avec React Native.',
      image: 'https://via.placeholder.com/300x200',
      github: 'https://github.com/ton-compte/projet3',
      demo: 'https://projet3.demo.com',
      technologies: ['React Native', 'Expo', 'Redux'],
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group relative"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    Démo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;