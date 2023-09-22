import { createContext, useState } from "react"
import Forecast from "../components/forecast"
import Searchbar from "../components/searchbar"
import {atom, useAtom} from 'jotai'
import Card_Live from '../components/card_cam'
import News from "../components/news"
import Footer from "../components/footer"



export const themeAtom = atom("Phnom Penh");

function Home() {

    const handleSearch = (event) => {
        event.preventDefault();
        setTheme(event.target[0].value);
        // console.log(event.target[0].value);
      
      }


      const [theme, setTheme] = useAtom(themeAtom);

  

  return (
   <>
   
     <main >
      <section 
        className=" bg-[url('/images/bg-2.png')] bg-top py-[4.375rem]"
      >
        <div className="max-w-[1170px] px-[0.938rem] mx-auto">
        
           <Searchbar handleSubmit={handleSearch} />
          <Forecast />
                     
        </div>
      </section>
      <section className="bg-third">
          <div className="max-w-[1170px] px-[0.938rem] mx-auto">
            <div className="py-[4.375rem] ">
                <div className="mb-[1.25rem]">
                  <h1 className="text-[2rem] text-white" >Live cameras</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card_Live/>
                <Card_Live/>
                <Card_Live/>
                <Card_Live/>
                </div>
            </div> 
          </div>
      </section>
      <section className="bg-fi">
        <div className="max-w-[1170px] px-[0.938rem] mx-auto py-[4.375rem] ">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <News/>
              <News/>
              <News/>
            </div>
        </div>
      </section>
      <section className="bg-third">
        <div className="max-w-[1170px] px-[0.938rem] mx-auto py-[4.375rem]">
            <div className="grid lg:grid-cols-3">
                <div className="px-[1rem]">
                    <p className="text-[2rem] text-white my-[1.25rem]">Application features</p>
                    <div>
                        <ul className="list-image-store">
                            <li>
                               <h5 className="text-[0.875rem] mb-[1.25rem] text-white font-bold">Natus error sit voluptatem accusantium</h5>
                               <p className="text-[0.875rem] text-gray-300 font-light mb-[0.875rem]">Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
                            </li>
                            <li>
                               <h5 className="text-[0.875rem] mb-[1.25rem] text-white font-bold">Natus error sit voluptatem accusantium</h5>
                               <p className="text-[0.875rem] text-gray-300 font-light mb-[0.875rem]">Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
                            </li>
                            <li>
                               <h5 className="text-[0.875rem] mb-[1.25rem] text-white font-bold">Natus error sit voluptatem accusantium</h5>
                               <p className="text-[0.875rem] text-gray-300 font-light mb-[0.875rem]">Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-[1rem]">
                    <p className="text-[2rem] text-white my-[1.25rem]">Weather analyssis</p>
                    <div>
                        <ul  className="list-image-store">
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Accusantium doloremque laudantium rem aperiam</li>
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Eaque ipsa quae ab illo inventore veritatis quasi</li>
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Architecto beatae vitae dicta sunt explicabo</li>
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Nemo enim ipsam voluptatem quia voluptas</li>
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Aspernatur aut odit aut fugit, sed quia consequuntur</li>
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Magni dolores eos qui ratione voluptatem sequi</li>
                            <li className="text-white border-b border-gray-700 py-[0.5rem] font-light" >Neque porro quisquam est qui dolorem ipsum quia</li>

                        </ul>
                    </div>
                </div>
                <div className="px-[1rem]">
                      <p className="text-[2rem] text-white my-[1.25rem]" >Awesome Photos</p>
                      <div className="grid grid-cols-3 gap-1 md:gap-2">
                          <div>
                              <img src="./images/thumb-1@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-2@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-3@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-4@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-5@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-6@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-7@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-1@2x.jpg" alt="" width='100%' />
                          </div>
                          <div>
                              <img src="./images/thumb-8@2x.jpg" alt="" width='100%' />
                          </div>
                          
                      </div>
                </div>
            </div>
        </div>
      </section>
    </main>
    <Footer />
   </>
  )
}

export default Home