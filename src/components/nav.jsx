import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Outlet } from 'react-router-dom'

function Nav() {
    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen((prev) => !prev)
        console.log(open);
    }
  return (
    <>
        <header className='font-roboto bg-third text-white  py-[3.125rem] '>
            <nav className='px-[0.938rem]  flex justify-between items-center max-w-[1170px]   mx-auto'>
                    <div className='flex justify-between items-start'>
                        <a href="/" className='flex'>
                            <img src="./images/logo.png" alt="" />
                            <div className='ml-[0.625rem]'>
                                <h3 className='text-base font-bold ' >Company name</h3>
                                <h4 className='text-[0.625rem] font-light text-secondary' >tagline goes here</h4>
                            </div>
                        </a>
                    </div>
                    
                   
                    <ul className='lg:flex hidden'>
                        <li className='ml-[0.625rem]'>
                            <NavLink to="/" className=' button button-hover ' >Home</NavLink>
                        </li>
                        <li className='ml-[0.625rem]'>
                            <NavLink to="/News" className=' button button-hover '>News</NavLink>
                        </li>
                        <li className='ml-[0.625rem]'>
                            <NavLink to="/Live_Cam" className=' button button-hover '>Live cameras</NavLink>
                        </li>
                        <li className='ml-[0.625rem]'>
                            <NavLink to="/Photo" className=' button button-hover '>Photos</NavLink>
                        </li>
                        <li className='ml-[0.625rem]'>
                            <NavLink to="/Contact" className=' button button-hover '>Contact</NavLink>
                        </li>
                    </ul>

                    <div 
                    onClick={handleMenu}
                    className='lg:hidden p-[1.25rem] cursor-pointer border-2 rounded-full 
                    border-third hover:border-2 hover:border-primary '
                    >
                            <FontAwesomeIcon icon={faBars}  />
                    </div>
                    
            </nav>
            {/* mobile-menu*/}
            { open ? (
                <div className='lg:hidden px-[0.938rem] mt-[0.75rem]' id='mobile' >
                    <ul className=' bg-fo font-roboto text-[0.875rem] font-light rounded-md '>
                        <li onClick={handleMenu} >
                            <NavLink to="/" className=' mobile-button ' >Home</NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink to="/News" className=' mobile-button '>News</NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink to="/Live_Cam" className=' mobile-button '>Live cameras</NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink to="/Photo" className=' mobile-button '>Photos</NavLink>
                        </li>
                        <li onClick={handleMenu}>
                            <NavLink to="/Contact" className=' mobile-button border-[0px]'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            ) : null }
            
        </header>
        <main>
            <Outlet/>
        </main>
    </>
   
  )
}

export default Nav