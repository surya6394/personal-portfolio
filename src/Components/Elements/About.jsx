import React from 'react'
import img from '../images/self.png'

const About = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-between items-center mt-32 gap-32'>
        <div className='w-full hidden md:block'>
          <img src={img} alt='Profile image.' />
        </div>
        <div className='text-left w-full'>
          <div>
            <h1 className='font-[600] md:text-[50px] text-[36px]'>About Me </h1>
            <p className=' mb-5 md:text-[20px] text-[16px] font-[400] leading-[29px]'>
              I'm a passionate Frontend Developer with a strong focus on
              building user-centered web applications using modern tools like
              ReactJS, ReduxJS, JavaScript, and Tailwind CSS. With a commitment to clean
              code and performance optimization, I specialize in designing
              intuitive and functional user interfaces. My goal is to deliver
              high-quality solutions that exceed expectations and solve
              real-world problems.
            </p>
            <div class='mb-2 text-base font-[600] text-textclr1'>React JS</div>
            <div class='w-full bg-gray-200 rounded-full mb-4 dark:bg-gray-700'>
              <div
                class='flex justify-end items-center bg-orgClr h-[10px] rounded-full'
                style={{ width: '95%' }}
              >
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class='mb-2 text-base font-[600] text-textclr1'>
              Redux JS
            </div>
            <div class='w-full bg-gray-200 rounded-full h-[10px] mb-4 dark:bg-gray-700'>
              <div
                class='flex justify-end items-center bg-orgClr h-[10px] rounded-full'
                style={{ width: '93%' }}
              >
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class='mb-2 text-base font-[600] text-textclr1'>
              JavaScript
            </div>
            <div class='w-full bg-gray-200 rounded-full h-[10px] mb-4 dark:bg-gray-700'>
              <div
                class='flex justify-end items-center bg-orgClr h-[10px] rounded-full'
                style={{ width: '90%' }}
              >
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class='mb-2 text-base font-[600] text-textclr1'>
              Tailwind CSS
            </div>
            <div class='w-full bg-gray-200 rounded-full h-[10px] mb-4 dark:bg-gray-700'>
              <div
                class='flex justify-end items-center bg-orgClr h-[10px] rounded-full'
                style={{ width: '95%' }}
              >
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class='mb-2 text-base font-[600] text-textclr1'>
              HTML & CSS
            </div>
            <div class='w-full bg-gray-200 rounded-full h-[10px] mb-4 dark:bg-gray-700'>
              <div
                class='flex justify-end items-center bg-orgClr h-[10px] rounded-full'
                style={{ width: '97%' }}
              >
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
