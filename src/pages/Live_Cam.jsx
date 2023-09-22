import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Card_Live from '../components/card_cam'
import Footer from '../components/footer'

function Live_Cam() {
  return (
    <>
        <main className='bg-third font-roboto'>
            <div className='max-w-[1170px] px-[0.938rem] mx-auto' >
                <Breadcrumbs/>
                <div className='py-[4.375rem]  grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                    <Card_Live/>
                    <Card_Live/>
                    <Card_Live/>
                    <Card_Live/>
                    <Card_Live/>
                    <Card_Live/>
                    <Card_Live/>
                    <Card_Live/>
                </div>
            </div>
        </main>
        <Footer/>
    
    
    </>
  )
}

export default Live_Cam