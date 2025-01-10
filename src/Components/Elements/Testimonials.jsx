import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import img from '../images/rating.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

const Testimonials = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-[100%] w-[100%] mt-20 py-20 '
      >
        <SwiperSlide>
          <div className='px-4'>
            <div className='flex flex-col md:flex-row items-center max-w-[800px] mx-auto rounded-lg md:p-9 p-4 shadow-[0_0px_60px_rgba(0,0,0,0.50)] cursor-grab'>
              <img
                src={img}
                className='h-[120px] w-[120px] md:w-[180px] md:h-[180px] rounded-full'
                alt=''
              />
              <div className='ml-6 text-left pt-6 md:pt-6 relative '>
                <p className='text-sm md:text-base mb-2'>
                  "Surya has a remarkable talent for translating business needs
                  into technical solutions. His work on our web platform
                  exceeded expectations in both design and functionality."
                </p>
                <h2 className='text-right text-[rgba(16,16,16,1)] font-semibold md:text-[40px] text-[25px]'>
                  Devesh Lalwani
                </h2>
                <h2 className='text-right text-[rgba(16,16,16,1)] md:text-[16px] text-[13px]'>
                  CEO Of ClevDoc
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='px-4'>
            <div className='flex flex-col md:flex-row items-center max-w-[800px] mx-auto rounded-lg md:p-9 p-4 shadow-[0_0px_60px_rgba(0,0,0,0.50)] cursor-grab'>
              <img
                src={img}
                className='h-[120px] w-[120px] md:w-[180px] md:h-[180px] rounded-full'
                alt=''
              />
              <div className='ml-6 text-left pt-6 md:pt-6 relative '>
                <p className='text-sm md:text-base mb-2'>
                  "Working with Surya was an absolute pleasure. His creativity
                  and technical expertise brought our vision to life
                  seamlessly."
                </p>
                <h2 className='text-right text-[rgba(16,16,16,1)] font-semibold md:text-[40px] text-[25px]'>
                  Kartik
                </h2>
                <h2 className='text-right text-[rgba(16,16,16,1)] md:text-[16px] text-[13px]'>
                  CEO Of HitWeb
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className='px-4'>
            <div className='flex flex-col md:flex-row items-center max-w-[800px] mx-auto rounded-lg md:p-9 p-4 shadow-[0_0px_60px_rgba(0,0,0,0.50)] cursor-grab'>
              <img
                src={img}
                className='h-[120px] w-[120px] md:w-[180px] md:h-[180px] rounded-full'
                alt=''
              />
              <div className='ml-6 text-left pt-6 md:pt-6 relative '>
                <p className='text-sm md:text-base mb-2'>
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ducimus, molestias illum deserunt aperiam laudantium rem
                  asperiores ipsam, fugiat deleniti magnam minima consequatur
                  similique minus, dolorem dolores ratione nihil optio rerum?"
                </p>
                <h2 className='text-right text-[rgba(16,16,16,1)] font-semibold md:text-[40px] text-[25px]'>
                  Surya Pratap
                </h2>
                <h2 className='text-right text-[rgba(16,16,16,1)] md:text-[16px] text-[13px]'>
                  CEO Of HitWeb
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default Testimonials
