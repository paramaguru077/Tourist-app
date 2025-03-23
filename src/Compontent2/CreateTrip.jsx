import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { AI_PROMPT,SelectBudgetOptions,SelectTravelesList } from './Constants/Option.jsx'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { chatSession } from '../Services/AIModal';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Services/Firebaseconfig';
import{useNavigate} from 'react-router-dom'
import logo from '../Compontent1/Images/logo final.jpg'
import { FaGoogle } from "react-icons/fa";

const CreateTrip = () => {
    const data=[{
        place:"",
        days:"",
        budget:"",
        members:""
    }]
    const [formData,setFormData]=useState(data);
    const[loading,setLoading]=useState(false);


    const navigate = useNavigate();
    


    const [isOpen,setIsOpen]= useState(false);// for to check sign up
    // to handle formData
    const handleFormData= (name,value)=>{
        if(name=='days' && value>5){
            alert("enter Days within 5 days");
            return;
        }
        setFormData({
            ...formData,
            [name]:value
        })


    }
    const user = localStorage.getItem('user');
   

    //for login google 
    const login = useGoogleLogin(
        {
            onSuccess:(codeResp)=>GetUserProfile(codeResp),
            onError:(error)=>console.log(error)
        }
    )
   
    //  getting login user information
    const GetUserProfile =async(tokenInfo)=>{
        try{
            const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,{
                headers:{
                    Authorization:`Bearer ${tokenInfo.access_token}`,
                    Accept:'Application/json'
                }
            })
            localStorage.setItem('user',JSON.stringify(response.data))
            setIsOpen(false);
            OnGenerateTrip();
            

        }
        catch(e){
            console.log(e.message);
        }


    }

    //function used to i prompt
    const OnGenerateTrip = async()=>{
        const user = localStorage.getItem('user');
        if(!user){
            setIsOpen(true);  
            return;
        }
       

        if(!formData.place|| !formData.days|| !formData.budget|| !formData.members){
            alert("enter full details");
            return;
        }
        setLoading(true);

        const FINAL_PROMPT = AI_PROMPT.replace('{location}',formData?.place).replace('{totalDays}',formData?.days).replace('{totaldays}',formData?.budget).replace('{totalDays}',formData?.days)

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        setLoading(false);
        saveAiTrip(result.response.text());

    }

    // to data in firebase
    const saveAiTrip = async(TripData)=>{
        setLoading(true);

        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString();
        await setDoc(doc(db, "AITrips", docId), {
            userSelection:formData, // storing user trip details
            tripData: JSON.parse(TripData),// storing data from ai model
            userEmail:user.email, // storing email from user store in local storage
            id: docId // id using date function
          });
          setLoading(false);

          navigate('/view-trip/'+docId);




    }
    const Logout =()=>{
        googleLogout();
        localStorage.clear()
        window.location.reload();
        navigate('/')

    }


  return (
   <div className='px-4'>
    <div className='flex justify-between items-center px-6 py-4 mb-7'>
        <div className='flex items-center space-x-4 ml-8 md:ml-9' >
                        <img src={logo} alt="logo" className='w-8 rounded-full'/>
                        <span className='font-bold text-2xl leading-1 drop-shadow-lg tracking-wide'>WanderWise</span>
        
         </div>

         {!user?
          <div> <button className='py-2 px-6 border-1 text-neutral-950 ring-1  ring-neutral-800 focus:ring-amber-200  focus:ring-1 rounded-xl cursor-pointer font-medium hover:border-amber-100  duration-100' onClick={()=>setIsOpen(!isOpen)} >Signup</button></div>:
          <div><button className='py-2 px-6 border-1 text-neutral-950 ring-1  ring-neutral-800 focus:ring-amber-200  focus:ring-1 rounded-xl cursor-pointer font-medium hover:border-amber-100  duration-100' onClick={Logout} >Logout</button> </div>
          }

    </div>

    <div className=' m-auto w-full   bg-[#79373700]'>
            <div className='flex flex-col gap-2 items-center'>
            <span className='text-3xl text-[#f30c0c] rounded-2xl cursor-pointer hover:scale-120 transition-all duration-100'><FaShoppingBag /></span>
            <h1 className='text-2xl md:text-3xl font-bold drop-shadow-xl text-[hsla(0,85%,57%,1)] tracking-wider text-center'>Tell Us Your Travel Prefrenece 🚞</h1>
            <p className='mt-2  text-[17px] md:text-xl text-center text-[#5f5858]'>Plan your journey effortlessly by creating a new trip. Fill in the details and start your adventure!</p>
            </div>

            <div className='mt-8 ' >
                <div className='flex flex-col items-center'>
                    <h1 className='text-xl text-[#1b1a19]'>What is destination of choice?</h1>
                    <input type="text" className='outline-none border border-[#db0f0f] min-w-8/12 p-1 rounded-lg mt-3 focus:ring-1 ring-amber-100 ' value={formData.place} onChange={(e)=>handleFormData("place",e.target.value)} />
                </div>
                <div className='flex flex-col items-center mt-3'>
                    <h1 className='text-xl text-[#14100f]'>How Many days are you want to trip</h1>
                    <input type="number" className='outline-none border border-[#db0f0f] min-w-8/12 rounded-lg mt-3 focus:ring-1 ring-amber-100 p-1' value={formData.days} onChange={(e)=>handleFormData("days",e.target.value)}  />
                </div>

            </div>
            
            <div className='flex flex-col items-center mt-4'>
                    <h1 className='text-xl text-[#1a1615]'>What is Your Budget?</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-4 mx-4 md:mx-1'>
                        {SelectBudgetOptions.map((item,i)=>(
                            <div className={`border border-[#db0f0f] flex flex-col items-center hover:scale-105 hover:shadow-2xl shadow-gray-400 cursor-pointer rounded-lg p-4 transition-all duration-100 ${formData.budget==item.title && 'border-2 border-[#f00808]'}`} key={i} onClick={()=> handleFormData("budget",item.title)}>
                                <h2 className='text-3xl m-2 '>{item.icon}</h2>
                                <h2 className='text-xl font-medium text-[hsl(19,90%,50%)]'>{item.title}</h2>
                                <h2 className='text-[16px] text-[#c9b081] drop-shadow-xl brightness-90'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>


            </div>
            
            <div className='flex flex-col items-center mt-4 mx-4 md:mx-1'>
                    <h1 className='text-xl text-[rgb(43,40,39)]'>Who do you plan on traveling with on your next adventure?</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-4'>
                        {SelectTravelesList.map((item,i)=>(
                            <div className={`border flex flex-col  items-center hover:scale-105 hover:shadow-2xl shadow-gray-400 cursor-pointer rounded-lg p-4 transition-all duration-100 border-[#db0f0f] ${formData.members==item.people && 'border-2 border-[#ec1313] '}`} key={i} onClick= {()=>handleFormData("members",item.people)}>
                                <h2 className='text-3xl m-2 '>{item.icon}</h2>
                                <h2 className='text-xl font-medium text-[hsl(19,90%,50%)]'>{item.title}</h2>
                                <h2 className='text-[16px] text-[#c9b081] drop-shadow-xl brightness-90'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>


            </div>

            <div className='flex justify-center my-4'>
                <button disabled={loading} className='px-4 py-2 flex justify-between items-center gap-2 text-[#fff] bg-[#f51b1b] rounded-xl cursor-pointer hover:ring-1 ring-[#ee1111] hover:bg-amber-50 hover:text-[#f51b1b] text-xl transition-all duration-150' onClick={OnGenerateTrip}>{loading&& <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin'/>}Generate Trip</button>
            </div>
            {
                isOpen &&
                <div className='fixed  inset-0 flex items-center justify-center bg-black/60'>
                    <div className='bg-white p-6 rounded-lg shawdow-lg w-96  '>
                        <div className='flex justify-between items-center mb-4'>
                            <h1 className='text-[17px] font-mono 
                            font-medium text-red-600'>Sign Up</h1>
                            
                            <button className="  text-xl cursor-pointer active:bg-red-600" onClick={()=>setIsOpen(false)}> ✕</button>
                            

                        </div>
                        <p className="text-gray-700 text-center">Welcome! Please sign up to continue.</p>
                       <div className='flex justify-center items-center'>
                       <button onClick={login} className='border px-4 py-2 mt-4 rounded-xl text-[17px] font-medium bg-[#f32a23f6] text-amber-50 cursor-pointer hover:bg-red-500 duration-100 flex items-center gap-4'> <span className='bg-white p-2 text-red-500 rounded-full'><FaGoogle />
                       </span>Continue with google</button>
                       </div>
                        
                    </div>
                </div>
            }
            
            
            

        </div>
   </div>
  )
}

export default CreateTrip
// authivation work 