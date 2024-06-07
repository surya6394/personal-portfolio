import React, { useState } from 'react';
import img from '../images/LOGO.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-[#000000]">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">
        <img src={img} alt="Profile image." width="60%" />
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#services" className="hover:text-gray-400">Projects</a>
          <a href="#services" className="hover:text-gray-400">Testimonials</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <button className='bg-[#FD6F00] text-[#FFFFFF] px-3 py-2 rounded-md'>
            Download CV
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block hover:text-gray-400">Home</a>
          <a href="#about" className="block hover:text-gray-400">About</a>
          <a href="#services" className="block hover:text-gray-400">Services</a>
          <a href="#contact" className="block hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
