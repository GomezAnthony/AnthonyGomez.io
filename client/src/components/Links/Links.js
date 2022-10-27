import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaGoogle, FaTwitch } from "react-icons/fa";

const Links = () => {
  return (
    <div>
      <div className='flex justify-around container mx-auto w-[80%] max-w-xl mb-48'>
        <FaGithub className='text-secondary-color text-4xl' />
        <FaLinkedin className='text-secondary-color text-4xl' />
        <FaTwitter className='text-secondary-color text-4xl' />
        <FaGoogle className='text-secondary-color text-4xl' />
        <FaTwitch className='text-secondary-color text-4xl' />
      </div>
    </div>
  )
}

export default Links