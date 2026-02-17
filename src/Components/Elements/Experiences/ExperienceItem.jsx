import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="md:flex mt-8 w-full">
      <div className="md:w-[25%]">
        <h2 className="text-[20px] font-semibold">{experience.role}</h2>

        <h2 className="font-[500] text-[16px] text-gray-800 dark:text-gray-200 mt-2.5">
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {experience.company}
          </a>
        </h2>

        <h3 className="flex items-center gap-2 mt-1 text-[14px] text-gray-600 dark:text-gray-300">
          <CiLocationOn size={20} />
          <i>{experience.location}</i>
        </h3>

        <h2 className="flex items-center gap-2 text-[14px] mt-1 text-gray-600 dark:text-gray-300">
          <CiCalendar size={20} />
          {experience.duration}
        </h2>
      </div>

      <div className="w-[8%] relative border-l hidden sm:block border-gray-500">
        <a
          href={experience.companyUrl}
          target="_blank"
          className="absolute w-3.5 h-3.5 rounded-full border-2 border-orgClr bg-white z-10 hover:scale-125 ease-in-out duration-200 translate-y-5 -translate-x-[7.5px]"
        ></a>
      </div>

      <div className="md:w-[67%] md:ml-0 ml-5 md:mt-0 mt-3">
        <ul className="space-y-2 list-disc list-outside text-gray-600 dark:text-gray-300">
          {experience.points.map((point, index) => (
            <li key={index} className="text-[16px]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
