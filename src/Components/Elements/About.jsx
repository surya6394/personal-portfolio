import React from 'react'
import img from '../images/self.png'

const About = () => {
  return (
    <>
      <div className='flex justify-between mt-16 gap-32'>
        <div className=''>
          <img src={img} alt="Profile image." />
        </div>
        <div className='text-left w-[700px] mt-10'>
          <div>
            <h1 className='font-[600] text-[65px]'>About Me </h1>
            <p className='mt-5 mb-10 text-[21.5px] font-[400] leading-[31.5px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            <div class="mb-2 text-base font-[600] text-textclr1">UI / UX</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "95%" }}>
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class="mb-2 text-base font-[600] text-textclr1">Website Development</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "90%" }}>
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class="mb-2 text-base font-[600] text-textclr1">React Projects</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "92%" }}>
                <div className='w-[32px] h-[32px] rounded-full bg-[#EDECEC] border-2 border-orgClr'></div>
              </div>
            </div>
            <div class="mb-2 text-base font-[600] text-textclr1">App Development</div>
            <div class="w-full bg-gray-200 rounded-full h-[15px] mb-6 dark:bg-gray-700">
              <div class="flex justify-end items-center bg-orgClr h-[15px] rounded-full" style={{ width: "90%" }}>
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