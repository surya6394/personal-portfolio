import React from "react";
import img from "../images/LOGO.png";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <>
      <div>
        <div className="md:flex justify-between pb-10">
          <div className="mt-2">
            <img src={img} alt="Profile image." width="30%" />
            <p className="text-[14px] md:w-[450px] text-gray-100 ml-1 mt-1">
              Frontend Developer skilled in React, Redux, and Tailwind CSS.
              Passionate about building responsive, user-friendly, and
              accessible web applications.
            </p>
          </div>
          <div className="md:mt-0 mt-4">
            <h2 className="text-gray-100 md:text-[20px] text-[16px] font-semibold mb-2">
              Get in touch
            </h2>
            <SocialIcons />
          </div>
        </div>
        <hr className="opacity-25" />
        <div className="flex gap-2 justify-center text-xs text-gray-300 py-5 items-center">
          <a href="https://suryap-portfolio.netlify.app/" className="hover:text-orgClr">Surya-Portfolio</a>|
          <p>Surya Pratap © 2025</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
