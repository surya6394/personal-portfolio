import React, { useState } from 'react'
import img from '../images/self.png'
import SocialIcons from './SocialIcons'
import Contact from './Contact'
import Popup from 'reactjs-popup'

const Description = () => {
  const [form, setFrom] = useState(false)
  const [loading, setLoading] = useState(false);

  const handleHire = () => {
    setFrom(true)
  }
  const onClose = () => {
    setFrom(false);
  }

  return (
    <>
      <div className='flex md:flex-row flex-col justify-between items-center mt-10 md:gap-32 gap-10'>
        <div className='text-left mt-10'>
          <div>
            <h3 className='font-[600] md:text-[24px] text-[20px]'>Hi I am </h3>
            <h2 className='font-[600] md:text-[32px] text-[24px] text-orgClr'>
              Surya Pratap
            </h2>
            <div className='font-[700] md:text-[80px] text-[45px] md:leading-[90px] leading-[60px]'>
              <h1>Frontend</h1>
              <h1 className='ml-[50px]'>Developer</h1>
            </div>
            <p className='mt-3 md:text-[20px] text-[16px] font-[400] leading-[31.5px]'>
              Creating dynamic, responsive, and visually stunning web
              applications tailored to your needs. Let's transform ideas into
              reality with clean code and seamless user experiences.
            </p>
            <div className='flex'>
              <SocialIcons />
            </div>
            <button
              onClick={handleHire}
              className='bg-orgClr text-[#FFFFFF] md:px-12 px-7 mt-8 md:py-3 py-2 rounded-md'
            >
              Hire Me
            </button>
          </div>
        </div>
        <div className='w-full'>
          <img src={img} alt='Profile image.' />
          <div></div>
        </div>
      </div>

      <Popup
        open={form}
        modal
        closeOnDocumentClick={false}
        className='custom-popup'
      >
        <div className='popup-content font-avenir fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm'>
          <div className='bg-[#fff] md:w-[987px] w-[350px] mx-auto h-auto px-5 overflow-y-auto rounded-[14px]'>
            <div className='flex justify-between pt-5'>
              <button
                type='submit'
                onClick={() => {
                  onClose()
                }}
                disabled={loading}
                className='text-xl font-bold'
              >
                X
              </button>
            </div>
            <Contact />
          </div>
        </div>
      </Popup>
    </>
  )
}

export default Description
