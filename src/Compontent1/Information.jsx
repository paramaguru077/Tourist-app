import React from 'react'
import dummy from './Images/heroimage.jpg'
const Information = () => {
  return (
    <div className='max-w-[1320px] m-auto w-full mt-10 bg-white '>
        <h1 className='text-center font-bold text-3xl drop-shadow-lg text-[#ee3131] tracking-wide'> About us</h1>
        <div className='flex flex-col md:flex-row mt-6'>
            <div className='md:w-1/2 p-4'>
            <h1 className='font-semibold text-center text-2xl p-3 drop-shadow-lg text-[#a32c2c]'>A beautiful garden is a work of Art</h1>
            <p className='text-neutral-400 text-center p-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus qui voluptatem est explicabo. Quos magnam, autem laudantium eveniet, labore, veniam ipsum rerum quae quis quidem minus ipsam. Minima, eos!</p>
            </div>
            <div className='md:w-1/2 p-5'>
            <img src={dummy} alt="" className='rounded-xl' />

            </div>

            
        </div>


    </div>
  )
}

export default Information