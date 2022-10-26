import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div>
        <button className='text-secondary-color text-2xl h-14 w-40 rounded-lg bg-primary-color' onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button