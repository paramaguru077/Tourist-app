import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hotel from './Hotel';
import InfoSection from './InfoSection';
import Places from './Places';
import Restrutants from './Restrutants';
import { doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { db } from '../Services/Firebaseconfig';
const TripDetails = () => {
    const{tripid}= useParams();
    const[trip,setTrip]= useState([]);
    const [error,setError]= useState(false);

    const getTripData=async()=>{
        const docRef=doc(db,'AITrips',tripid);
        const docSnap= await getDoc(docRef);
        

        if(docSnap.exists()){
            setTrip(docSnap.data());
        }
        else{
            setError(!error);
        }
    }

    useEffect(()=>{
        getTripData();
        
        
    },[tripid])

    console.log(trip);

    
    
    
    
  return (
    <div className='max-w-[1370px] m-auto'>
        {
            error?(
                <div className='flex justify-center items-center'>
                    <h1 className='text-2xl text-red-600 tracking-widest'>No datas found</h1>
                </div>
            )
            :
            (
                <div >
                    <InfoSection trip={trip}/>
                    <Hotel trip={trip}/>
                    <Restrutants trip={trip}/>
                    <Places trip={trip}/>

                </div>
            )
        }
    </div>
  )
}

export default TripDetails