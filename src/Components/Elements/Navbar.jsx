import React, { useEffect, useState } from "react";
import img from "../images/LOGO.png";
import Description from "./Description";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import DSASection from "./DSASection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <nav className="text-[#ffffff] bg-gray-400">
        <div className="container flex justify-between items-center h-24 px-5 md:px-14 mx-auto">
          <div className="flex items-center text-2xl font-bold">
            <img src={img} alt="Profile image." width="60%" />
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#experience" className="hover:text-gray-900">
              Experience
            </a>
            {/* <a href="#services" className="hover:text-gray-900">
              Services
            </a> */}
            <a href="#projects" className="hover:text-gray-900">
              Projects
            </a>
            {/* <a href="#reviews" className="hover:text-gray-900">
              Testimonials
            </a> */}
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
            {/* <button
              onClick={() => setIsDark(!isDark)}
              className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:scale-105 transition"
            >
              {isDark ? "🌙" : "☀️"}
            </button> */}
          </div>
          <div className="md:hidden flex gap-5 items-center">
            {/* <button
              // onClick={() => handleDownload()}
              className="bg-[#FD6F00] text-[#FFFFFF] px-2 py-1.5 text-[14px] rounded-md"
            >
              Download CV
            </button> */}
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#FD6F00] text-white py-10 space-y-5">
            <a href="#home" className="block hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="block hover:text-gray-400">
              About
            </a>
            <a href="#services" className="block hover:text-gray-400">
              Services
            </a>
            <a href="#projects" className="block hover:text-gray-400">
              Projects
            </a>
            <a href="#reviews" className="block hover:text-gray-400">
              Testimonials
            </a>
            <a href="#contact" className="block hover:text-gray-400">
              Contact
            </a>
          </div>
        )}
      </nav>

      <div>
        <div className="container px-5 md:px-14 mx-auto">
          <Description />
        </div>
        <div id="about" className="bg-slate-100 dark:bg-slate-950">
          <div className="container px-5 md:px-14 mx-auto">
            <About />
          </div>
        </div>
        <div id="experience" className="bg-slate-50 dark:bg-gray-900">
          <div className="container px-5 md:px-14 mx-auto">
            <Experience />
          </div>
        </div>
        {/* <div id="services">
          <Services />
        </div> */}
        <div id="projects" className="bg-slate-200 dark:bg-slate-950">
          <div className="container px-5 md:px-14 mx-auto">
            <DSASection />
          </div>
        </div>
        <div id="projects" className="bg-slate-100 py-14 dark:bg-gray-900">
          <div className="container px-5 md:px-14 mx-auto">
            <Projects />
          </div>
        </div>
        {/* <div id="reviews">
          <Testimonials />
        </div> */}
        <div id="contact">
          <div className="mt-14">
            <h1 className="md:text-[50px] text-[36px] border-b-2 relative z-10 bg-[#fff] w-max mx-auto px-2 py-2 border-orgClr font-[600]">
              Contact
            </h1>
          </div>
          <Contact />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
