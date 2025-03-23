import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom'

import Router from './Routers/Router.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_API}>
       <RouterProvider router={Router}/>

    </GoogleOAuthProvider>
    
  </StrictMode>,
)



