import React from 'react'
import logo from '../assets/Cloudkeeper_New.svg'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../redux/actions/auth.actions';
import Profile from '../pages/Profile/Profile';






const Header = ({sideBarOpen, isSideBarOpen}) => {

const dispatch = useDispatch();


  const navigate = useNavigate();

const handleClick = () =>{

     dispatch(logoutThunk());
     navigate("/");
}



  return (
    <div className=' flex justify-between  items-center  shadow-lg shadow-gray-300 min-h-20 px-10 bg-white z-10'>
        <section className='flex justify-center items-center gap-10'>
             <img src={logo} alt="CloudKeeper_Logo" className="w-48 " />

            
              <MenuIcon onClick={()=> sideBarOpen(!isSideBarOpen)} sx={{ width: 30, height: 30 }}  className="text-[#0a1c8f] cursor-pointer" />
                    
        </section>

        <section className='flex flex-row gap-5'>
          <Profile/>
            <button onClick={handleClick}className=' border-2 border-[#0a1c8f] p-2 w-30 rounded text-[#0a1c8f] font-semibold cursor-pointer'><LogoutOutlinedIcon/>  Logout</button>
        </section>
    </div>
  )
}

export default Header