import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const DSASection = () => {
  return (
    <>
      <section className="pt-12 pb-16 px-6 ">
        <div className="max-w-8xl mx-auto">
          <h2 className="md:text-[40px] text-[28px] font-bold text-center text-gray-800 dark:text-white mb-6">
            Sharpening Logic with DSA
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            I actively practice data structures and algorithms to enhance my
            problem-solving skills, logical thinking, and coding efficiency.
            Here are the platforms I engage with regularly:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* LeetCode Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl dark:shadow-orange-100 dark:hover:shadow-orange-300 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  LeetCode
                </h3>
                <a
                  href="https://leetcode.com/u/Surya-63/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orgClr hover:underline flex items-center gap-1"
                >
                  View Profile <FaExternalLinkAlt size={14} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Practicing problems across arrays, trees, DP, and more. Tracking
                streaks and contest rankings.
              </p>
            </div>

            {/* Coding Ninjas Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl dark:shadow-orange-100 dark:hover:shadow-orange-300  transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Coding Ninjas
                </h3>
                <a
                  href="https://www.naukri.com/code360/profile/Surya6394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orgClr hover:underline flex items-center gap-1"
                >
                  View Profile <FaExternalLinkAlt size={14} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Solving structured topic-wise problems and improving time/space
                complexity understanding.
              </p>
            </div>

            {/* GeeksForGeeks Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl dark:shadow-orange-100 dark:hover:shadow-orange-300 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  GeeksforGeeks
                </h3>
                <a
                  href="https://www.geeksforgeeks.org/profile/surya492von8?tab=activity "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orgClr hover:underline flex items-center gap-1"
                >
                  View Profile <FaExternalLinkAlt size={14} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Practicing DSA concepts, solving coding challenges, and strengthening
                problem-solving skills through topic-wise learning and competitive
                programming exercises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DSASection;
