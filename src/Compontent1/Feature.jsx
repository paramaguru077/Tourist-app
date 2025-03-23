import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaHotel } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
const Feature = () => {
    const featureItem = [
        { logo: <FaSearchLocation />, title: "Country", description: "Explore" },
        { logo: <TiWeatherCloudy />, title: "Weather", description: "Forecast" },
        { logo: <FaHotel />, title: "Restaurants", description: "Dine" },
        { logo: <MdHotel />, title: "Hotel", description: "Stay" },
        { logo: <IoTimeOutline />, title: "Best Time to Visit", description: "Season" }
    ];
    
  return (
    <div className=' hidden max-w-[1120px] w-full m-auto lg:flex justify-center flex-wrap mt-[20px] '>
        <div className='flex  justify-between items-center rounded-lg  bg-white w-full   px-5  shadow-xl p-4 '>
            {
                featureItem.map((item,i)=>(
                    <div key={i} className='flex gap-3  p-3 items-center space-x-3 cd rounded-2xl flex-1 '>
                       <span className='text-3xl text-red-500 bg-amber-100 rounded-full p-4 '> {item.logo}</span>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-xl font-medium text-red-700'>{item.title}</h2>
                            <p className='text-neutral-700 drop-shadow-xl'>{item.description}</p>

                        </div>
                        
                        
                    </div>
                ))
            }

        </div>

    </div>
  )
}

export default Feature