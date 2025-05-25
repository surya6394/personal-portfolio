import React from 'react'
import icon1 from '../images/Vector.png'

const Services = () => {
  const cards = [
    {
      icon: icon1,
      heading: 'Web Application',
      paragraph:
        'Creating responsive and interactive web applications tailored to meet user and business requirements.'
    },
    {
      icon: icon1,
      heading: 'CMS',
      paragraph:
        "Designing and customizing Content Management Systems (CMS) to enable easy management of your website's content."
    },
    {
      icon: icon1,
      heading: 'Portfolio',
      paragraph:
        'Transforming ideas into stunning designs that offer seamless user experiences and intuitive interfaces.'
    },
    {
      icon: icon1,
      heading: 'UI/UX ',
      paragraph:
        'Building modern portfolios that highlight your unique identity and achievements.'
    }
  ]

  return (
    <>
      <div className='my-20'>
        <div>
          <div className='text-center'>
            <h1 className='md:text-[50px] text-[36px] border-b-2 relative z-10 bg-[#fff] w-max mx-auto px-2 py-2 border-orgClr font-[600]'>
              Services
            </h1>
            <p className='md:text-[20px] text-[16px] font-[400] mt-5 md:w-[60%] mx-auto'>
              I provide end-to-end frontend solutions that cater to your
              specific needs
            </p>
          </div>
          <div className='flex md:flex-row flex-col justify-center gap-10 text-left mt-10'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='w-full px-5 py-6 bg-[#f6f4f4] rounded-md overflow-hidden shadow-md hover:scale-105 hover:drop-shadow-[0_0px_10px_#111] ease-in-out duration-150'
              >
                <img className='w-[40px]' src={card.icon} alt='Service Icon' />
                <div>
                  <div className='font-semibold text-[26px] my-4'>
                    {card.heading}
                  </div>
                  <p className='text-gray-700 text-[16px]'>{card.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
