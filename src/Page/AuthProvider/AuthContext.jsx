import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from '../../Firebase/Firebase.config';



const auth = getAuth(app);
export const Context = createContext();

const AuthContext = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]= useState(true)
const googleProvider = new GoogleAuthProvider()


// Google User
const googleSignin = () => {
  setLoading(true)
  signInWithPopup(auth,googleProvider)
}
const googleSignout = () => {
  setLoading(true)
  signOut(auth)
}

// Email User
const createUser =(email,password,name,photo)=>{
    setLoading(true)
return createUserWithEmailAndPassword (auth,email,password,name,photo);
}

const sign = (email,password)=> {
  setLoading(true);
  return signInWithEmailAndPassword (auth,email,password);
}

const logOut = () => {
  setLoading(true);
  return signOut (auth);
}

useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth,currentUser => {
    setUser(currentUser);
    console.log('Current user',currentUser)
    setLoading(false);
  });
  return()=>{
    return unSubscribe();
  }
},[])


   const userInfo={
    createUser,
    loading,
    sign,
    googleSignin,
    logOut,
    googleSignout,
    user
    }

  return (
    <Context.Provider value={userInfo}>
     {children}
    </Context.Provider>
  )
}

export default AuthContext