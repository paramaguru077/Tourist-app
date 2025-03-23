
import React, { useEffect, useState } from 'react'
import {ChevronLeft,ChevronRight} from "react-feather"

const ACCESS_KEY=import.meta.env.VITE_IMAGE_API;
const Slides = ({  autoSlide,location}) => {
   
   const[images,setImages]= useState([]);
  const[curr,setCurr]= useState(0);
  const prev =()=>{
    const s = curr==0?images.length-1:curr-1;
    setCurr(s);
  }
  const next = ()=>{
    setCurr((curr)=>(
      curr==images.length-1?0:curr+1
    ))
  }
  useEffect(()=>{
    if(!autoSlide) return;
    const slideInterval = setInterval(next,9000);

    return ()=> clearInterval(slideInterval);

  },[curr,autoSlide])
  useEffect(() => {
    if (images.length > 0) {
      setCurr(0); // Reset to first image when images update
    }
  }, [images]);
  

  useEffect(()=>{
    const defaultLocation = location || "chennai";

    const fetchImages = async ()=>{
      try{
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${defaultLocation}&client_id=${ACCESS_KEY}&per_page=4`)

        const data = await response.json();
       
        const images = data.results.map(img=>(
          `${img.urls.raw}&w=1300&h=600&fit=crop`
        ))
        setImages(images);


          

      
      }
      catch(e){
        console.error(e);

      }
    }
    fetchImages()
  },[location])




  return (
    <div className=" relative  p w-full">
      <div className='flex  transition-transform ease-out duration-500 w-full' style={{transform:`translateX(-${curr*100}%)`}}>
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image} 
          alt={`Slide ${index + 1}`} 
          className="w-full  object-center rounded-lg shadow-md"
        />
      ))}
      </div>
      <div className='absolute inset-0 flex items-center p-5 justify-between'>
        <button onClick={prev} className='rounded-full shadow bg-white/80 hover:bg-white text-gray-800 cursor-pointer transform -translate-y-1/2'>
          <ChevronLeft size={40} />
        </button>
        <button  onClick={next} className='rounded-full shadow bg-white/80 hover:bg-white text-gray-800 cursor-pointer transform -translate-y-1/2'>
          <ChevronRight size={40}/>
        </button>
      </div>

      <div className='absolute bottom-7 right-0 left-0'>
        <div className='flex items-center justify-center gap-2 '>
          {
            images.map((_,i)=>(
              <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr==i? 'p-2' : 'bg-white/90'} `}>

                </div>
            ))
          }

        </div>

      </div>
    </div>
  )
}

export default Slides
