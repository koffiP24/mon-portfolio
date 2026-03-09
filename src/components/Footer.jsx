import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaFilePdf,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/koffiP24",
      label: "GitHub",
    },
    {
      icon: FaFilePdf,
      href: "/CV_3.pdf",
      label: "Mon CV",
    },
    {
      icon: FaEnvelope,
      href: "mailto:assidjo1@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Accueil", to: "home" },
    { label: "À propos", to: "about" },
    { label: "Compétences", to: "skills" },
    { label: "Projets", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Koffi Philippe Assidjo
            </h3>
            <p className="text-gray-400 mb-6">
              Développeur Web passionné par la création d'expériences numériques
              élégantes et performantes.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" size={16} />
                <a
                  href="mailto:assidjo1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  assidjo1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Disponible pour nouveaux projets
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Koffi Philippe Assidjo. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Construit avec{" "}
              <span className="text-red-500">
                <FaHeart size={12} />
              </span>{" "}
              utilisant
              <span className="text-cyan-400">React</span> et
              <span className="text-blue-500">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
