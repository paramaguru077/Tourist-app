import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom'

import Router from './Routers/Router.jsx'
const clientId=import.meta.env.VITE_GOOGLE_API|| "786428451608-o1ia6lreo2rjh3g294bcoshnqi81khtl.apps.googleusercontent.com";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
       <RouterProvider router={Router}/>

    </GoogleOAuthProvider>
    
  </StrictMode>,
)



