import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const[isLogin, setIsLogin] = useState(true);
    const clickHandler = ()=>{
        setIsLogin(!isLogin);
    }
  return (
    <div>
       <Header />
       <div className='absolute'>
       <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" class="default-ltr-cache-1jxs5rh e13sg9vu0" />
       </div>
      <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-85'>
       
       <h1 className='font-bold text-3xl py-3'>{!isLogin ?" Sign up ": "Sign In"}</h1>
       {!isLogin && <input type="text" placeholder='Full Name' className='p-4 my-3 w-full bg-gray-800 rounded-md'  /> }
        <input type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-md'  />
        <input type="password" placeholder='Password' className='p-4 mb-8 w-full bg-gray-800 rounded-md' />
         <button className='bg-red-700 p-4 w-full my-6 rounded-lg'>{isLogin ?"Sign In" : "Sign up"}</button>

         <p className='my-6 cursor-pointer' onClick={clickHandler} >{!isLogin ? "Already Registered? sign in now." : "New to Netflix? Sign up now." }</p>
      </form>
    </div>
  )
}

export default Login