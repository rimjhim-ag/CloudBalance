
import React from "react"

import { useNavigate } from "react-router-dom"


export default function Login(){

  const navigate = useNavigate();

   const handleSubmit = () =>{
            navigate("/dashboard");
   }

    return(
         <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <img src="./src/assets/Cloudkeeper_New.svg" alt="CloudKeeper_Logo" className="w-48" />

      <form className="flex flex-col justify-center  gap-2" onSubmit={handleSubmit}>
        <div></div><label htmlFor="email">Email</label>
        <input type="email" name="email" className="border border-gray-300 p-2 rounded w-110" />

        <label htmlFor="password" className="mt-6">Password</label>
        <input type="password" name="password" className="border border-gray-300 p-2 rounded w-110" />

        <button className="bg-[#4398D7] text-white p-2 rounded mt-6 hover:bg-[#1f75b6] w-110 cursor-pointer">Login</button>
      </form>
    </div>
    )



} 