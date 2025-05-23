import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";

const Experience = () => {
  return (
    <>
      <div className="py-24">
          <div>
            <h1 className="font-[600] md:text-[40px] text-[28px] -mt-3">
              Work Experience
            </h1>
          </div>
          <div className="md:flex mt-5 w-full">
            <div className="md:w-[25%]">
              <h2 className="text-[20px] font-semibold">Frontend Developer</h2>
              <h2 className="font-[500] text-[16px] text-gray-800 dark:text-gray-200 mt-2.5">
                ClevDoc Platforms Inc.
              </h2>
              <h3 className="flex items-center gap-2 mt-1 text-[14px] text-gray-600 dark:text-gray-300">
                <CiLocationOn size={20} />
                <i>Gurgaon, Haryana</i>
              </h3>
              <h2 className="flex items-center gap-2 text-[14px] mt-1 text-gray-600 dark:text-gray-300">
                <CiCalendar size={20} />
                November 2023 - Present
              </h2>
            </div>
            <div className="w-[8%] relative border-l hidden sm:block border-gray-500">
              <a
                href="https://clevdoc.com/"
                target="_blank"
                className="absolute w-3.5 h-3.5 rounded-full border-2 border-orgClr bg-white z-10 hover:scale-125 ease-in-out duration-200 translate-y-5 -translate-x-[7px]"
              ></a>
            </div>

            <div className="md:w-[67%] md:ml-0 ml-5 md:mt-0 mt-3">
              <ul className="-space-y-1 text-orgClr list-disc list-outside">
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Developed responsive and <b>reusable UI components</b> using
                    React.js, Redux, and JavaScript, improving user experience
                    and maintainability.{" "}
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    <b>Optimized performance</b>, reducing page load time by 30%
                    and integrated <b>RESTful APIs</b> for real- time data
                    updates.{" "}
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Collaborated with UX/UI designers to{" "}
                    <b>enhance accessibility </b>
                    and worked in <b>Agile teams</b>, actively participating in
                    standups and code reviews.
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    <b>Ensured application stability</b> with{" "}
                    <b>unit testing</b> (Jest, Testing Lib.) and debugging to
                    maintain high <b>code quality</b>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex md:mt-8 w-full mt-12">
            <div className="md:w-[25%]">
              <h2 className="text-[20px] font-semibold">
                Software Engineer Trainee
              </h2>
              <h2 className="font-[500] text-[16px] text-gray-800 dark:text-gray-200 mt-2.5">
                KiwiTech
              </h2>
              <h3 className="flex items-center gap-2 mt-1 text-[14px] text-gray-600 dark:text-gray-300">
                <CiLocationOn size={20} />
                <i>Noida, Uttar Pradesh</i>
              </h3>
              <h2 className="flex items-center gap-2 text-[14px] mt-1 text-gray-600 dark:text-gray-300">
                <CiCalendar size={20} />
                December 2022 - August 2023
              </h2>
            </div>
            <div className="w-[8%] relative border-l hidden sm:block border-gray-500">
              <a
                href="https://clevdoc.com/"
                target="_blank"
                className="absolute w-3.5 h-3.5 rounded-full border-2 border-orgClr bg-white z-10 hover:scale-125 ease-in-out duration-200 translate-y-5 -translate-x-[7px]"
              ></a>
            </div>
            <div className="md:w-[67%] md:ml-0 ml-5 md:mt-0 mt-3">
              <ul className="-space-y-1 text-orgClr list-disc list-outside">
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Worked with the <b>ML team</b> to integrate real-time <b>JSON data
                    visualization</b>, implementing <b>interactive charts</b> using
                    ApexCharts/chart.js for better insights.{" "}
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Collaborated closely with <b>UX/UI</b> designers to ensure
                    <b>accessibility and seamless</b> user experience <b>across devices</b>.{" "}
                  </span>
                </li>
                <li className="text-orgClr text-[20px]">
                  <span className="text-gray-600 text-[16px] dark:text-gray-300">
                    Conducted thorough peer code reviews, providing <b>constructive
                    feedback</b> on code quality, performance, and security
                    identified and <b>resolved 30+ critical bugs</b> before code
                    deployment, improving <b>application stability</b>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Experience;
