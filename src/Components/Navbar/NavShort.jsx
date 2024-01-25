import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Page/AuthProvider/AuthContext'
import AvaterPIc from "../../assets/image/avater.jpg"
import Swal from 'sweetalert2'

const NavShort = () => {

    const [isOpen, setIsOpen] = useState(false)
    const {user,googleSignout,logOut} = useContext(Context)

    const handleLogOut = ()=> {
        logOut()
        .then(()=>{})
        .catch(error => {
          console.log(error)
        })
    
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout",
          showConfirmButton: false,
          timer: 1500
        })
       googleSignout()
       .then(res => res.user)
       .catch(error => console.error(error))
      }


  return (
    <div className='relative'>
    <div className='flex flex-row items-center gap-3'>
      <div className='hidden md:block'>
        <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
         Store your product
        </button>
      </div>
      {/* Dropdown btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
      >
        <AiOutlineMenu />
        <div className='hidden md:block'>
          <img
            className='rounded-full'
            referrerPolicy='no-referrer'
            src={user && user.photoURL ? user.photoURL : AvaterPIc}
            alt='profile'
            height='30'
            width='30'
          />
        </div>
      </div>
    </div>
    {isOpen && (
      <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
        <div className='flex flex-col cursor-pointer'>
        <Link
            to='/'
            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
          Home
          </Link>
          {
            user && (
                <>
                <Link to="/dashboard"
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
           <p>Dashboard</p>
          </Link>
                </> 
            )
          }
          {
            user && (
                <>
                <Link
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
          >
           <button className='btn' onClick={handleLogOut}>Logout</button>
          </Link>
                </> 
            )
          }
          {
            !user && (
                <>
                <Link
              to='/login'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
            </Link>
                </>
            )
          }
          
        </div>
      </div>
    )}
  </div>
  )
}

export default NavShort