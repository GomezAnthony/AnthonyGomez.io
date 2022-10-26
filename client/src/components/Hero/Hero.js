import React from 'react'
import { MdWavingHand } from "react-icons/md";

function Hero() {
  return (
    <div>
        <div className='hero'>
            <div className=''>
                <div className='flex'>
                    <h2 className='text-white text-2xl'>Hi,</h2><MdWavingHand className='text-[#FFD45E] text-2xl' />
                </div>
                <div className=''>
                    <h1 className="font-bold text-5xl text-secondary-color before:content-['I'm '] before:text-[#FFD45E] before:absolute before:z-[-1] before:top-2">I'm Anthony, your next Software Engineer!</h1>
        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero