import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {

    const location = useLocation();

    let currentLink = '';
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '') 
    .map( crumb => {
        currentLink =+ `/${crumb}`
        return (
            <div key ={crumb} className='text-[0.813rem] text-gray-300 px-[1.875rem] py-[1.25rem] bg-fi block rounded-full'>
                <Link to={currentLink} > {crumb}</Link>
            </div>
        )
    })
    console.log(crumbs);
  return (
    <div>
         {crumbs}
    </div>
  )
}
