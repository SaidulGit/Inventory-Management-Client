import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Context } from "../AuthProvider/AuthContext";

const Privateroute = ({children}) => {
    const {user,loading}=useContext(Context);
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }

  return (
   <Navigate to='/login' state={{from:location}} replace ></Navigate>
  )
  }
export default Privateroute