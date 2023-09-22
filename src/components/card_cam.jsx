import React from 'react'

export default function Card_Live() {
  return (
    <div>
        <div className='rounded-md overflow-hidden'>
            <img 
            src="./images/live01.jpg" 
            alt="" 
            width='100%'
            className='object-cover'  
            />
        </div>
        <div>
            <h3 className='text-white text-[1rem] py-[0.5rem]'>New York</h3>
            <p className='text-white text-[0.75rem]'>8 oct, 8:00AM</p>
        </div>
    </div>
  )
}
