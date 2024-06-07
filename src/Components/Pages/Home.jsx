import React from 'react'
import Navbar from '../Elements/Navbar'
import Description from '../Elements/Description'
import About from '../Elements/About'

const Home = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
        <Description />
        <About />
      </div>
    </>
  )
}

export default Home