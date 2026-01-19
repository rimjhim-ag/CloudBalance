import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import { Outlet } from "react-router-dom";



const Dashboard = () => {
  const [isSideBarOpen, setSidebarOpen] = useState(false);



 

 

  return (


   <div className="h-screen flex flex-col overflow-hidden">
      <Header sideBarOpen={setSidebarOpen} isSideBarOpen={isSideBarOpen} />
      <div className="flex flex-1">
        <SideBar isSideBarOpen={isSideBarOpen} />


         
        <MainContent className="z-40">
          <Outlet />
        </MainContent>
      </div>
    </div>

 
  );
};

export default Dashboard;
