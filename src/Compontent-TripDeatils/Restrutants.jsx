import React from 'react'
import img1 from '../Compontent-TripDeatils/Images/img1.jpg'
import FetchApi from '../Image Api/FetchApi'
import { Link } from 'react-router-dom';
const Restrutants = ({trip}) => {
  const resturantLength= trip?.tripData?.restaurants.length;
  const location=trip?.tripData?.location;
  const images = FetchApi(location,"restaurant",resturantLength);
  return (
    <div className='max-w-[1000px] md:mx-auto mx-24 mt-10'>
          <h1 className='text-center text-2xl lg:text-4xl font-bold drop-shadow-lg text-neutral-700'>Resturants</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 '>
              {
                trip?.tripData?.restaurants.map((item,i)=>(
                  <Link to={'https://www.google.com/maps/search/?api=1&query=' + item?.restaurantName + "," + item?.address} target='_blank' >

            <div className=' px-1 py-4 flex-col items-center border rounded-xl border-[#420b99] hover:scale-105 ring-blue-600 transition-all duration-100 delay-100  cursor-pointer hover:ring-1' key={i}>
                                <div className='w-full p-2'>
                                  <img src={images[i]} alt="hotel" className='w-full  h-[300px] object-center rounded-xl' />
                                </div>
                                <h1 className='text-center text-xl mt-2 text-neutral-900 font-bold '><span className='font-semibold text-neutral-900'>Name: </span>{item?.restaurantName}</h1>
                                <p className='text-neutral-700 text-center mt-2 font-serif'>{item?.description}</p>
                                <p className='text-center mt-2 text-xl text-[#202038]'> Rating: <span className='text-xl font-bold text-teal-900'>{item?.rating}</span></p>
                              
                                <p className='text-center font-medium text-[16px] '>Address: <span className='font-semibold text-neutral-800'>{item?.address}</span></p>
            </div>
      </Link>
                  
                ))
              }
    
          </div>
        </div>
  )
}
    

export default Restrutants