import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis", formData);
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-20 bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Informations de contact */}
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Restons en contact</h3>
            <p className="text-gray-600 mb-6">
              Je suis toujours ouvert aux nouvelles opportunités et
              collaborations. N'hésitez pas à me contacter !
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-700" size={20} />
                <span><a href="mailto:assidjo1@gmail.com">assidjo1@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-gray-700" size={20} />
                <a
                  href="https://github.com/koffiP24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="md:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 duration-200"
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
