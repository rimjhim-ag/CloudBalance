import React from "react";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { useSelector } from "react-redux";

const Profile = () => {
    const username = useSelector(state => state.user.username)
  
  return (
    <div className="flex flex-row gap-3 border-r border-r-[#bebaba] pr-3 cursor-pointer">
      <div className="rounded-4xl p-3 bg-blue-50 border-2 border-[#0a3ca2]  shadow-[0_0_20px_rgba(10,60,162,0.4)]  text-[#0a3ca2]">
        <PeopleOutlineIcon />
 </div>
       <div className="flex flex-col"><h4 className="text-[#525252] font-medium"> Welcome ,</h4>
      <div className="flex flex-row gap-1">  <h1 className="font-bold text-[#0a3ca2] tracking-tight">{username || "username"}</h1>
           <InfoOutlineIcon style={{color : "#0a3ca2"}}/>
        </div></div>
          
     
    </div>
  );
};

export default Profile;
