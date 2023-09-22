import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook,FaTwitter,FaEnvelope,FaPinterest } from 'react-icons/fa';

import Searchbar from './searchbar'

export default function Footer() {
  return (
    <footer className='bg-fi'>
        <div className='max-w-[1170px] px-[0.938rem] mx-auto py-[4.375rem]'>
            <div className=''>
                <div className='grid lg:grid-cols-2 gap-3 '>
                    <Searchbar handleSubmit={(e) => {e.preventDefault()}}/>
                    <div className='flex lg:justify-center items-center'>
                        <ul className='flex gap-3'> 
                            <li className=' text-primary text-[1.8rem] hover:text-white cursor-pointer transition-all duration-150 ease-linear '>
                                <FaFacebook />    
                            </li>
                            <li className=' text-primary text-[1.8rem] hover:text-white cursor-pointer transition-all duration-150 ease-linear'>
                                <FaTwitter/>   
                            </li>
                            <li className=' text-primary text-[1.8rem] hover:text-white cursor-pointer transition-all duration-150 ease-linear'>
                                <FaEnvelope/>   
                            </li>
                            <li className=' text-primary text-[1.8rem] hover:text-white cursor-pointer transition-all duration-150 ease-linear'>
                                <FaPinterest/>   
                            </li>
                        </ul>
                        

                    </div>
                </div>
            </div>
            <p className='text-[0.875rem] text-gray-300 mt-[1rem]'>Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
        </div>
    </footer>
  )
}
