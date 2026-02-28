import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Koffi Philippe Assidjo. Tous droits
          réservés.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Construit avec React et Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
