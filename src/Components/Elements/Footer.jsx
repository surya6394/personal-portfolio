import React from 'react'
import img from '../images/LOGO.png'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <>
      <div>
        <p class='text-xs text-gray-300'>Surya Pratap © 2025</p>
        <div className="flex items-center justify-center w-64 mx-auto mt-2">
          <img src={img} alt="Profile image." width="50%" />
        </div>
        <SocialIcons />
      </div>
    </>
  )
}

export default Footer
