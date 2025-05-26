import React, { useState } from "react";
import img from "../images/self.png";
import Contact from "./Contact";
import Popup from "reactjs-popup";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

const Description = () => {
  const [form, setFrom] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SuryaPratap_CV.pdf"; // Path to your CV file in the public folder
    link.download = "SuryaPratap_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHire = () => {
    setFrom(true);
  };
  const onClose = () => {
    setFrom(false);
  };

  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-32 gap-10 md:mt-0 mt-10">
        <div className="md:w-[55%] text-left">
          <div className="">
            <h3 className="font-[600] md:text-[24px] text-[20px]">Hi I am </h3>
            <h2 className="font-[600] md:text-[32px] text-[24px] text-orgClr">
              Surya Pratap
            </h2>
            <div className="font-[700] md:text-[70px] text-[45px] md:leading-[90px] leading-[60px]">
              <h1>Frontend</h1>
              <h1 className="md:ml-[130px] ml-0">Developer</h1>
            </div>
            <p className="mt-3 md:text-[20px] text-[16px] font-[400] leading-[28px]">
            Experienced in developing high-performance, interactive web applications with a focus on clean, maintainable code and seamless user experiences. Adept at delivering scalable, reliable solutions across both client and server-side environments.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleHire}
                className="flex items-center gap-6 bg-orgClr hover:bg-orange-600 text-[#FFFFFF] px-4 mt-4 md:py-2.5 py-2 rounded-md"
              >
                Hire Me <FaArrowRightLong />
              </button>
              <button
                onClick={() => handleDownload()}
                className="flex items-center gap-3 text-orgClr bg-[#FFFFFF] hover:bg-orgClr hover:text-[#FFFFFF] border border-orgClr px-4 mt-4 md:py-2.5 py-2 rounded-md"
              >
                <IoDocumentTextOutline /> Resume
              </button>
            </div>
            <div className="md:flex gap-4 mt-3">
              <div className="flex items-center gap-1">
              <IoIosCall /><a href="https://wa.me/6394846889">+91-6394846889</a>
              </div>
              <div className="flex items-center gap-1">
              <CiMail /><a href="mailto:surya4929pratap@gmail.com">surya4929pratap@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[45%]">
          <img
            src={img}
            alt="Profile image."
            width={"70%"}
            className="text-[#fea059] drop-shadow-[0_0px_40px_#fea059] dark:drop-shadow-[0_0px_40px_#fff]"
          />
        </div>
      </div>

      <Popup
        open={form}
        modal
        closeOnDocumentClick={false}
        className="scale-105 ease-in-out duration-200 "
      >
        <div className="popup-content ease-jump duration-200 font-avenir fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-[#fff] md:w-[987px] w-[350px] mx-auto h-auto px-5 overflow-y-auto rounded-[14px]">
            <div className="flex justify-between pt-3 pb-5 md:pb-0">
              <h1 className="text-[24px] md:text-[28px] font-[500]">Get in touch</h1>
              <button
                type="submit"
                onClick={() => {
                  onClose();
                }}
                disabled={loading}
                className="text-xl font-bold"
              >
                X
              </button>
            </div>
            <Contact />
          </div>
        </div>
      </Popup>
    </>
  );
};

export default Description;
