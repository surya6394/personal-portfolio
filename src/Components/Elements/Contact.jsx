import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import img from "../images/contact-img.jpg";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div>
        <div className="flex md:flex-row pb-10 pt-5 flex-col md:gap-10">
          <div className="w-full">
            <h1 className="text-[22px] md:text-[26px] font-semibold">
              Let’s Build Something Together
            </h1>
            <p className="text-[16px] mt-2">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello—I’d love to hear from you! I'm actively looking
              for frontend developer roles where I can create intuitive and
              engaging user experiences.
            </p>
            <div className="mt-7">
              <div className="flex items-center gap-10">
                <a href="mailto:surya4929pratap@gmail.com">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <SiGmail size={20} />
                  </div>
                </a>
                <div className="">
                  <h2 className="text-[16px] font-bold">Email</h2>
                  <a href="mailto:surya4929pratap@gmail.com" className="hover:text-blue-500">
                    surya4929pratap@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center mt-5 gap-10">
                <a href="tel:6394846889">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaPhoneAlt size={20} />
                  </div>
                </a>
                <div className="">
                  <h2 className="text-[16px] font-bold">Phone</h2>
                  <a href="tel:6394846889"  className="hover:text-blue-500">+91-6394846889</a>
                </div>
              </div>
              <div className="flex items-center mt-5 gap-10">
                <a href="https://www.linkedin.com/in/surya-pratap-31a7211a1/">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <FaLinkedinIn size={20} />
                  </div>
                </a>
                <div className="">
                  <h2 className="text-[16px] font-bold">Linked In</h2>
                  <a href="https://www.linkedin.com/in/surya-pratap-31a7211a1/"  className="hover:text-blue-500">
                    surya-pratap-31a7211a1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-full">
            <img src={img} alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
