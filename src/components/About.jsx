import React from 'react';
import maPhoto from '../images/Osirus jack.jpg'; 

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src={maPhoto} 
              alt="Philippe - Développeur Fullstack" 
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl border-4 border-cyan-400"
            />
          </div>
          <div className="md:w-2/3 text-gray-600">
            <p className="text-lg mb-4">
              Bonjour ! Je suis <span className="font-semibold text-cyan-600">Philippe</span>, développeur web en pleine ascension. 
              Après avoir maîtrisé les bases du HTML, CSS et JavaScript, je me suis spécialisé dans l'écosystème React et Node.js pour créer des solutions numériques performantes.
            </p>
            <p className="text-lg">
              J'aime transformer des problèmes complexes en solutions simples et élégantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;