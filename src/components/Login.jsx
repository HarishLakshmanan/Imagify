import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/imagify-assets/assets/assets'
import { AppContext } from '../context/AppContext'

const Login = () => {

    const [state,setState]=useState('LogIn')
    const {setShowLogin}=useContext(AppContext)

    useEffect(()=>{
      document.body.style.overflow='hidden';

      return()=>{
        document.body.style.overflow='unset';
      }
    })

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm
    bg-black/30 flex justify-center items-center'>
      <form className='relative bg-white p-10 rounded-xl text-slate-500'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium
        '>{state}</h1>
        <p className='text-sm'>Welcome back! please sign in to continue</p>

        { state !=='LogIn' && <div className='border px-5 py-2 flex items-center gap-2
        rounded-ful mt-5'>
            <img src={assets.profile_icon} alt=""  className='w-5'/>
            <input type="text" className='outline-none text-sm' 
            placeholder='Full Name' required />
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2
        rounded-ful mt-3'>
            <img src={assets.email_icon} alt="" />
            <input type="email" className='outline-none text-sm' 
            placeholder='Email Id' required />
        </div>

        <div className='border px-6 py-2 flex items-center gap-2
        rounded-ful mt-3'>
            <img src={assets.lock_icon} alt="" />
            <input type="password" className='outline-none text-sm' 
            placeholder='Password' required />
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer '>Forgot password</p>
        <button className='bg-blue-600 text-white rounded-full w-full py-2'>
          {state === 'LogIn' ? 'LogIn' : 'Create account'}</button>

       {state === 'LogIn'? <p className='text-center mt-5'>Don't have an account?
        <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>
          Sign up</span></p>
         :
        <p className='text-center mt-5'>Already have an account?
        <span className='text-blue-600 cursor-pointer'onClick={()=>setState('LogIn')}>
          Log In</span></p>}
        
        <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt=""className='absolute top-5 
        right-5 cursor-pointer' />

      </form>
    </div>
  )
}

export default Login