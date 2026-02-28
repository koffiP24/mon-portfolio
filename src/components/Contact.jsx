import React, { useState } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis', formData);
    alert('Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full py-20 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Informations de contact */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Restons en contact</h3>
            <p className="text-gray-600 mb-6">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations.
              N'hésitez pas à me contacter !
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <FaEnvelope size={20} className="text-cyan-600" />
                <span>assidjo1@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaGithub size={20} className="text-cyan-600" />
                <a href="https://github.com/koffiP24" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 transition">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;