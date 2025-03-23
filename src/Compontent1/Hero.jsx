import React from 'react'
import heroimage from './Images/heroimage.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  
  return (
    <div className='w-full relative mt-0.3 shadow-2xl shadow-black mb-2'>
        <img src={heroimage} alt="hero-section" className='w-full h-full md:h-screen object-center' />
          <div className=' absolute top-0 sm:top-30  mx-12 p-1 md:p-4 mt-3'>
            <h1 className='font-extrabold p-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-10 lg:leading-20 text-white text-center tracking-wider '>Discover the Best Travel Destinations with <span className=' text-3xl md:text-5xl xl:text-7xl p-4 text-red-600 font-serif mb-4'>WanderWise</span></h1>
            <p className='text-white text-[16px] tracking-wide p-3 text-center' > Your next adventure starts here! Get personalized travel recommendations and explore the world.</p>
           <div className='flex justify-center mt-5'>
           <Link to='/create-trip'><button className='border px-4 py-2 rounded-xl bg-red-600 text-white text-xl hover:bg-white hover:text-red-600   transition-all duration-400 delay-100 cursor-pointer '>
                Explore Destination
            </button></Link>
           </div>
          </div>
    </div>
  )
}

export default Hero