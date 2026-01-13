import React, { useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {  Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 
  const {login , loading} = useAuth();


  const {token : checkLogin  } = useSelector((state) => state.auth);

  if (checkLogin) {
    console.log("reverting")
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();

   await login(formData);


  
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <img
        src="./src/assets/Cloudkeeper_New.svg"
        alt="CloudKeeper_Logo"
        className="w-48"
      />

      <form
        className="flex flex-col justify-center  gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          required
          value={formData?.email}
          onChange={handleChange}
          name="email"
          className="border border-gray-300 p-2 rounded w-110"
        />

        <label htmlFor="password" className="mt-6">
          Password
        </label>
        <input
          type="password"
          required
          value={formData?.password}
          onChange={handleChange}
          name="password"
          className="border border-gray-300 p-2 rounded w-110"
        />

        <button
          type="submit"
          className="bg-[#4398D7] text-white p-2 rounded mt-6 hover:bg-[#1f75b6] w-110 cursor-pointer"
        >
          { !loading ? "Login" : <CircularProgress color="white"  size={20}/>}
        </button>
      </form>
    </div>
  );
}
