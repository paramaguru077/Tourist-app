import React from 'react'
import logo from '../Compontent1/Images/logo final.jpg'
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Slides from './Slides'
const InfoSection = ({trip}) => {
 
  
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const logout=()=>{
    googleLogout();
    localStorage.clear();
    window.location.reload();
    navigate("/");

  }
  
  return (
    <div className='bg-white  w-full'>
      <div className='px-3 py-2  flex  justify-between items-center shadow-xl'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="img" className='w-8 rounded-full' />
          <h1 className='font-mono text-3xl font-bold text-[#2c0ac4]'>Wanter trip</h1>
        </div>
        <div >
          {
            user ?
            (
              <div className='flex items-center'>
                <h1 className='text-neutral-600 text-[18px] capitalize hidden md:block'> {user.name}</h1>
                <span className='p-2'><img src={user.picture} alt="" className='w-12 rounded-full hidden md:block' /></span>
                <button className='mr-4 ml-2 border py-2  px-6 rounded-xl text-[14px] text-blue-600 font-medium cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200 delay-150'>My Trip </button>
                <button className='bg-blue-600 mr-4 ml-5 py-2 px-6 rounded-xl text-white text-[14px] border border-blue-800   font-medium cursor-pointer
                hover:bg-white hover:text-blue-600 duration-200 delay-150 ' onClick={logout}>Logout</button>

              </div>
              

            ):
            (
              <div className='max-w-lg'>
                <h1>Welcome Guest</h1>
                
                </div>

            )
          }
        

        </div>

      </div>
      <div className='p-3 mt-6'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='text-4xl md:text-5xl font-medium text-[#150d8d]'>{trip?.tripData?.location}</h1>
          <p className='text-neutral-600 text-xl'>Wow, you always know how to pick the perfect one.</p> 
        </div>
        <div className='mt-15 max-w-[1300px] w-full m-auto overflow-hidden mb-3 ' >
          <h1 className='text-center text-xl  mb-1.5 text-neutral-500 font-medium'>Take a sneak peek at what's ahead!</h1>
            <Slides  autoSlide={true} location={trip?.tripData?.location}/>
        </div>

        <div className='flex-col items-center justify-center  space-y-3 mb-10'>
          <p className='text-neutral-700 text-xl text-center'>Ah, these are your picks—looking great so far!</p>
          <div className='flex justify-center items-center gap-3'>
            <h1 className='bg-neutral-400 px-3 py-2 text-white rounded '>💵 {trip?.userSelection?.budget}</h1>
            <h1 className='bg-neutral-400 px-3 py-2 text-neutral-100 rounded '>👨‍👩‍👧‍👦 {trip?.userSelection?.days} People</h1>
            <h1 className='bg-neutral-400 px-3 py-2 text-neutral-100 rounded '>📆{trip?.userSelection?.members} Days</h1>

          </div>
        </div>
        





      </div>

    </div>
  )
}

export default InfoSection