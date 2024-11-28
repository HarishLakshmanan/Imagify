import React, { useContext, useState } from 'react'
import {assets} from '../assets/imagify-assets/assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext'

function Navbar() {
  
    
     const {user,setShowLogin} = useContext(AppContext)

     const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
       <Link to = '/'>
       <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
      </Link>
    
    
     <div>
      {user ?
       <div className='flex item-center gap-3 sm:gap-3'>
        <button onClick={()=>navigate('/buy')} className='flex item-center gap-1  bg-blue-100 px-4
        sm:px-6 py-3 sm:py-3 rounded-full hover:scale-105 transation-all
        duration-700'>
          <img src={assets.credit_star} alt="" />
          <p>Credit left :100</p>
        </button>
        <p className='flex py-3'>Hi,Harish</p>
        <div className='relative group '>
         <img src={assets.profile_icon} className='w-10 drop-shadow ' alt=''/>
         <div className='absolute hidden group-hover:block top-0 right-0 z-10 
         text-black rounded pt-12'>
          <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm '>
            <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
          </ul>
         </div>
        </div>
       </div>

      :<div className= 'flex item-center gap-2 sm:gap-5'>
        <p onClick={()=>navigate('/buy')} className='cursor-pointer'> pricing</p>
        <button className='bg-zinc-800 text-white px-7 py-1
        sm:px-8 text-sm rounded-full' onClick={()=>setShowLogin(true)}>Login</button>
        </div>}
        </div>
    </div>
    
  )
}

export default Navbar
