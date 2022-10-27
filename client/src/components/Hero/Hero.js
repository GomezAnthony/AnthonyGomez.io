import React from 'react'
import { MdWavingHand } from "react-icons/md";

function Hero() {
  return (
    <div>
        <div>
            <div className='container mx-auto w-[80%] py-20'>
                <div className='flex py-4'>
                    <h2 className='text-white text-2xl'>Hi,</h2><MdWavingHand className='text-[#FFD45E] text-2xl' />
                </div>
                <div>
                    <h1 className="font-bold text-5xl text-tertiary-color tracking-wider leading-[3.5rem]">I'm <span className='text-complementary-color'>Anthony</span>, your next <span className='text-complementary-color'>Software Engineer!</span></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero