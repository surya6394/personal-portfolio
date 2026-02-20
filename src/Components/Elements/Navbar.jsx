import React, { useEffect, useState } from "react";
import img from "../images/LOGO.png";
import Description from "./Description";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import DSASection from "./DSASection";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Experience from "./Experiences/Experience";
import Projects from "./Projects/Projects";

const sections = ["home", "about", "experience", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLink = (id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => {
        setActiveId(id);
        setIsOpen(false); // close mobile menu on click
      }}
      className={`hover:text-gray-900 block md:flex dark:hover:text-gray-300 transition ${
        activeId === id ? "md:text-orange-500 text-gray-900 font-semibold" : ""
      }`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-75 
        ${scrolled ? "bg-white dark:bg-black shadow-md" : "bg-transparent"}`}
      >
        <div className="container flex justify-between items-center h-24 px-5 md:px-14 mx-auto">
          <div className="flex items-center text-2xl font-bold">
            <img src={img} alt="Profile image." width="30%" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {sections.map((id, index) => renderNavLink(id))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="top-7 right-8 p-2 rounded-full hover:scale-125 text-orgClr transition"
            >
              {isDark ? <MdDarkMode size={23} /> : <CiLight size={23} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex gap-5 items-center">
            <button
              onClick={() => setIsDark(!isDark)}
              className="top-7 right-8 p-2 rounded-full hover:scale-125 text-orgClr transition"
            >
              {isDark ? <MdDarkMode size={23} /> : <CiLight size={23} />}
            </button>
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden block bg-[#FD6F00] text-white py-10 px-10 space-y-5">
            {sections.map((id) => renderNavLink(id))}
          </div>
        )}
      </nav>

      <div
        id="home"
        className="md:pt-[120px] pt-[80px] bg-slate-50 dark:bg-gray-900"
      >
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
        <div id="dsa" className="bg-slate-200 dark:bg-slate-950">
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
        <div id="contact" className="dark:bg-slate-950">
          <div className="container px-5 md:px-14 md:py-10 mx-auto md:mt-14 mt-5 py-5">
            <h1 className="md:text-[40px] text-[28px] font-[600]">
              Contact Me
            </h1>
            <Contact />
          </div>
        </div>
      </div>
      <div id="footer" className="bg-slate-900 pt-14 dark:bg-gray-900">
        <div className="container px-5 md:px-24 mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
