import React from "react";
import { FaUser, FaCode, FaLightbulb, FaAward } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      label: "Projets réalisés",
      value: "5+",
      icon: FaCode,
      color: "text-cyan-400",
    },
    {
      label: "Années d'expérience",
      value: "1",
      icon: FaAward,
      color: "text-blue-500",
    },
    {
      label: "Technologies maîtrisées",
      value: "8+",
      icon: FaLightbulb,
      color: "text-purple-500",
    },
  ];

  const features = [
    {
      icon: FaUser,
      title: "Passionné",
      description:
        "Je suis passionné par le développement web et toujours eager d'apprendre de nouvelles technologies.",
    },
    {
      icon: FaCode,
      title: "Qualité",
      description:
        "Je m'efforce de deliver un code propre, maintenable et bien structuré.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Je propose des solutions créatives et innovantes pour répondre à vos besoins.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute -left-32 top-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute -right-32 top-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            À propos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Qui suis-je ?
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
            Un développeur web passionné prêt à transformer vos idées en réalité
            numérique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative">
                <img
                  src="/3.jpeg"
                  alt="Koffi Philippe Assidjo"
                  className="w-full h-auto rounded-2xl object-cover"
                  style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)" }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -bottom-6 -right-6 bg-slate-800 rounded-xl p-4"
                style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)" }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  1+
                </div>
                <div className="text-gray-400 text-sm">Année d'exp.</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Développeur Web &{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Créateur d'expériences numériques
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Bonjour ! Je suis Philippe, développeur web passionné basé en
                Côte d'Ivoire. Après avoir maîtrisé les bases du HTML, CSS et
                JavaScript, je me suis spécialisé dans l'écosystème{" "}
                <span className="text-cyan-400">React</span> et{" "}
                <span className="text-purple-400">Node.js</span>
                pour créer des solutions numériques performantes et modernes.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                J'aime transformer des problèmes complexes en solutions simples,
                élégantes et fonctionnelles. Mon objectif est de deliver des
                produits qui non seulement fonctionnent parfaitement, mais qui
                offrent aussi une expérience utilisateur exceptionnelle.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.3)" }}
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-slate-700 mb-3 ${feature.color}`}
                  >
                    <feature.icon size={24} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700"
                >
                  <stat.icon
                    className={`mx-auto mb-2 ${stat.color}`}
                    size={24}
                  />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
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
