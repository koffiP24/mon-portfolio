import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/src/images/Osirus jack.jpg"
              alt="ma photo"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-gray-600">
            <p className="text-lg mb-4">
              Bonjour ! Je suis Koffi Philippe Assidjo, développeur web basé.
              J'ai développé une passion pour la création de sites web réactifs
              et intuitifs.
            </p>
            <p className="text-lg">
              J'aime transformer des problèmes complexes en solutions simples et
              élégantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
