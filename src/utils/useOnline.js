import { useEffect, useState } from "react"

const useOnline =()=>{
const [isOnline , setIsOnline]= useState(true);
 // manage onlien and offline status + only once 
  useEffect(()=>{
    window.addEventListener("online",()=>{
        setIsOnline(true)
        
    })
    window.addEventListener("ofline",()=>{})
    setIsOnline(false)
  },[])
 
return isOnline;

}