import React from "react";
import { FaUser, FaCode, FaLightbulb, FaAward } from "react-icons/fa";
// 1. IMPORTATION CRUCIALE : On importe l'image comme un module
import profilImg from "../images/Osirus jack.jpg"; 

const About = () => {
  const stats = [
    { label: "Projets réalisés", value: "5+", icon: FaCode, color: "text-cyan-400" },
    { label: "Années d'expérience", value: "1", icon: FaAward, color: "text-blue-500" },
    { label: "Technologies maîtrisées", value: "8+", icon: FaLightbulb, color: "text-purple-500" },
  ];

  const features = [
    { icon: FaUser, title: "Passionné", color: "text-cyan-400", description: "Je suis passionné par le développement web." },
    { icon: FaCode, title: "Qualité", color: "text-blue-500", description: "Je m'efforce de délivrer un code propre et maintenable." },
    { icon: FaLightbulb, title: "Innovation", color: "text-purple-500", description: "Je propose des solutions créatives." },
  ];

  return (
    <section id="about" className="w-full py-24 bg-slate-900 relative overflow-hidden">
      {/* Décorations de fond */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Section Image corrigée */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative">
                <img
                  src={profilImg} // 2. UTILISATION : On utilise la variable importée
                  alt="Koffi Philippe Assidjo"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-800 rounded-xl p-4 shadow-2xl border border-slate-700">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  1+
                </div>
                <div className="text-gray-400 text-sm">Année d'exp.</div>
              </div>
            </div>
          </div>

          {/* Section Contenu */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Développeur Web & <span className="text-gradient">Créateur d'expériences</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Bonjour ! Je suis Philippe, développeur web passionné basé en Côte d'Ivoire...
              </p>
            </div>

            {/* Feature Cards avec correction des icônes */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="card text-center p-4">
                  <div className={`inline-flex p-3 rounded-xl bg-slate-700/50 mb-3 ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                  <stat.icon className={`mx-auto mb-2 ${stat.color}`} size={24} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;