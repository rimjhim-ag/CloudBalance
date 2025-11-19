import React, { Link } from "react";
import { NavLink } from "react-router-dom";
import {
  ManageAccounts, // User Management
  CloudQueue, // AWS Explorer
  PersonAdd, // Onboarding
  MonetizationOn, // Cost Explorer
} from "@mui/icons-material";

const SideBar = ({ isSideBarOpen }) => {
  const sideContent = [
    {
      label: "User Management",
      path: "user-management",
      icon: <ManageAccounts />,
    },
    {
      label: "Onboarding",
      path: "onboarding",
      icon: <PersonAdd />,
    },
    {
      label: "Cost Explorer",
      path: "cost-explorer",
      icon: <MonetizationOn />,
    },
    {
      label: "AWS Explorer",
      path: "aws-explorer",
      icon: <CloudQueue />,
    },
  ];

  return (
    <aside
      className={` ${
        isSideBarOpen ? "w-15" : "w-70"
      } mt-10 items-center flex flex-col gap-3 transition-width duration-400 ease-in-out`}
    >
      {sideContent.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className={({ isActive }) =>
            `
             group flex items-center gap-3  py-3 
            rounded-md cursor-pointer  
            
            ${isActive ? "active bg-[#e6f4fa] font-medium" : "hover:bg-[#e6f4fa]"}
            ${isSideBarOpen ? "w-15 px-3" : "w-65 px-2"}
            `
          }
        >
          {({ isActive }) => (
            <>
              <span
                className={`text-xl flex items-center leading-none rounded px-1 py-1  transition-colors duration-200 ease-in-out ${
                  isActive
                    ? "bg-[#1f75b6] text-white"
                    : "group-hover:bg-[#1f75b6] group-hover:text-white"
                } `}
              >
                {item.icon}
              </span>
              <span
                className={`text-md font-semibold   ${
                  isSideBarOpen ? "hidden" : ""
                }`}
              >
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
