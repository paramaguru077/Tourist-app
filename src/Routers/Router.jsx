import React from 'react'

import { createBrowserRouter } from 'react-router-dom'
import Home from '../Compontent1/Home'
import CreateTrip from '../Compontent2/CreateTrip'
import TripDetails from '../Compontent-TripDeatils/TripDetails'
const Router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/create-trip',
            element:<CreateTrip/>
        },
        {
            path:'/view-trip/:tripid',
            element:<TripDetails/>

        }
    ]
)
 

export default Router