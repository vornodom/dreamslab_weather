import { useAtom } from 'jotai';
import React, { useContext } from 'react'
import { themeAtom } from '../pages/Home';




export default function Searchbar({ handleSubmit }) {

  
 
  // console.log(theme);

  return (
    <>
        <form className='text-[0.875rem] relative' onSubmit={handleSubmit} >
            <input 
            type="text" 
            placeholder='Find your location...' 
            className='py-[1.25rem] pl-[1.25rem] pr-[3.125rem] w-full bg-third text-white 
             border-none outline-none rounded-full'
            />
            <input 
            type="submit"  
            value="Find"
            // onChange={(e) => setStateParam(e.target.value)}
            className='text-white bg-primary px-[2.5rem] py-[1rem] rounded-full absolute top-1 right-1 cursor-pointer'
            />
        </form>
    
    </>

  )
}
