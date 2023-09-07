import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Public from './pages/Public'
import Private from './pages/Private'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { initUser, resetUser } from './redux'


function App() {
 
  const dispatch = useDispatch() ;

   //const  compteur   = useSelector( state => state.compteur ) ;
   
   const userID = useSelector(state => state.user ) ;

   onAuthStateChanged(auth,user =>{
      if(user){
     
        dispatch(initUser(user.uid)) ;
       
      }else{

        dispatch(resetUser()) ;
      
      }

   })

  return (
    <>
      {userID ? <Private /> : <Public />}   
    </>
  )
}

export default App
