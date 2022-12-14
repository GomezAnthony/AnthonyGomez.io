import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaTwitch, FaGoogle} from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";


const Links = () => {
  return (
    <div>
      <div className='flex justify-around container mx-auto w-[80%] max-w-xl mb-60 animte'>
        <a href='https://github.com/GomezAnthony' target='_blank'rel="noopener noreferrer" ><FaGithub className='text-secondary-color text-4xl md:text-5xl cursor-pointer hover:scale-125 duration-500 ease-in-out transition delay-75' /></a>
        <a href='https://www.linkedin.com/in/anthony-gomez-20b291130/' rel="noopener noreferrer"><FaLinkedin className='text-secondary-color text-4xl md:text-5xl cursor-pointer hover:scale-125 duration-500 ease-in-out transition delay-75' /></a>
        <a href='https://twitter.com/tonyxcodes' target='_blank' rel="noopener noreferrer"><FaTwitter className='text-secondary-color text-4xl md:text-5xl cursor-pointer hover:scale-125 duration-500 ease-in-out transition delay-75' /></a>
        <a href='mailto: gomez9162@gmail.com' target='_blank' rel="noopener noreferrer"><FaGoogle className='text-secondary-color text-4xl md:text-5xl cursor-pointer  hover:scale-125 duration-500 ease-in-out transition delay-75' /></a>
        <a href='https://github.com/GomezAnthony'><FaTwitch className='text-secondary-color text-4xl md:text-5xl cursor-pointer hover:scale-125 duration-500 ease-in-out transition delay-75' /></a>
      </div>
      <div className='flex justify-center'>
          <FiArrowDown className='text-5xl animate-bounce' />
        </div>
    </div>
  )
}

export default Links