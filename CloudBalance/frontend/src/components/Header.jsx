import React from 'react'
import logo from '../assets/Cloudkeeper_New.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';





const Header = ({sideBarOpen, isSideBarOpen}) => {

  const navigate = useNavigate();



  return (
    <div className='flex justify-between  items-center  shadow-lg shadow-gray-300 h-20 px-10'>
        <section className='flex justify-center items-center gap-10'>
             <img src={logo} alt="CloudKeeper_Logo" className="w-48 " />
                   <MenuIcon onClick={()=> sideBarOpen(!isSideBarOpen)} sx={{ width: 30, height: 30 }}  className="text-blue-700 cursor-pointer" /> 
        </section>

        <section>
            <button onClick={()=> navigate("/")}className=' border-2 border-blue-700 p-2 w-30 rounded text-blue-700 font-semibold cursor-pointer'><LogoutOutlinedIcon/>  Logout</button>
        </section>
    </div>
  )
}

export default Header