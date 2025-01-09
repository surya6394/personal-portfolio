import React from 'react'
import icon1 from '../images/Vector.png'

const Services = () => {

  const cards = [
    {
      icon: icon1,
      heading: "Web Application",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      icon: icon1,
      heading: "CMS",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      icon: icon1,
      heading: "Portfolio",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      icon: icon1,
      heading: "UI/UX ",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
  ]

  return (
    <>
      <div className='my-20'>
        <div>
          <div className='text-center'>
            <h1 className='md:text-[50px] text-[36px] font-[600]'>Services</h1>
            <p className='md:text-[20px] text-[16px] font-[400] md:w-[60%] mx-auto'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
          </div>
          <div className='flex md:flex-row flex-col justify-center gap-10 text-left mt-10'>
            {cards.map((card, index) => (
              <div key={index} className='w-full px-5 py-6 bg-[#f6f4f4] rounded-md overflow-hidden shadow-md hover:scale-105 hover:drop-shadow-[0_0px_10px_#111] ease-in-out duration-150'>
                <img className='w-[40px]' src={card.icon} alt='Service Icon' />
                <div>
                  <div className='font-semibold text-[26px] my-4'>{card.heading}</div>
                  <p className='text-gray-700 text-[16px]'>
                    {card.paragraph}
                  </p>
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