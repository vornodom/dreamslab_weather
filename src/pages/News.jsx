import React, { useState,useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Button from '../components/button';
import Footer from '../components/footer';




function News() {

  const [news,setNews] = useState(null);
  let componetNew = true;

  useEffect(()=> {
    const fetchNews = async () => {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=16f7fdc874564315832f7b14914168fd`);
    if(componetNew){
        setNews(await response.json());
        // console.log(await response.json());
    }

    
    return () => {
      componetNew = false;
    }
  }
  fetchNews();

  }, []);
  // console.log(news);

  return (
    <>
      <main className='bg-third font-roboto'>
        <div className='max-w-[1170px] px-[0.938rem] mx-auto'>
          <Breadcrumbs />
          <div className='py-[4.375rem] lg:flex lg:gap-[12%] '> 
            <div className='lg:w-[65%]'>
                {
                  news?.articles.map( (new_info, index) => {
                    if ( index > 9 && index < 13) {
                      return (
                        <div className='border-b border-gray-700 pb-[3.125rem]' key={index}>
                          <h2 className='text-white text-[1.875rem] mb-[1.25rem]'>{new_info.title}</h2>
                          <div>
                                <img src={new_info.urlToImage} alt="" width='100%' className='object-cover' />
                          </div>
                          <p className='text-gray-300 text-[0.875rem] my-[1rem]'>{new_info.description}</p>
                          <Button/>
                        </div>
                      )
                    }
                  }
                )}    
            </div>
            <div className='lg:w-[23%]'>
                <div className='bg-fi p-[1.25rem] pl-[2rem] mb-[1.875rem] rounded-md'>
                    <h2 className='text-[1.5rem] font-light text-gray-300 mb-[1.25rem]' >Hot News</h2>
                    <div className='flex '>
                        <ul className="list-image-store">
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Accusamus dignissimos</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Ducimus praesentium</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Voluptatum deleniti corrupti</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Wuos dolores excepturi sint</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Occaecati provident dolor</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-fi p-[1.25rem] pl-[2rem] mb-[1.875rem] rounded-md'>
                    <h2 className='text-[1.5rem] font-light text-gray-300 mb-[1.25rem]' >Categories</h2>
                    <div className='flex '>
                        <ul className="list-image-store">
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Nemo enim ipsam</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Voluptatem voluptas</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Aspernatur aut odit</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Consequuntur magni</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Dolores ratione</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Voluptatem nesciunt</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Neque porro quisquam</li>
                          <li className='text-[0.875rem] text-white py-[0.625rem]'>Dolorem ipsum quia</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-fi p-[1.25rem] mb-[1.875rem] rounded-md'>
                    <h2 className='text-[1.5rem] font-light text-gray-300 mb-[1.25rem]' >Top rated posts</h2>
                    <div>
                        <div className='border-b border-gray-700 pb-[0.625rem]'>
                            <h5 className='text-[0.875rem] text-white font-light'>Doloremque laudantium lorem</h5>
                            <p className='text-[0.875rem] text-white'><span className='text-primary font-bold'>5.5</span> (759 rates)</p>
                        </div>
                        <div className='border-b border-gray-700 py-[0.625rem]'>
                            <h5 className='text-[0.875rem] text-white font-light'>Doloremque laudantium lorem</h5>
                            <p className='text-[0.875rem] text-white'><span className='text-primary font-bold'>5.5</span> (759 rates)</p>
                        </div>
                        <div className='border-b border-gray-700 py-[0.625rem]'>
                            <h5 className='text-[0.875rem] text-white font-light'>Doloremque laudantium lorem</h5>
                            <p className='text-[0.875rem] text-white'><span className='text-primary font-bold'>5.5</span> (759 rates)</p>
                        </div>
                        <div className='pt-[0.625rem]'>
                            <h5 className='text-[0.875rem] text-white font-light'>Doloremque laudantium lorem</h5>
                            <p className='text-[0.875rem] text-white'><span className='text-primary font-bold'>5.5</span> (759 rates)</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </main>
    <Footer/>
    </>
    
    
    
  )
}

export default News