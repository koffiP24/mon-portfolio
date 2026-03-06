import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

// Données des projets
const projectsData = [
  {
    id: 1,
    title: "Gestion de Stock",
    description:
      "Application web complète de gestion de stock avec PHP/MySQL. Permet d'ajouter, modifier, supprimer des produits et de suivre les quantités en temps réel.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://github.com/koffiP24/Gestion-de-stock.git",
    demo: "#",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Gestion de Formations",
    description:
      "Application de gestion d'inscriptions, de paiements et de progression pédagogique avec gestion des rôles (Super Admin, Gestionnaire, Comptable).",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "#",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Portfolio React",
    description:
      "Ce portfolio que vous visitez actuellement ! Développé avec React, Tailwind CSS et Framer Motion pour une expérience utilisateur moderne.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "#",
    technologies: ["React", "Tailwind", "Framer Motion"],
    category: "Frontend",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description:
      "Plateforme e-commerce complète avec gestion des produits, panier, paiement et espace administrateur.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "#",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description:
      "Tableau de bord analytique avec visualisation de données, rapports et statistiques en temps réel.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "#",
    technologies: ["React", "Chart.js", "Firebase"],
    category: "Frontend",
  },
  {
    id: 6,
    title: "API RESTful",
    description:
      "API RESTful sécurisée avec authentification JWT, gestion des utilisateurs et documentation Swagger.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    github: "https://github.com",
    demo: "#",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Backend",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Projets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mes Réalisations
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents, chacun témoignant de
            ma passion pour le développement
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)" }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.category}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 rounded-full text-white hover:bg-cyan-500 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    aria-label="Voir sur GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500 rounded-full text-slate-900 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    style={{ transitionDelay: "50ms" }}
                    aria-label="Voir la démo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md hover:bg-slate-700 transition-colors"
                    >
                      <FaCode size={10} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom border gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/koffiP24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
          >
            Voir plus sur GitHub
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
