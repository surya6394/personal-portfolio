import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 justify-center items-center mt-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/surya-pratap-31a7211a1/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/6394846889"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-green-500 transition duration-300"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:surya4929pratap@gmail.com"
        className="text-gray-600 hover:text-red-500 transition duration-300"
        aria-label="Email"
      >
        <FaEnvelope size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/surya6394"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition duration-300"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/_.s_u_r_y_a.___.p__n.__/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 transition duration-300"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
