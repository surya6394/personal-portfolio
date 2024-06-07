import React from 'react'
import img from '../images/self.png'

const Description = () => {
    return (
        <>
            <div className='flex justify-between mt-10 gap-32'>
                <div className='text-left w-[700px] mt-10'>
                    <div>
                        <h3 className='font-[600] text-[24px]'>Hi I am </h3>
                        <h2 className='font-[600] text-[32px] text-orgClr'>Surya Pratap</h2>
                        <div className='font-[700] text-[100px] leading-[100px]'>
                            <h1>Frontend</h1>
                            <h1 className='text-right'>Developer</h1>
                        </div>
                        <p className='mt-12 text-[21.5px] font-[400] leading-[31.5px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                        <button className='bg-orgClr text-[#FFFFFF] px-12 mt-8 py-3 rounded-md'>
                            Hire Me
                        </button>
                    </div>
                </div>
                <div className=''>
                    <img src={img} alt="Profile image." />
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description