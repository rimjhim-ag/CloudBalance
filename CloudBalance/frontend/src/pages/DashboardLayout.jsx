import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSideBarOpen, setSidebarOpen] = useState(false);
  return (
    <div class="h-screen flex flex-col">
      <Header sideBarOpen={setSidebarOpen} isSideBarOpen={isSideBarOpen} />
      <div class="flex flex-1">
        <SideBar isSideBarOpen={isSideBarOpen} />

        <MainContent>
          <Outlet />
        </MainContent>
      </div>
    </div>
  );
};

export default Dashboard;
