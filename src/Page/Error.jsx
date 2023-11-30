import React from 'react'
import img404 from '../assets/404_page_cover.jpg'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        
        <div className='flex justify-center'>
        <img className="w-2/4" src={img404} alt="" />
        </div>
     <div className='flex justify-center mt-8'>
     <button className='btn bg-sky-400 text-white'><NavLink to="/">Back Home</NavLink></button>
     </div>
        </div>
       
  )
}

export default Error