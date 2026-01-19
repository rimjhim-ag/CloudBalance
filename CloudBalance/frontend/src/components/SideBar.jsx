import React, { Link } from "react";
import { NavLink } from "react-router-dom";
import {
  ManageAccountsOutlined,
  CloudQueueOutlined,
  PersonAddOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import { ROLE_SIDEBAR } from "../utils/rbacConstant";
import { useSelector } from "react-redux";


const SideBar = ({ isSideBarOpen }) => {

 const role = useSelector(state => state.user.role);
  const sideContent = [
    {
      label: "User Management",
      path: "users",
      icon: <ManageAccountsOutlined />,
    },
    {
      label: "Onboarding",
      path: "onboarding",
      icon: <PersonAddOutlined />,
    },
    {
      label: "Cost Explorer",
      path: "cost-explorer",
      icon: <MonetizationOnOutlined />,
    },
    {
      label: "AWS Explorer",
      path: "aws-explorer",
      icon: <CloudQueueOutlined />,
    },
  ];

  
  const allowedPaths = ROLE_SIDEBAR[role] || [];
 const filteredContent = sideContent.filter(item => allowedPaths.includes(item.path));

  return (
    <aside
      className={` ${
        isSideBarOpen ? "w-15" : "w-70"
      } mt-10 items-center flex flex-col gap-1 transition-width duration-400 ease-in-out`}
    >
      {filteredContent.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className={({ isActive }) =>
            `
             group flex items-center gap-3  py-3 
            rounded-md cursor-pointer  
            
            ${isActive ? "active bg-[#e6f4fa]" : "hover:bg-[#e6f4fa]"}
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
                className={`text-md    ${
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
