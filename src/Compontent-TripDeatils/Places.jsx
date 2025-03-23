import React from 'react'
import img2 from './Images/img2.jpg'
import FetchApi from '../Image Api/FetchApi'
import { Link } from 'react-router-dom'
const Places = ({trip}) => {
 if(!trip || !trip.tripData || !trip.tripData.itinerary){
  return <p className='text-center text-xl text-red-500'> No trip data available</p>
 }
 const sortedDays = Object.keys(trip.tripData.itinerary).sort(
  (a, b) => Number(a.replace("day", "")) - Number(b.replace("day", ""))
)
const sorteDays = sortedDays.map((day)=>{
  const dayData = trip?.tripData?.itinerary[day];
  return {
    day,
    theme:dayData?.theme,
    bestTimeToVisit:dayData?.bestTimeToVisit,
    activities:dayData?.activities.map((activity)=>(
      {
        placeName:activity?.placeName,
        placeDetails:activity?.placeDetails||"No details Available",
        ticketPricing:activity?.ticketPricing,
        travelTime:activity?.travelTimeBetweenLocations,
        
      }

    )) 
   }
})

 const lengthPlaces= sorteDays.length;
 const location=trip?.tripData?.location;
 const images= FetchApi(location,"tourist attractions",lengthPlaces)

 //console.log(Object.keys(trip?.tripData?.itinerary))
 
  return (
    <div className='max-w-[1000px] md:mx-auto mx-24 mt-10'>
      <h1 className='text-center text-2xl lg:text-4xl font-bold drop-shadow-lg text-neutral-700'>Places</h1>
      <div className='grid grid-cols-1  p-2 mt-7 gap-4'>
  {sorteDays.map((item, dayIndex) => (
    <div key={dayIndex} className=" p-4 rounded-lg shadow-x">
      
      <h2 className='text-center text-xl font-bold text-gray-700 mb-4'>{item.day}</h2>
      <p className='text-center mt-4 text-2xl text-gray-600 font-mono'>Addition Information</p>
    <ol className='flex flex-col items-center mt-1 list-decimal '>
      <li className='text-sm text-blue-500'>
        Best time to visit: {item.bestTimeToVisit}
      </li>
      <li className='text-sm text-blue-500'>
        Theme: {item.theme}
      </li>
      

    </ol>

      {/* Activities */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      {item.activities.map((activity, activityIndex) => (

        
          <Link 
          key={activityIndex} 
          to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.placeName)}`} 
          target="_blank"
          className="block"
          >

                <div key={activityIndex} className='p-4  rounded-lg shadow-sm bg-white '>
                {/* Image Section */}
                {!activity.imageUrl && (
                  <div className='w-full mb-3'>
                    <img src={images[activityIndex]} alt={activity.placeName} className='rounded-xl w-full object-cover h-79' />
                  </div>
                )}

                {/* Details Section */}
                <h1 className='text-center text-2xl font-semibold text-neutral-700'>{activity.placeName}</h1>
                <p className='text-center p-1 text-[15px] text-neutral-500'>{activity.placeDetails}</p>

                {/* Ticket Pricing & Travel Time */}
                {activity.ticketPricing && (
                  <p className="text-center text-sm text-blue-600 font-medium mt-2">
                    Ticket: {activity.ticketPricing}
                  </p>
                )}
                {activity.travelTime && (
                  <p className="text-center text-sm text-green-600 font-medium">
                    Travel Time: {activity.travelTime}
                  </p>
                )}
             </div>
           </Link>
       
      ))}
      
    </div>
   
    

    </div>
  ))}
</div>


    </div>
  )
}

export default Places

