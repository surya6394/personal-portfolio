import React from 'react'
import img from '../images/self.png'

const About = () => {
  return (
    <>
      <div className='flex md:flex-row flex-col justify-between items-center mt-32 gap-32'>
        <div className='w-full hidden md:block'>
          <img src={img} alt="Profile image." />
        </div>
        <div className='text-left '>
          <div>
            <h1 className='font-[600] md:text-[50px] text-[36px]'>About Me </h1>
            <p className='md:mt-5 mb-10 md:text-[20px] text-[16px] font-[400] leading-[31.5px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <div class="mb-2 text-base font-[600] text-textclr1">React JS</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "95%" }}>
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class="mb-2 text-base font-[600] text-textclr1">JavaScript</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "90%" }}>
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class="mb-2 text-base font-[600] text-textclr1">Tailwind CSS</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "92%" }}>
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class="mb-2 text-base font-[600] text-textclr1">HTML & CSS</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "95%" }}>
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