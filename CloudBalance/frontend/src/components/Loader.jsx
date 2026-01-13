import React from 'react'
import loader from "../assets/download.svg";

const Loader = ({ fullScreen = false, height = 'h-32' }) => {
  return (
    <div className={`
      flex justify-center items-center
      ${fullScreen ? 'h-screen bg-gray-200' : `${height} bg-transparent`}
    `}>
      <img src={loader} alt="loader" className=" w-16 h-16" />
    </div>
  )
}

export default Loader
