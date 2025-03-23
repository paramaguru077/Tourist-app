import React, { useState } from 'react'
import logo from './Images/logo final.jpg'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
    const [open,setOpen] = useState(false)
    const toggleButton =()=>{
        setOpen(!open);
    }
  return (
    <div className='w-full  py-6 px-2  bg-white z-50 shadow-2xl relative '>
        <div className='flex justify-between items-center '>
            <div className='flex items-center space-x-4 ml-8 md:ml-9' >
                <img src={logo} alt="logo" className='w-8 rounded-full'/>
                <span className='font-bold text-2xl leading-1 drop-shadow-lg tracking-wide'>WanderWise</span>

            </div>
            <div className='grow'>
            <ul className='hidden md:flex items-center  justify-center '>
                <li className='text-[18px] text-neutral-800 mr-7 font-medium xl:mr-14'>Home</li>
                <li className='text-[18px] text-neutral-800 mr-7 font-medium xl:mr-14'>Feature</li>
                <li className='text-[18px] text-neutral-800 mr-3 font-medium'>About</li>
            </ul>
            </div>
            <div className='hidden md:flex gap-3 mr-8 ' >
                <Link to='/create-trip'><button className='py-2 px-6 border-1 bg-red-500 text-white ring-1  ring-neutral-100 focus:ring-red-200  focus:ring-1 rounded-xl cursor-pointer font-medium hover:bg-amber-50 hover:border-red-800 hover:text-red-700 duration-300' >Create trip</button></Link>
                <button className='py-2 px-6 border-1 text-neutral-950 ring-1  ring-neutral-800 focus:ring-amber-200  focus:ring-1 rounded-xl cursor-pointer font-medium hover:border-amber-100  duration-100' >Signup</button>
            </div>
            <div className='md:hidden mr-10' onClick={toggleButton} >
              <RxHamburgerMenu className='text-2xl cursor-pointer text-neutral-950'/>
            </div>

        </div>
        <div className={`md:hidden absolute z-50   bg-white flex flex-col item-center gap-5 overflow-hidden transition-all duration-500 delay-100 transform origin-top ${open ? "scale-y-100 h-auto":"scale-y-0 h-0"}`}>
        
            
            <div className='m-10 flex flex-col items-center gap-5' >
                <ul className='flex flex-col space-y-3 ' onClick={toggleButton}>
                <li className='text-[18px] text-neutral-800 mr-3 font-medium cursor-pointer'>Home</li>
                <li className='text-[18px] text-neutral-800 mr-3 font-medium cursor-pointer'>Feature</li>
                <li className='text-[18px] text-neutral-800 mr-3 font-medium cursor-pointer'>About</li>

                </ul>
                <div onClick={toggleButton}>
                <button className='py-2 px-6 text-neutral-950 ring-1  ring-neutral-800 focus:ring-amber-200 focus:ring-1 rounded-xl cursor-pointer font-medium'>Signup</button>

                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Header