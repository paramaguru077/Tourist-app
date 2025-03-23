import React, { useEffect,useState } from 'react'

const ACCESS_KEY=import.meta.env.VITE_IMAGE_API;

const FetchApi = (location,category,count) => {
    const[images,setImages]= useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const searchQuery= `${location||'chennai'} ${category}`;
                const imgResponse = await fetch(
                    `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${ACCESS_KEY}&per_page=${count}`
                  );

                const imgData= await imgResponse.json();
                const images = imgData.results.map((img)=>img.urls.regular);
                setImages(images);



            }
            catch(e){
                console.log(e)

            }
        }
        fetchData();
    },[location,category,count])
  return images;
}

export default FetchApi