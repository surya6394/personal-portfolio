import React from 'react'
import Project1 from '../images/Project_1.png'
import Project2 from '../images/Project_2.png'
import Project3 from '../images/Project_3.png'

const Projects = () => {
  return (
    <>
      <div>
        <div>
          <section className='max-w-screen-xl mx-auto relative'>
            <h1 className='md:text-[50px] text-[36px] border-b-2 relative z-10 bg-[#fff] w-max mx-auto px-4 py-2 border-orgClr font-[600]'>
              My Projects
            </h1>
            {/* <p className='text-[21px] font-[400] mx-44 my-5'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p> */}
            {/* Project 1 */}
            <div className='flex flex-col sm:flex-row gap-4 mt-24 sm:gap-[80px] items-center sm:mt-20 relative'>
              <div className='h-[2px] left-[20%] right-1/2 bg-orgClr absolute top-1/2 hidden sm:block'></div>
              <a
                href='https://clevdoc.com/'
                target='_blank'
                className='w-4 h-4 rounded-full border-[3px] hidden sm:block border-orgClr absolute left-1/2 -translate-x-1/2 bg-[#fff] z-10 hover:scale-125 ease-in-out duration-200'
              ></a>
              <a
                href='https://clevdoc.com/'
                target='_blank'
                className='flex relative w-full mb-5'
              >
                <div className='relative group hover:scale-105 ease-in-out sm:hover:scale-105  duration-200'>
                  <span className="flex group-hover:-top-14 ease-jump duration-200 absolute top-0 left-1/2 -translate-x-1/2 bg-[#0B1E59] text-[#FFFFFF] w-max px-4 py-2 rounded gap-1 items-center after:content-[''] after:w-5 after:h-5 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                    ClevDoc
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-external-link'
                    >
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </span>
                  <img
                    className='max-w-[300px] mr-auto relative drop-shadow-[0_0px_60px_#0B1E59]'
                    src={Project2}
                    alt=''
                  />
                </div>
              </a>
              <div className='w-full'>
                <h3 className='text-[#0B1E59] text-left font-bold md:text-[40px] text-[30px]'>
                  ClevDoc Banking
                </h3>
                <h2 className='text-[#0B1E59] text-left text-lg'>
                  (Banking Loan Management)
                </h2>
                <p className='text-justify mt-2'>
                  Built a comprehensive loan management system from scratch with
                  advanced features and seamless UI.
                </p>

                <ul className='flex flex-wrap gap-2 mt-2'>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #react.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #tailwind css
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #node.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #swiper.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #mongoDB
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #mongoose
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #css
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #javascript
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #figma
                  </li>
                </ul>
              </div>
            </div>
            {/* Project 2 */}
            <div className='flex flex-col sm:flex-row gap-4 md:mt-24 sm:gap-[80px] items-center mt-20 relative'>
              <div className='w-full'>
                <h3 className='text-[rgba(16,16,16,1)] text-right font-bold md:text-[40px] text-[30px]'>
                  HitWeb
                </h3>
                <h2 className='text-[rgba(16,16,16,1)] text-lg text-right'>
                  (IT Consultancy and Services Startup)
                </h2>
                <p className='text-justify mt-2'>
                  Being a lead developer, revamped the site to a highly
                  responsive, and interactive website. Created new features and
                  pages. Worked as a team with other team member and ux
                  designer.
                </p>

                <ul className='flex flex-wrap gap-2 mt-2'>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #react.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #tailwind css
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #node.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #swiper.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #mongoDB
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #mongoose
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #css
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #javascript
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #figma
                  </li>
                </ul>
              </div>
              <div className='h-[2px] left-1/2 right-[20%] bg-orgClr absolute top-1/2 hidden sm:block'></div>
              <a
                href='https://clevdoc.com/'
                target='_blank'
                className='w-4 h-4 rounded-full hidden sm:block border-[3px] border-orgClr absolute left-1/2 -translate-x-1/2 bg-[#fff] z-10 hover:scale-125 ease-in-out duration-200'
              ></a>
              <a href='#' className='flex w-full justify-end mt-10'>
                <div className='relative group hover:scale-105 ease-in-out duration-200 sm:hover:scale-105'>
                  <span className="flex group-hover:-top-14 ease-jump duration-200 absolute top-0 left-1/2 -translate-x-1/2 bg-[rgba(16,16,16,1)] text-[#FFFFFF] w-max px-4 py-2 rounded gap-1 items-center after:content-[''] after:w-5 after:h-5 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                    HitWeb
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-external-link'
                    >
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </span>
                  <img
                    className='max-w-[300px] mr-auto relative drop-shadow-[0_0px_60px_rgba(16,16,16,1)]'
                    src={Project3}
                    alt=''
                  />
                </div>
              </a>
            </div>
            {/* Project 3 */}
            <div className='flex flex-col sm:flex-row gap-4 md:mt-24 mt-32 sm:gap-[80px] items-center relative'>
              <div className='h-[2px] left-[20%] right-1/2 bg-orgClr absolute top-1/2 hidden sm:block'></div>
              <a
                href='https://surya6394.github.io/Itax-easy-website/'
                target='_blank'
                className='w-4 h-4 hidden sm:block rounded-full border-[3px] border-orgClr absolute left-1/2 -translate-x-1/2 bg-[#fff] z-10 hover:scale-125 ease-in-out duration-200'
              ></a>
              <a
                href='https://surya6394.github.io/Itax-easy-website/'
                target='_blank'
                className='flex w-full mb-5'
              >
                <div className='relative group hover:scale-105 ease-in-out duration-200 sm:hover:scale-105'>
                  <span className="flex group-hover:-top-14 ease-jump duration-200 absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 text-[#FFFFFF] w-max px-4 py-2 rounded gap-1 items-center after:content-[''] after:w-5 after:h-5 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                    Itax-Easy
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-external-link'
                    >
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </span>
                  <img
                    className='max-w-[300px] mr-auto relative drop-shadow-[0_0px_60px_#3b82f6]'
                    src={Project1}
                    alt=''
                  />
                </div>
              </a>
              <div className='w-full'>
                <h3 className='text-blue-500 text-left font-bold md:text-[40px] text-[30px]'>
                  Itax-Easy
                </h3>
                <h2 className='text-blue-500 text-left text-lg'>
                  (Software Development Agency)
                </h2>
                <p className='text-justify mt-2'>
                  Developed a full-fledged software development platform
                  focusing on user needs and efficiency. Built the complete site
                  from scratch.
                </p>

                <ul className='flex flex-wrap gap-2 mt-2'>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #react.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #tailwind css
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #node.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #swiper.js
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #mongoDB
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #mongoose
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #css
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #javascript
                  </li>
                  <li className='border rounded-[50px] border-[#999] px-[10px] py-[5px]'>
                    #figma
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-[2px] hidden sm:block bg-orgClr absolute top-0 bottom-0 left-1/2 -translate-x-1/2'></div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Projects
