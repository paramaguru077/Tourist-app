import React from 'react'
import { IoEarthOutline } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";
import { FaSearchLocation } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";
import { ImAirplane } from "react-icons/im";
import { ImCompass2 } from "react-icons/im";
const Service = () => {
  
  const feature = [
    {
      logo:<IoEarthOutline />,
      title:"Discover the Best Places",
      p:"Get AI-recommended destinations based on real-time trends, weather conditions, and your travel history",

    },
    {
      logo:<PiMoney />,
      title:" Smart Cost Optimization",
      p:"Our AI finds the best deals on flights, hotels, and activities while keeping your budget in check"
    },
    {
      logo:<FaSearchLocation />,
      title:"Explore Beyond Tourist Spots",
      p:"Discover offbeat attractions, unique restaurants, and local cultural experiences recommended by AI"

    },
    {
      logo:<SiAccuweather />,
      title:" Pack Smart, Travel Light",
      p:"Receive a personalized packing checklist based on your destination’s weather and planned activities."

    },
    {
      logo:<ImAirplane />,
      title:"Personalized Itineraries",
      p:"Our AI curates a custom itinerary based on your interests, travel style, and budget, ensuring a hassle-free experience"
    },
    {
      logo:<ImCompass2 />,
      title:"Effortless Route Optimization",
      p:"Our AI optimizes your travel route, suggesting the best transportation options and minimizing transit time between destinations"

    }


  ]

  return  (
    <div className='max-w-[1230px] w-full m-auto  mt-10'>
      <h1 className='font-bold text-center p-3 text-2xl lg:text-3xl drop-shadow-xl text-[#a0451b] tracking-wide relative'>Personalized Travel Planning with AI Precision</h1>
      <span className='absolute left-1/2 transform -translate-x-1/2  h-[4px] w-[150px] bg-[#f1975b] rounded-2xl'>
      
      </span>
      <p className='tex<t-center text-[15px] font-medium mt-2 p-2 text-neutral-500 m-2'>Experience hassle-free travel planning with our AI-powered Trip Advisor. Get personalized recommendations for destinations, accommodations, and activities based on your preferences. Let our smart assistant curate the perfect itinerary for you!</p>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
        {
          feature.map((item,i)=>(
            <div className='border flex items-center rounded-2xl hover:shadow-xl shadow-blue-100 border-[#e97777] bg-blue-50 hover:ring-0 hover:-translate-y-1 hover:scale-105 transition-all duration-150 delay-100 cursor-pointer mx-16 md:mx-1 ' key={i}>
              <span className='text-2xl text-[#f31010] bg-blue-200 p-4 rounded-full mx-4'>{item.logo}</span>
              <div className='flex flex-col py-3 px-3 mx-1 my-2'>
                <h1 className='font-semibold text-xl text-[#d33e3e] p-2'>{item.title}</h1>
                <span className='w-[50px] h-[2px] mt-[-5px]  bg-[#f85e5e] ml-2 rounded-2xl'></span>
                <p className='text-neutral-700 p-3 text-[16px]'>{item.p}</p>

              </div>


            </div>
          ))
        }

      </div>



    </div>
  )
}

export default Service