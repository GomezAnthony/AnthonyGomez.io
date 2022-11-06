import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div>
        <button className='text-white font-regular text-lg h-10 w-32 rounded-lg bg-blue-600 hover:bg-blue-400 hover:ease-in-out hover:duration-500' onClick={onClick}><a href='https://docs.google.com/document/d/1TO5P9mSz70zgDnwOZEjfSCFnmoKM9rGE/export?format=pdf&ouid=114377615379134846040&rtpof=true&sd=true' target='_blank' rel="noopener noreferrer">{label}</a></button>
    </div>
  )
}

export default Button