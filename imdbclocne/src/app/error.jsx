"use client"
import React , { useEffect }from 'react'



export default function error({error,reset}) {
    useEffect(()=>{
        console.log(error);
    },[error])


  return (
    <div className="h-[80vh] w-screen flex flex-col justify-center items-center">
        <h1>Something Went Wrong ? Please <span className="font-extrabold">Use VPN</span></h1>
        <button className="px-4 py-1 bg-blue-600 rounded-md mt-2 hover:bg-transparent hover:border" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
