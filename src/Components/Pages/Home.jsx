import React from 'react'
import Navbar from '../Elements/Navbar'
import Description from '../Elements/Description'
import About from '../Elements/About'
import Services from '../Elements/Services'
import Projects from '../Elements/Projects'

const Home = () => {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
        <Description />
        <About />
        <Services />
        <Projects />
      </div>
    </>
  )
}

export default Home