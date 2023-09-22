import { useAtom } from 'jotai';
import React, { Fragment, useEffect, useState } from 'react'
import { themeAtom } from '../pages/Home';





export default function Forecast() {

    // const [search, setSearch] = useState("new york");
    const [theme] = useAtom(themeAtom)
    const [data, setData] = useState(undefined);

    
//    console.log("forecast", stateParam);

    let componentMounted = true;

    useEffect(()=> {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${theme}&appid=f878ad22e9d69f18e34074165c7ec7f8`);
        if(componentMounted){
            setData(await response.json());
            // console.log(await response.json());
        }

        
        return () => {
            componentMounted = false;
        }
    }
    fetchWeather();
    
}, [theme]);
// console.log(data);
// console.log(theme);
// console.log(Date(data?.dt));
// console.log(data?.city?.name);

    let temp = ( data?.main?.temp - 273.15).toFixed(0);
    //  let temp = Date(data.list[0].dt);
    let date = new Date();
    // console.log(date);
    let dayOfWeek = date.toLocaleDateString('en-US', {weekday : 'long'});
    let months = date.toLocaleTimeString('default', {month : 'short'});
    // let month = months.getMonth();
    let month = months.substr(0, 3);
    let day = date.getDate();
    // let year = d.getFullYear();
    // let month = d.getMonth();
    // console.log(dayOfWeek);

  return (
    <div className='text-[0.875rem] text-gray-300 bg-third lg:flex font-roboto 
    max-w-[1170px] mx-auto rounded-md mt-[4.5rem] overflow-hidden'>
        <div className='today-forecast lg:w-[37%] ' >
            <div className='head-forecast p-[0.625rem] flex justify-between '>
                <h3>{dayOfWeek}</h3>
                <h3>{day} {month}</h3>
            </div>
            <div className='body-forecast px-[1.25rem] py-[1.875rem]'>
                <h2 className='text-[1.125rem]' >{data?.name}</h2>
                <div className='flex'>
                    <h1 className='text-[5.625rem] mr-[1.875rem] font-bold text-white' >{Math.ceil(temp)}&deg;C</h1>
                    <img src="images/icons/icon-1.svg" alt="" width='90px' />
                </div>
                <div className='flex'>
                    <div className='flex mr-[1.25rem]'>
                        <img src="images/icon-umberella.png" alt="" />
                        <span className='ml-[0.5rem]'>{data?.main?.humidity}%</span>
                    </div>
                    <div className='flex mr-[1.25rem]'>
                        <img src="images/icon-wind.png" alt="" />
                        <span  className='ml-[0.5rem]'>{data?.wind?.speed}m/s</span>
                    </div>
                    <div className='flex mr-[1.25rem]'>
                        <img src="images/icon-compass.png" alt="" />
                        <span  className='ml-[0.5rem]'>East</span>
                    </div>
                </div>
            </div>

        </div>
        <div className='lg:w-[63%] grid grid-cols-6 even'>
           
                <div className='forecast'>
                    <div className='p-[0.625rem] text-center '>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                        <p className='flex justify-center'>
                            <img src="images/icons/icon-2.svg" alt="" width='48px' className='  mb-[1.25rem]' />
                        </p>
                        
                        
                        <h3 className='text-[1.5rem] text-white font-bold' >34&deg;C</h3>
                        <small className='text-[1rem]' >21&deg;</small>
                    </div>  
                </div>
                <div className='forecast'>
                    <div className='p-[0.625rem] text-center '>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                        <p className="flex justify-center">
                            <img src="images/icons/icon-2.svg" alt="" width='48px' className=' mb-[1.25rem]' />
                        </p>
                        
                        <h3 className='text-[1.5rem] text-white font-bold' >34&deg;C</h3>
                        <small className='text-[1rem]' >21&deg;</small>
                    </div>  
                </div>
                <div className='forecast'>
                    <div className='p-[0.625rem] text-center '>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                        <p className='flex justify-center'>
                             <img src="images/icons/icon-2.svg" alt="" width='48px' className=' mb-[1.25rem]' />
                        </p>
                        
                        <h3 className='text-[1.5rem] text-white font-bold' >34&deg;C</h3>
                        <small className='text-[1rem]' >21&deg;</small>
                    </div>  
                </div>
                <div className='forecast'>
                    <div className='p-[0.625rem] text-center '>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                        <p className='flex justify-center'>
                            <img src="images/icons/icon-2.svg" alt="" width='48px' className=' mb-[1.25rem]' />

                        </p>
                        <h3 className='text-[1.5rem] text-white font-bold' >34&deg;C</h3>
                        <small className='text-[1rem]' >21&deg;</small>
                    </div>  
                </div>
                <div className='forecast'>
                    <div className='p-[0.625rem] text-center '>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                        <p className="flex justify-center">

                            <img src="images/icons/icon-2.svg" alt="" width='48px' className=' mb-[1.25rem]' />

                        </p>
                        <h3 className='text-[1.5rem] text-white font-bold' >34&deg;C</h3>
                        <small className='text-[1rem]' >21&deg;</small>
                    </div>  
                </div>
                <div className='forecast'>
                    <div className='p-[0.625rem] text-center '>
                        <span>Tuesday</span>
                    </div>
                    <div className='px-[1.25rem] pt-[3.125rem] pb-[0.625rem] flex flex-col text-center'>
                        <p className='flex justify-center'>
                            <img src="images/icons/icon-2.svg" alt="" width='48px' className=' mb-[1.25rem]' />

                        </p>
                        <h3 className='text-[1.5rem] text-white font-bold' >34&deg;C</h3>
                        <small className='text-[1rem]' >21&deg;</small>
                    </div>  
                </div>
                  
              
           

            
        </div>

        
            

            
        
    </div>       
        
  )
}
