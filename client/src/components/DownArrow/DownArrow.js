import React from 'react'
import { HiArrowNarrowDown } from "react-icons/hi";

const DownArrow = () => {
  return (
    <div>
        <div className='flex justify-around container mx-auto w-[80%] max-w-xl mb-28'>
            <HiArrowNarrowDown className='text-5xl text-secondary-color animate-bounce' />
        </div>
    </div>
  )
}

export default DownArrow