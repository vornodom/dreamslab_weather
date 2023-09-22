import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/footer'

function Contact() {
  return (
    <>
        <main className='bg-third font-roboto text-[0.875rem]'>
            <div className='max-w-[1170px] px-[0.938rem] mx-auto'>
                <Breadcrumbs />
                <div className='py-[4.375rem] lg:flex gap-[10%]'>
                      <div className='lg:w-[40%]'>
                          <div className='text-gray-400 bg-fi rounded-md overflow-hidden'>
                              <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.914150742179!2d104.86961427368372!3d11.486117888709048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095b97a5cd5e47%3A0x11c7c39515448089!2sdreamsLAB%20blockchain%20community!5e0!3m2!1sen!2skh!4v1695175396524!5m2!1sen!2skh"
                                width="100%" height="220px"  ></iframe>
                              </div>
                              <div className='p-[1.25rem]'>
                                    <div className='flex mb-[1rem]'>
                                        <div className='mr-[0.7rem]'>
                                            <img src="./images/icon-marker.png" alt="" />
                                        </div>
                                        <p>
                                            Company Name INC. <br />
                                            2803 Avenue Street, Los Angeles
                                        </p>
                                    </div>
                                    <div className='flex'>
                                        <div className='flex mr-[0.7rem]'>
                                              <div className='mr-[0.3rem]'>
                                                <img src="./images/icon-phone.png" alt="" />
                                              </div>
                                              
                                              <p>+1 800 314 235</p>
                                        </div>
                                        <div className='flex'>
                                              <div className='mt-[0.2rem] mr-[0.3rem]'>
                                                <img src="./images/icon-envelope.png" alt="" />

                                              </div>
                                              <p>contact@companyname.com</p>
                                        </div>
                                    </div>
                              </div>
                          </div>
                            
                      </div>
                      <div className='lg:w-[50%] mt-6 lg:mt-0 '>
                            <h1 className='text-[2rem] text-white font-light'>Contact us</h1>
                            <p className='text-[0.875rem] text-white font-light' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur inventore ducimus, facilis, numquam id soluta omnis eius recusandae nesciunt vero repellat harum cum. Nisi facilis odit hic, ipsum sed!</p>
                            
                            <form className='mt-[1rem] pr-[1.5rem]' >
                              <div className='flex gap-7'>
                                 <div className='w-[50%]'>
                                     <input 
                                     type="text" name="" id=""  
                                     placeholder='Your name...'
                                     className='p-[0.938rem] bg-third border-2 rounded-full border-gray-700 outline-0	
                                     text-white hover:border-primary text-[0.875rem] w-[100%]'
                                     />
                                 </div>
                                 <div className='w-[50%]'>
                                     <input 
                                     type="text" name="" id=""  
                                     placeholder='Email Addresss...'
                                     className='p-[0.938rem] bg-third border-2 rounded-full border-gray-700 outline-0	
                                     text-white hover:border-primary text-[0.875rem] w-[100%]'
                                     />
                                 </div>
                              </div>
                              <div className='flex gap-7 mt-[1rem]'>
                                 <div className='w-[50%]'>
                                     <input 
                                     type="text" name="" id=""  
                                     placeholder='Company Name...'
                                     className='p-[0.938rem] bg-third border-2 rounded-full border-gray-700 outline-0	
                                     text-white hover:border-primary text-[0.875rem] w-[100%]'
                                     />
                                 </div>
                                 <div className='w-[50%]'>
                                     <input 
                                     type="text" name="" id=""  
                                     placeholder='Website...'
                                     className='p-[0.938rem] bg-third border-2 rounded-full border-gray-700 outline-0	
                                     text-white hover:border-primary text-[0.875rem] w-[100%]'
                                     />
                                 </div>
                              </div>
                              <div className='mt-[1rem]'>
                                  <textarea 
                                  name="" id="" cols="30" rows="5"
                                  placeholder='Message...'
                                  className='p-[0.938rem] bg-third border-2 rounded-[30px] border-gray-700 outline-0	
                                     text-white hover:border-primary text-[0.875rem] w-[100%]'
                                  ></textarea>
                              </div>
                              <div className='text-end mt-2'>
                                  <input type="submit" value="Submit"
                                    className='px-[1.25rem] py-[0.625rem] text-white bg-primary rounded-full'
                                  />
                              </div>
                            </form>
                            
                      </div>
                </div>  
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Contact