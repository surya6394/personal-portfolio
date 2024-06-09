import React from 'react'
import icon1 from '../images/Vector.png'

const Services = () => {

  const cards = [
    {
      icon: icon1,
      heading: "UI/UX",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      icon: icon1,
      heading: "Web Design",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      icon: icon1,
      heading: "App Design",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
    {
      icon: icon1,
      heading: "Graphic Design ",
      paragraph: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },
  ]

  return (
    <>
      <div className='my-20'>
        <div>
          <div className='text-center'>
            <h1 className='text-[65px] font-[600]'>Services</h1>
            <p className='text-[21px] font-[400] mx-44'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
          </div>
          <div className='flex justify-center text-left mt-10 space-x-4'>
            {cards.map((card, index) => (
              <div key={index} className='w-[330px] pl-2 py-6 bg-[#f6f4f4] rounded overflow-hidden shadow-md m-4'>
                <img className='w-[50px]' src={card.icon} alt='Service Icon' />
                <div>
                  <div className='font-bold text-[32px] my-4'>{card.heading}</div>
                  <p className='text-gray-700 text-[19px]'>
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