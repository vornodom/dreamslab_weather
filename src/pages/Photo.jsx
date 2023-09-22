import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useState,useEffect } from 'react'
import Footer from '../components/footer';


function Photo() {

  const [photos,setPhotos] = useState(null);
  let componetphoto = true;
  useEffect(()=> {
    const fetchPhotos = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=c75acdadd13d63050f98f20b284409ed`);
    if(componetphoto){
        setPhotos(await response.json());
        // console.log(await response.json());
    }

     
    return () => {
      componetphoto = false;
    }
  }
  fetchPhotos();

  }, []);
  console.log(photos);

  return (
    <>
        <main className='bg-third font-roboto'>
            <div className='max-w-[1170px] px-[0.938rem] mx-auto'>
                  <Breadcrumbs />
                  <div className='py-[4.375rem] grid lg:grid-cols-2 gap-8'>
                      {
                        photos?.results.map( (photo_info, index) => {
                          if ( photo_info.overview !== "" && photo_info.name !== "Come Home Love: Lo and Behold" ){
                            return (
                              <div className='flex rounded-md bg-fi overflow-hidden '>
                                  <div className=' h-[250px] w-[50%]  '>
                                      <img 
                                      src={`https://image.tmdb.org/t/p/w500${photo_info.poster_path}`} 
                                      alt="" 
                                      
                                      className=' w-[100%] h-[100%] object-cover'
                                      />
                                  </div>
                                  <div className='p-[1.25rem] w-[50%] '>
                                    <h3 className='text-[1rem] text-white mb-[0.2rem]'>{photo_info.name}</h3>
                                    <p className=' text-[0.75rem] md:text-[0.875rem] text-gray-300 font-light' >{photo_info.overview}</p>
                                  </div>
                                  
                            </div>
                          )
                          }
                        } )
                      }
  
                  </div>
            </div>
        </main>
        <Footer/>
    </>
    
  )
}

export default Photo