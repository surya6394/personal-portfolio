import React from "react";
import SocialIcons from "./SocialIcons";
import {
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { MdDisplaySettings } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";

const About = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-16 py-16 gap-20">
        <div className="lg:w-[50%] text-left ">
          <div>
            <h1 className="font-[600] md:text-[40px] text-[28px] -mt-3">About Me</h1>
            <div className="md:text-[16px] text-[14px] font-[400] leading-[25px]">
              <p className="mb-2">
                I’m a Software Developer with over{" "}
                <b>3 years of professional experience</b> in building scalable,
                responsive, and user-centric web applications. I’m passionate
                about creating clean, intuitive, and efficient user interfaces
                that enhance user experiences and drive engagement.
              </p>
              <p className="mb-2">
                With a strong commitment to performance, usability, and
                maintainability, I enjoy turning complex ideas into elegant
                digital solutions. I thrive in collaborative, agile environments
                and take pride in delivering high-quality work that meets both
                user needs and business goals.
              </p>
              <p>
                My goal is to continue creating impactful digital experiences
                that align with business objectives while providing exceptional
                value to end users.
              </p>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold text-[20px]">Education</h2>
          </div>
          <div className="flex mt-1 gap-3">
            <FaGraduationCap size={30} className="text-orgClr" />
            <div>
              <h1 className="font-semibold text-[16px]">
                B-TECH in Computer Science and Engineering
              </h1>
              <h2 className="text-[14px]">
                Dr. APJ Abdul Kalam Technical University, Lucknow
              </h2>
              <h2 className="flex items-center gap-2 text-[14px]">
                <CiCalendar size={20} />
                2019 - 2023
              </h2>
            </div>
          </div>
          <div className="mt-3">
            <h2 className="font-semibold text-[20px]">Connect With Me</h2>
          </div>
          <div className="flex mt-1.5 ml-5">
            <SocialIcons />
          </div>
        </div>

        <div className="lg:w-[50%]">
          <div className="mb-5">
            <h2 className="font-semibold text-[20px]">Technical Skills</h2>
          </div>
          <div className="flex">
            <div className="lg:w-[50%] w-full">
              <div className="flex items-center gap-3 text-[16px] font-semibold">
                <FaCode className="text-orgClr" /> Languages
              </div>
              <ul className="-space-y-1 ml-5 text-orgClr list-disc list-inside">
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">JavaScript</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">TypeScript</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">C</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Java</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">HTML5</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">CSS3</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-[50%] w-full">
              <div className="flex items-center gap-3 text-[16px] font-semibold">
                <FaLayerGroup className="text-orgClr" /> Frameworks & Libraries
              </div>
              <ul className="-space-y-1 ml-5 text-orgClr list-disc list-inside">
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">React JS</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Vite JS</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Next JS</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Redux & Flux
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Tailwind CSS
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Bootstrap</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex mt-4">
            <div className="lg:w-[50%] w-full">
              <div className="flex items-center gap-3 text-[16px] font-semibold">
                <MdDisplaySettings className="text-orgClr" /> Web Dev Tools
              </div>
              <ul className="-space-y-1 ml-5 text-orgClr list-disc list-inside">
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Git</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">GitHub</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">JIRA</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">SonarQube</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">IntelliJ</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Postman</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-[50%] w-full">
              <div className="flex items-center gap-3 text-[16px] font-semibold">
                <FaDatabase className="text-orgClr" /> Database
              </div>
              <ul className="-space-y-1 ml-5 text-orgClr list-disc list-inside">
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">Mongo DB</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">MySQL</span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    REST APIs
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Microsoft Graph API
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Micro Frontends
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Design Patterns
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    System Design (HLD & LLD)
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Data Structures & Algorithms
                  </span>
                </li>
              </ul>
            </div>
          </div>


          <div className="mt-7">
            <div className="border-[1px] border-gray-200 rounded-md p-5 shadow space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[16px]">
                <FiGithub className="text-orgClr" /> Latest GitHub Contributions
              </div>
              <h2 className="text-[14px] text-gray-600 dark:text-gray-300">
                View my projects and contributions on GitHub
              </h2>
              <a
                href="https://github.com/surya6394"
                target="_blank"
                className="text-[14px] text-blue-700 hover:underline flex items-center gap-1"
              >
                Visit my GitHub profile <HiArrowLongRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
